import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Camera,
  Globe,
  Share2,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  X,
  Loader2,
  Mail,
  MapPin,
  ClipboardList,
  Hammer,
  UtensilsCrossed,
  Bath,
  Home,
  QrCode,
  Download,
} from 'lucide-react';

const RECAPTCHA_SITE_KEY = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';
const LEADCONNECTOR_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/wr9YVe8FDcTksUup9qpu/webhook-trigger/b275afc3-b423-4388-b0d2-4dff3850cbcc';

export default function LinksPage() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
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
      icon: UtensilsCrossed,
      href: '/kitchen-remodeling',
      desc: 'Custom cabinetry, quartz islands & chef kitchens',
    },
    {
      name: 'Bathroom Remodeling',
      icon: Bath,
      href: '/bathroom-remodeling',
      desc: 'Luxury wet rooms, vanities & walk-in showers',
    },
    {
      name: 'Full Home Remodeling',
      icon: Home,
      href: '/full-home-remodeling',
      desc: 'Complete architectural interior transformations',
    },
    {
      name: 'Home Additions & Lanais',
      icon: Hammer,
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
    <div className="min-h-screen bg-[#060A0D] text-[#EAECEF] font-montserrat relative selection:bg-[#CBB890]/30 selection:text-white flex flex-col justify-between">
      {/* Subtle architectural ambient glow */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(203,184,144,0.2),transparent_70%)]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[460px] mx-auto px-4 sm:px-5 py-8 sm:py-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Utilities: QR Code + Share */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full transition-colors active:scale-95 cursor-pointer font-medium"
              title="Show QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-[#CBB890]" />
              <span>QR Code</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full transition-colors active:scale-95 cursor-pointer font-medium"
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

          {/* Profile Header - Matching the Logo Lockup Typography */}
          <div className="text-center mb-7">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#091015] border border-[#CBB890]/25 shadow-xl mb-3.5">
              <img
                src="/images/globe-logo-transparent.png"
                alt="Globe Construction"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Title matching "GLOBE" from logo */}
            <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-white">
              Globe
            </h1>

            {/* Subtitle matching "CONSTRUCTION" from logo */}
            <p className="text-xs uppercase tracking-[0.28em] text-[#CBB890] font-semibold mt-0.5">
              Construction
            </p>

            <p className="text-[11px] tracking-[0.12em] uppercase text-white/50 mt-2 font-medium">
              Licensed Florida General Contractor · Tampa Bay & Odessa, FL
            </p>
          </div>

          {/* Action Links - Premium, Clean, with Dedicated Icon for Each */}
          <div className="space-y-2.5">
            {/* 1. Request Estimate - Primary Gold Card with Clipboard/Estimate Icon */}
            <button
              onClick={() => setIsEstimateModalOpen(true)}
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#CBB890] hover:bg-[#D5C49F] text-[#060A0D] transition-all duration-150 cursor-pointer shadow-md group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#060A0D]/10 flex items-center justify-center shrink-0 text-[#060A0D]">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#060A0D]">
                    Request An Estimate
                  </div>
                  <div className="text-[11px] text-[#060A0D]/75 font-medium tracking-wide">
                    Free In-Home Consultation
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#060A0D]/60 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* 2. WhatsApp Direct with Official WhatsApp Icon */}
            <a
              href="https://wa.me/18133944528?text=Hello%20Globe%20Construction,%20I%20would%20like%20to%20discuss%20a%20remodeling%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#25D366]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    +1 (813) 394-4528
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </a>

            {/* 3. Direct Phone Call with Phone Icon */}
            <a
              href="tel:+18133944528"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                    Call (813) 394-4528
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    Direct line · Mon – Sat
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </a>

            {/* 4. Instagram Profile with Instagram Icon */}
            <a
              href="https://www.instagram.com/globeconstructionfl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#E1306C]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/25 text-[#E1306C] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#E1306C] transition-colors">
                    Instagram
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    @globeconstructionfl
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </a>

            {/* 5. Project Gallery with Camera Icon */}
            <Link
              to="/gallery"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                    View Project Gallery
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    Kitchens, Bathrooms & Additions
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </Link>

            {/* 6. Official Website with Globe Icon */}
            <Link
              to="/"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                    Official Website
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    globeconstructionfl.com
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </Link>

            {/* 7. Expandable Remodeling Services with Hammer/Tools Icon */}
            <div className="rounded-xl bg-[#091015] border border-white/10 overflow-hidden transition-all">
              <button
                onClick={() => setShowServices(!showServices)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 hover:bg-[#0E171E] transition-colors cursor-pointer group text-left"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                      Remodeling Services
                    </div>
                    <div className="text-[11px] text-white/45 font-medium tracking-wide">
                      Our contractor specialties
                    </div>
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
                  {servicesList.map((srv, idx) => {
                    const IconComp = srv.icon;
                    return (
                      <Link
                        key={idx}
                        to={srv.href}
                        className="flex items-center justify-between p-3.5 px-4 hover:bg-white/[0.04] transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-4 h-4 text-[#CBB890] shrink-0" />
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#CBB890] transition-colors">
                              {srv.name}
                            </div>
                            <div className="text-[10px] text-white/45 font-medium">
                              {srv.desc}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 8. Service Areas with MapPin Icon */}
            <Link
              to="/service-areas"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                    Service Areas in Florida
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    Odessa, Tampa Bay, Carrollwood & more
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </Link>

            {/* 9. Digital Business Card / QR Code Card */}
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#091015] hover:bg-[#0E171E] border border-white/10 hover:border-[#CBB890]/40 transition-all duration-150 text-white group active:scale-[0.99] cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <QrCode className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#CBB890] transition-colors">
                    Digital Business Card (QR)
                  </div>
                  <div className="text-[11px] text-white/45 font-medium tracking-wide">
                    Tap to view or save QR code
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Social Icons Bar - Minimalist Footer Strip */}
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
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
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
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-[#E1306C] border border-white/10 transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <Link
              to="/service-areas"
              className="p-2.5 rounded-lg bg-[#091015] hover:bg-white/10 text-white/60 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Service Areas"
            >
              <MapPin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Minimal Luxury Footer with Required Athena Credit */}
        <div className="pt-8 pb-4 text-center text-[11px] text-white/40 space-y-1.5 border-t border-white/10 mt-8">
          <p>© 2026 Globe Group Construction LLC</p>
          <p className="text-[10px] text-white/30 tracking-[0.1em] uppercase">
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

      {/* Clean Montserrat Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150 font-montserrat">
          <div className="relative w-full max-w-lg bg-[#091015] border border-white/15 rounded-xl shadow-2xl p-6 sm:p-7 text-white overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[10px] font-semibold text-[#CBB890] uppercase tracking-[0.16em]">
                  In-Home Consultation
                </span>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mt-1">
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
                <h4 className="text-base font-bold uppercase tracking-wider text-white">
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
                    className="px-6 py-2.5 rounded-lg bg-[#CBB890] text-[#060A0D] font-bold text-xs uppercase tracking-wider hover:bg-[#D5C49F] transition-colors cursor-pointer"
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
                    <label className="block text-xs font-semibold text-white/80 mb-1">
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
                    <label className="block text-xs font-semibold text-white/80 mb-1">
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
                    <label className="block text-xs font-semibold text-white/80 mb-1">
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
                    <label className="block text-xs font-semibold text-white/80 mb-1">
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
                  <label className="block text-xs font-semibold text-white/80 mb-1">
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
                  <label className="block text-xs font-semibold text-white/80 mb-1">
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
                    className="w-full py-3 rounded-lg bg-[#CBB890] hover:bg-[#D5C49F] text-[#060A0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
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

      {/* QR Code Modal for In-Person Sharing & Direct Download */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150 font-montserrat">
          <div className="relative w-full max-w-sm bg-[#091015] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-7 text-white text-center">
            {/* Close Button */}
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4 pt-1">
              <div className="inline-flex items-center justify-center p-2 rounded-xl bg-[#060A0D] border border-[#CBB890]/30 shadow-md mb-2.5">
                <img
                  src="/images/globe-logo-transparent.png"
                  alt="Globe Construction"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h3 className="text-base font-bold uppercase tracking-[0.12em] text-white">
                Globe Construction
              </h3>
              <p className="text-[10px] text-[#CBB890] uppercase tracking-[0.2em] font-semibold mt-0.5">
                Digital Business Card
              </p>
            </div>

            {/* High-Contrast Crisp QR Code Frame */}
            <div className="p-3.5 bg-white rounded-2xl shadow-2xl inline-block my-2 border border-[#CBB890]/40">
              <img
                src="/images/globe-qr-code.png"
                alt="Globe Construction QR Code"
                className="w-48 h-48 sm:w-52 sm:h-52 object-contain block mx-auto"
              />
            </div>

            <p className="text-xs text-white/60 mt-3 max-w-[260px] mx-auto leading-relaxed">
              Point any smartphone camera to scan and open this profile instantly.
            </p>

            {/* Action Buttons: Save Image & Copy Link */}
            <div className="grid grid-cols-2 gap-2 mt-5">
              <a
                href="/images/globe-qr-code.png"
                download="globe-construction-qr.png"
                className="py-2.5 px-3 rounded-lg bg-[#CBB890] hover:bg-[#D5C49F] text-[#060A0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save QR</span>
              </a>

              <button
                onClick={() => {
                  copyToClipboard(window.location.href);
                }}
                className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CBB890]" />
                    <span className="text-[#CBB890]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
