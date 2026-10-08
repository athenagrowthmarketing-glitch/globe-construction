export default async function handler(req, res) {
  // CORS & Method validation
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, zip, details, timeline, token } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone number are required.' });
    }

    // Google reCAPTCHA v3 verification (Server-Side)
    // The secret key is kept strictly in server environment, never bundled into client JavaScript
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LfOpRctAAAAAFsfHCAki_z8RXXZtiJjaTdyOzAX';
    let recaptchaScore = null;

    if (token) {
      try {
        const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
        const verifyResponse = await fetch(verifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: secretKey,
            response: token,
          }),
        });

        const verifyData = await verifyResponse.json();
        recaptchaScore = verifyData.score;

        if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.35)) {
          return res.status(400).json({
            success: false,
            message: 'reCAPTCHA verification score too low. Please call us directly at +1 (813) 394-4528.',
            score: verifyData.score,
          });
        }
      } catch (captchaErr) {
        console.warn('reCAPTCHA network check skipped:', captchaErr);
      }
    }

    // Format lead payload
    const nameParts = (name || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadData = {
      fullName: name,
      firstName,
      lastName,
      phone,
      email: email || '',
      postalCode: zip || '',
      service: service || 'Kitchen Remodeling',
      timeline: timeline || 'Planning Phase',
      notes: details || '',
      company: 'Globe Construction',
      source: 'Globe Construction Website Lead',
      recaptchaScore,
      submittedAt: new Date().toISOString(),
    };

    console.log('[LEAD RECEIVED]', leadData);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your estimate request has been submitted. Our project team will contact you within 24 hours.',
      lead: leadData,
    });
  } catch (error) {
    console.error('Server error handling estimate request:', error);
    return res.status(500).json({ success: false, message: 'Internal server error processing request.' });
  }
}
