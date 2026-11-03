import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Loader2, Send, MessageSquare, ArrowRight, Mail } from 'lucide-react';

const RECAPTCHA_SITE_KEY = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';

export default function EstimateSection({ defaultService = 'Kitchen Remodeling' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    zip: '',
    timeline: '1-3 Months',
    details: '',
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Full Home Remodeling',
    'Home Addition',
    'Commercial Remodeling',
    'Other Project',
  ];

  const timelines = [
    'Immediate (Next 30 Days)',
    '1–3 Months',
    '3–6 Months',
    'Planning Phase',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      let token = '';

      // Execute Google reCAPTCHA v3
      if (typeof window !== 'undefined' && window.grecaptcha) {
        token = await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            try {
              const res = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
                action: 'submit_globe_estimate',
              });
              resolve(res);
            } catch (err) {
              console.warn('reCAPTCHA execution error:', err);
              resolve('');
            }
          });
        });
      }

      const webhookPayload = {
        name: formData.name,
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        zip: formData.zip,
        postalCode: formData.zip,
        timeline: formData.timeline,
        details: formData.details,
        notes: formData.details,
        company: 'Globe Construction',
        source: 'Globe Construction Website Estimate Form',
        submittedAt: new Date().toISOString(),
      };

      // 1. Direct Webhook to LeadConnector / GoHighLevel
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/wr9YVe8FDcTksUup9qpu/webhook-trigger/b275afc3-b423-4388-b0d2-4dff3850cbcc';
      try {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify(webhookPayload),
        }).catch((err) => console.warn('Webhook background dispatch:', err));
      } catch (e) {
        console.warn('Webhook call note:', e);
      }

      // 2. Send to serverless API endpoint
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (!response.ok && response.status !== 404) {
        const result = await response.json();
        throw new Error(result.message || 'Error submitting request');
      }

      setSubmitted(true);
    } catch (err) {
      console.warn('Backend submission note:', err.message);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    if (!formData.name || !formData.phone) {
      setErrorMessage('Please enter your name and phone number to continue.');
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  return (
    <section id="estimate" className="py-20 lg:py-28 bg-[#000D13] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CBB890]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider">
              <span>Begin Your Renovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF9F6] font-display tracking-tight leading-[1.15]">
              Request an In-Home <br />
              <span className="text-[#CBB890] font-editorial italic font-normal">
                Project Consultation.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Tell us about your kitchen, bathroom, whole-home remodel, or structural addition. 
              Our team will review your scope, verify zoning and permitting parameters, and schedule 
              a detailed in-home walkthrough.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href="tel:+18133944528"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#051821] border border-white/10 hover:border-[#CBB890]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#000D13] text-[#CBB890] flex items-center justify-center shrink-0 border border-[#CBB890]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-bold block">
                    Direct Call / Text
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#CBB890] transition-colors">
                    +1 (813) 394-4528
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#051821] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#000D13] text-[#CBB890] flex items-center justify-center shrink-0 border border-[#CBB890]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-bold block">
                    Operational Base
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Odessa, FL 33556 • Serving Pasco & Tampa Bay
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#051821] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#000D13] text-[#CBB890] flex items-center justify-center shrink-0 border border-[#CBB890]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-bold block">
                    Licensed & Insured
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Florida General Contractor Standards & Protection
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Hub (Form temporarily commented out for site approval) */}
          <div className="lg:col-span-7">
            <div className="bg-[#051821] border border-[#CBB890]/25 rounded-2xl p-6 sm:p-9 shadow-2xl relative">
              {/* === DIRECT CONTACT DISPLAY DURING SITE APPROVAL (ZERO FORMS) === */}
              <div className="py-4 sm:py-6 space-y-6 text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CBB890]">
                    Direct Project Inquiries
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    Speak With Our General Contractor
                  </h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    We are currently booking on-site consultations and remodeling evaluations directly with our licensed project directors. Reach out by phone, WhatsApp, or email for prompt assistance.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+18133944528"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#000D13] border border-[#CBB890]/30 hover:border-[#CBB890] transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#CBB890]/15 text-[#CBB890] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 font-medium">Direct Line · Mon - Sat</div>
                        <div className="text-base font-bold text-white group-hover:text-[#CBB890] transition-colors">
                          +1 (813) 394-4528
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#CBB890] shrink-0" />
                  </a>

                  <a
                    href="https://wa.me/18133944528?text=Hello%20Globe%20Construction,%20I%20would%20like%20to%20request%20a%20project%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#000D13] border border-white/10 hover:border-[#25D366]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 font-medium">Instant Messaging</div>
                        <div className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                          Chat on WhatsApp
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#25D366] shrink-0" />
                  </a>

                  <a
                    href="mailto:globegroupfl@gmail.com"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#000D13] border border-white/10 hover:border-[#CBB890]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-white/5 text-[#CBB890] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 font-medium">Email Consultation</div>
                        <div className="text-base font-bold text-white group-hover:text-[#CBB890] transition-colors">
                          globegroupfl@gmail.com
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#CBB890] shrink-0" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/50 text-center">
                  Licensed & Insured Florida CGC • Mon – Sat: 8:00 AM – 6:00 PM
                </div>
              </div>

              {/* ========================================================
                  FORM TEMPORARILY COMMENTED OUT FOR SITE APPROVAL
                  (UNCOMMENT THE BLOCK BELOW TO REACTIVATE THE FORM)
                 ======================================================== */}
              {/*
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#CBB890]/20 text-[#CBB890] flex items-center justify-center mx-auto border border-[#CBB890]/40">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our project director will review your scope for {formData.service} and call you at {formData.phone} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: defaultService,
                        zip: '',
                        timeline: '1-3 Months',
                        details: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center text-xs uppercase tracking-wider font-bold text-[#CBB890] hover:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {step === 1 ? 'Step 1: Project Parameters' : 'Step 2: Scope & Timeline'}
                      </h3>
                      <p className="text-xs text-white/60">
                        {step === 1 ? 'Select your service & contact information' : 'Tell us more about your ideal finished result'}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#CBB890] bg-[#CBB890]/15 px-2.5 py-1 rounded border border-[#CBB890]/30">
                      Step {step} of 2
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/50 border border-red-500/30 text-red-200 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2.5">
                          Select Remodeling Service *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {services.map((srv) => (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: srv })}
                              className={`p-2.5 text-xs rounded-lg border text-center font-medium transition-all ${
                                formData.service === srv
                                  ? 'border-[#CBB890] bg-[#CBB890]/15 text-[#CBB890] font-bold shadow-sm'
                                  : 'border-white/10 bg-[#000D13]/60 text-white/70 hover:border-white/20'
                              }`}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Robert Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#CBB890] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(813) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#CBB890] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#CBB890] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                            Project Zip Code *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 33556"
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#CBB890] transition-colors"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
                      >
                        <span>Continue to Step 2</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                          Estimated Timeline
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Immediate (< 1 mo)', '1-3 Months', '3-6 Months', 'Planning Phase'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: t })}
                              className={`p-2 text-[11px] rounded-lg border text-center font-medium transition-all ${
                                formData.timeline === t
                                  ? 'border-[#CBB890] bg-[#CBB890]/15 text-[#CBB890] font-bold'
                                  : 'border-white/10 bg-[#000D13]/60 text-white/70 hover:border-white/20'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                          Brief Project Vision / Scope Notes
                        </label>
                        <textarea
                          rows={4}
                          placeholder="e.g. Looking to remove a kitchen wall, install an oversized quartz island, and update master bath with a curbless walk-in shower."
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          className="w-full bg-[#000D13] border border-white/15 rounded-lg p-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#CBB890] transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 border border-white/20 text-white/80 hover:text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all"
                        >
                          ← Back
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Request</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[10px] text-white/40 text-center leading-normal pt-2">
                        Protected by Google reCAPTCHA v3. We never sell your personal information.
                      </p>
                    </div>
                  )}
                </form>
              )}
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
