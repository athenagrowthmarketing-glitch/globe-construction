import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronDown,
  X,
  Loader2,
  CheckCircle2,
  Share2,
} from 'lucide-react';

const RECAPTCHA_SITE_KEY = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';
const LEADCONNECTOR_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/wr9YVe8FDcTksUup9qpu/webhook-trigger/b275afc3-b423-4388-b0d2-4dff3850cbcc';

export default function LinksPage() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Estimate Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Kitchen Remodeling',
    zip: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    {
      name: 'Kitchen Remodeling',
      href: '/kitchen-remodeling',
      desc: 'Custom cabinetry, quartz islands & chef kitchens',
    },
    {
      name: 'Bathroom Remodeling',
      href: '/bathroom-remodeling',
      desc: 'Luxury wet rooms, vanities & walk-in showers',
    },
    {
      name: 'Full Home Remodeling',
      href: '/full-home-remodeling',
      desc: 'Complete architectural interior transformations',
    },
    {
      name: 'Home Additions & Lanais',
      href: '/home-additions',
      desc: 'Screened enclosures, outdoor living & expansions',
    },
  ];

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Globe Construction | Florida General Contractor',
          text: 'Residential remodeling & general contracting across Tampa Bay & Odessa, FL.',
          url,
        });
      } catch {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleEstimateSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      let token = '';
      if (typeof window !== 'undefined' && window.grecaptcha) {
        token = await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            try {
              const res = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
                action: 'submit_linktree_estimate',
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
        details: formData.details,
        notes: formData.details,
        company: 'Globe Construction',
        source: 'Globe Construction Bio Link',
        submittedAt: new Date().toISOString(),
      };

      // 1. Direct Webhook to LeadConnector CRM
      fetch(LEADCONNECTOR_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      }).catch((err) => console.warn('LeadConnector direct hook warning:', err));

      // 2. Secondary API fallback
      fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token, source: 'Bio Link' }),
      }).catch((err) => console.warn('Local API fallback warning:', err));

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setErrorMessage('There was a temporary error submitting. Please call us directly at (813) 394-4528.');
    }
  };

  return (
    <div className="min-h-screen bg-[#060A0D] text-[#EAECEF] font-poppins relative selection:bg-[#CBB890]/30 selection:text-white flex flex-col justify-between">
      {/* Subtle luxury ambient depth */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(203,184,144,0.18),transparent_70%)]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[440px] mx-auto px-5 py-8 sm:py-12 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtle Top Utility Bar */}
          <div className="flex items-center justify-end mb-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/50 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full transition-colors active:scale-95 cursor-pointer font-medium"
              title="Share profile"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CBB890]" />
                  <span className="text-[#CBB890]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-white/50" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          {/* Profile Header - Pure, Clean & Architectural */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#091015] border border-[#CBB890]/25 shadow-xl mb-4">
              <img
                src="/images/globe-logo-transparent.png"
                alt="Globe Construction"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <h1 className="text-lg sm:text-xl font-semibold uppercase tracking-[0.18em] text-white">
              Globe Construction
            </h1>

            <p className="text-[11px] uppercase tracking-[0.2em] text-[#CBB890] font-medium mt-1">
              Florida General Contractor
            </p>

            <p className="text-[11px] tracking-[0.14em] uppercase text-white/45 mt-1 font-normal">
              Odessa & Tampa Bay, FL
            </p>
          </div>

          {/* Core Action Links - Pure Typography, Premium & Minimal */}
          <div className="space-y-2.5">
            {/* 1. Request Estimate - Primary Gold Card */}
            <button
              onClick={() => setIsEstimateModalOpen(true)}
              className="w-full text-center py-4 px-5 rounded-xl bg-[#CBB890] hover:bg-[#D5C49F] text-[#060A0D] transition-all duration-150 cursor-pointer shadow-sm group active:scale-[0.99]"
            >
              <div className="text-[13px] sm:text-sm font-semibold uppercase tracking-[0.12em]">
                Request An Estimate
              </div>
              <div className="text-[11px] text-[#060A0D]/75 font-normal tracking-wide mt-0.5">
                In-Home Consultation · Licensed FL CGC
              </div>
            </button>

            {/* 2. WhatsApp Direct */}
            <a
              href="https://wa.me/18133944528?text=Hello%20Globe%20Construction,%20I%20would%20like%20to%20discuss%20a%20remodeling%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3.5 px-5 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                Chat on WhatsApp
              </div>
              <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                Direct message with our team
              </div>
            </a>

            {/* 3. Direct Phone Call */}
            <a
              href="tel:+18133944528"
              className="w-full block text-center py-3.5 px-5 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                Call (813) 394-4528
              </div>
              <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                Direct line · Mon – Sat
              </div>
            </a>

            {/* 4. Project Gallery - Clean Typography (Preview photos removed) */}
            <Link
              to="/gallery"
              className="w-full block text-center py-3.5 px-5 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                View Project Gallery
              </div>
              <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                Kitchens, Bathrooms, Flooring & Additions
              </div>
            </Link>

            {/* 5. Official Website */}
            <Link
              to="/"
              className="w-full block text-center py-3.5 px-5 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                Official Website
              </div>
              <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                globeconstructionfl.com
              </div>
            </Link>

            {/* 6. Expandable Remodeling Services */}
            <div className="rounded-xl bg-[#091015] border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => setShowServices(!showServices)}
                className="w-full flex items-center justify-between py-3.5 px-5 hover:bg-[#0E171E] transition-colors cursor-pointer group text-left"
              >
                <div className="w-full text-center pl-4">
                  <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                    Remodeling Services
                  </div>
                  <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                    Our specialized contracting solutions
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${
                    showServices ? 'rotate-180 text-[#CBB890]' : ''
                  }`}
                />
              </button>

              {showServices && (
                <div className="border-t border-white/10 divide-y divide-white/5 bg-[#060A0D]">
                  {servicesList.map((srv, idx) => (
                    <Link
                      key={idx}
                      to={srv.href}
                      className="block text-center py-3 px-4 hover:bg-white/[0.04] transition-colors group"
                    >
                      <div className="text-xs font-medium uppercase tracking-wider text-white group-hover:text-[#CBB890] transition-colors">
                        {srv.name}
                      </div>
                      <div className="text-[10px] text-white/45 mt-0.5 font-normal">
                        {srv.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 7. Service Areas */}
            <Link
              to="/service-areas"
              className="w-full block text-center py-3.5 px-5 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="text-[13px] font-medium uppercase tracking-[0.12em] group-hover:text-[#CBB890] transition-colors">
                Service Areas in Florida
              </div>
              <div className="text-[11px] text-white/45 font-normal tracking-wide mt-0.5">
                Odessa, Tampa, Carrollwood & surrounding
              </div>
            </Link>
          </div>

          {/* Social Icons Bar - Minimalist */}
          <div className="flex items-center justify-center gap-3 pt-7">
            <a
              href="tel:+18133944528"
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/18133944528"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-[#25D366] border border-white/10 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:globegroupfl@gmail.com"
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/globeconstructionfl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Minimal Luxury Footer with Required Athena Credit */}
        <div className="pt-8 pb-4 text-center text-[11px] text-white/40 space-y-1.5 border-t border-white/10 mt-8">
          <p>© 2026 Globe Group Construction LLC</p>
          <p className="text-[10px] text-white/30 tracking-wide uppercase">
            Licensed & Insured Florida General Contractor (CGC)
          </p>
          <div className="pt-1">
            Developed by:{' '}
            <a
              href="https://athenagrowthmarketing.com"
              target="_blank"
              rel="noopener"
              className="text-[#CBB890] hover:underline font-medium"
            >
              Athena Growth Marketing
            </a>
          </div>
        </div>
      </div>

      {/* Clean Poppins Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150 font-poppins">
          <div className="relative w-full max-w-lg bg-[#091015] border border-white/15 rounded-xl shadow-2xl p-6 sm:p-7 text-white overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[10px] font-semibold text-[#CBB890] uppercase tracking-[0.16em]">
                  In-Home Consultation
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-white mt-1">
                  Request An Estimate
                </h3>
                <p className="text-xs text-white/55 mt-0.5">
                  Direct inquiry to Globe Construction (Licensed FL CGC)
                </p>
              </div>
              <button
                onClick={() => setIsEstimateModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#CBB890]/20 border border-[#CBB890] text-[#CBB890] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold uppercase tracking-wider text-white">
                  Estimate Request Received
                </h4>
                <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will review your project details and get in touch with you.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsEstimateModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#CBB890] text-[#060A0D] font-semibold text-xs uppercase tracking-wider hover:bg-[#D5C49F] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEstimateSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#CBB890] text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(813) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#CBB890] text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#CBB890] text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Project Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 33556"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#CBB890] text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#060A0D] border border-white/15 focus:border-[#CBB890] text-sm text-white outline-none transition-colors"
                  >
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    <option value="Full Home Remodeling">Full Home Remodeling</option>
                    <option value="Home Addition">Home Addition & Lanai Enclosure</option>
                    <option value="Commercial Remodeling">Commercial Remodeling</option>
                    <option value="Flooring & Tile">Flooring & Custom Tile</option>
                    <option value="Other Project">Other Remodeling Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Project Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you would like to remodel or build..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 focus:border-[#CBB890] text-sm text-white placeholder-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#CBB890] hover:bg-[#D5C49F] text-[#060A0D] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to Globe Construction...</span>
                      </>
                    ) : (
                      <span>Submit Estimate Request</span>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-white/35 text-center pt-1 tracking-wide">
                  Licensed Florida General Contractor (CGC) · Direct Consultation
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
