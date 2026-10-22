import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
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
  ArrowRight,
  Clock,
  UtensilsCrossed,
  Bath,
  Home,
  Hammer,
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
    <div className="min-h-screen bg-[#070D12] text-[#F3F4F6] relative selection:bg-[#CBB890]/30 selection:text-white flex flex-col justify-between">
      {/* Subtle architectural foundation - no neon orbs */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(203,184,144,0.12),transparent_70%)]" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8 sm:py-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Bar with Share / Copy */}
          <div className="flex items-center justify-end mb-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-lg transition-colors active:scale-95"
              title="Share profile"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CBB890]" />
                  <span className="text-[#CBB890] font-medium">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-white/60" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-7">
            {/* Logo in grounded architectural frame */}
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#03080C] border border-[#CBB890]/30 shadow-xl mb-3.5">
              <img
                src="/images/globe-logo-transparent.png"
                alt="Globe Construction"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              Globe Construction
            </h1>

            <p className="text-xs sm:text-sm text-[#CBB890] font-medium tracking-wide mt-1">
              General Contractor · Odessa & Tampa Bay, FL
            </p>

            <p className="text-xs text-white/60 max-w-xs mx-auto mt-2 leading-relaxed">
              Kitchens, luxury bathrooms, full home renovations & architectural additions.
            </p>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-white/50">
              <span className="px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/10 font-mono">
                FL CGC Licensed & Insured
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="space-y-3">
            {/* 1. Primary Estimate CTA - Grounded, Tactile & Professional (No AI sparkles, no robotic badges) */}
            <button
              onClick={() => setIsEstimateModalOpen(true)}
              className="w-full text-left p-4 rounded-xl bg-[#CBB890] hover:bg-[#d8c7a2] text-[#070D12] transition-colors duration-150 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#070D12]/75">
                    Free Consultation
                  </div>
                  <div className="text-base font-bold text-[#070D12] mt-0.5">
                    Request an In-Home Estimate
                  </div>
                  <div className="text-xs text-[#070D12]/80 mt-1">
                    Kitchens, bathrooms, additions & whole-house remodels
                  </div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#070D12]/10 flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#070D12]" />
                </div>
              </div>
            </button>

            {/* 2. WhatsApp Direct Chat */}
            <a
              href="https://wa.me/18133944528?text=Hello%20Globe%20Construction,%20I%20would%20like%20to%20discuss%20a%20remodeling%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0D151C] hover:bg-[#121E28] border border-white/10 hover:border-[#25D366]/40 transition-colors text-white group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-white/50">
                    Direct message with our team
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </a>

            {/* 3. Direct Phone Call */}
            <a
              href="tel:+18133944528"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0D151C] hover:bg-[#121E28] border border-white/10 hover:border-[#CBB890]/40 transition-colors text-white group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                    Call (813) 394-4528
                  </div>
                  <div className="text-xs text-white/50">
                    Mon – Sat · In-office & field consultations
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </a>

            {/* 4. Real Work Gallery */}
            <Link
              to="/gallery"
              className="w-full block p-3.5 rounded-xl bg-[#0D151C] hover:bg-[#121E28] border border-white/10 hover:border-[#CBB890]/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                      View Project Gallery
                    </div>
                    <div className="text-xs text-white/50">
                      Recent kitchens, baths & exterior additions
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#CBB890] transition-colors" />
              </div>

              {/* Real Project Thumbnails */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                <img
                  src="/images/gallery/thumbs/casa-dsc05394-jpg-thumb.webp"
                  alt="Kitchen renovation"
                  className="w-full h-12 rounded object-cover border border-white/10"
                />
                <img
                  src="/images/gallery/thumbs/casa-dsc05409-jpg-thumb.webp"
                  alt="Master bath renovation"
                  className="w-full h-12 rounded object-cover border border-white/10"
                />
                <img
                  src="/images/gallery/thumbs/avulso-photo-2026-05-23-21-28-03-6-jpg-thumb.webp"
                  alt="Custom flooring"
                  className="w-full h-12 rounded object-cover border border-white/10"
                />
                <img
                  src="/images/gallery/thumbs/casa-dsc05448-jpg-thumb.webp"
                  alt="Outdoor living addition"
                  className="w-full h-12 rounded object-cover border border-white/10"
                />
              </div>
            </Link>

            {/* 5. Official Website */}
            <Link
              to="/"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0D151C] hover:bg-[#121E28] border border-white/10 hover:border-[#CBB890]/40 transition-colors text-white group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                    Official Website
                  </div>
                  <div className="text-xs text-white/50">
                    globeconstructionfl.com
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </Link>

            {/* 6. Expandable Remodeling Services */}
            <div className="rounded-xl bg-[#0D151C] border border-white/10 overflow-hidden">
              <button
                onClick={() => setShowServices(!showServices)}
                className="w-full flex items-center justify-between p-3.5 hover:bg-[#121E28] text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      Remodeling Services
                    </div>
                    <div className="text-xs text-white/50">
                      Our contractor specialties
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-white/40 transition-transform duration-150 ${
                    showServices ? 'rotate-180 text-[#CBB890]' : ''
                  }`}
                />
              </button>

              {showServices && (
                <div className="border-t border-white/10 divide-y divide-white/5 bg-[#070D12]">
                  {servicesList.map((srv, idx) => {
                    const IconComp = srv.icon;
                    return (
                      <Link
                        key={idx}
                        to={srv.href}
                        className="flex items-center justify-between p-3 hover:bg-white/[0.04] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComp className="w-4 h-4 text-[#CBB890] shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                              {srv.name}
                            </div>
                            <div className="text-[11px] text-white/50">{srv.desc}</div>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 7. Service Areas */}
            <Link
              to="/service-areas"
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0D151C] hover:bg-[#121E28] border border-white/10 hover:border-[#CBB890]/40 transition-colors text-white group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#CBB890] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                    Service Areas in Florida
                  </div>
                  <div className="text-xs text-white/50">
                    Odessa, Tampa, Carrollwood, Westchase & surrounding
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <a
              href="tel:+18133944528"
              className="p-2.5 rounded-lg bg-[#0D151C] hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
              title="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/18133944528"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0D151C] hover:bg-white/10 text-white/70 hover:text-[#25D366] border border-white/10 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:globegroupfl@gmail.com"
              className="p-2.5 rounded-lg bg-[#0D151C] hover:bg-white/10 text-white/70 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/globeconstructionfl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0D151C] hover:bg-white/10 text-white/70 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <Link
              to="/service-areas"
              className="p-2.5 rounded-lg bg-[#0D151C] hover:bg-white/10 text-white/70 hover:text-[#CBB890] border border-white/10 transition-colors"
              title="Location map"
            >
              <MapPin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Dedicated Human-Centered Footer with Required Athena Credit */}
        <div className="pt-8 pb-4 text-center text-xs text-white/45 space-y-1.5 border-t border-white/10 mt-8">
          <p>© 2026 Globe Group Construction LLC</p>
          <p className="text-[11px] text-white/35">
            Licensed & Insured Florida General Contractor (CGC) · Tampa Bay & Odessa, FL
          </p>
          <div className="pt-1 text-[11px]">
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

      {/* Clean, Architectural Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-[#0A1218] border border-white/15 rounded-xl shadow-2xl p-6 sm:p-7 text-white overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header - Professional, no sparkles */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[11px] font-bold text-[#CBB890] uppercase tracking-wider">
                  In-Home Consultation
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  Request a Project Estimate
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Tell us about your project and we will reach out promptly.
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
                <div className="w-14 h-14 rounded-full bg-[#CBB890]/20 border border-[#CBB890] text-[#CBB890] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  Estimate Request Received
                </h4>
                <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will review your project details and get in touch with you.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setIsEstimateModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#CBB890] text-[#070D12] font-bold text-xs uppercase tracking-wider hover:bg-[#d8c7a2] transition-colors"
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
                      placeholder="Your full name"
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
                    className="w-full px-3 py-2 rounded-lg bg-[#070D12] border border-white/15 focus:border-[#CBB890] text-sm text-white outline-none transition-colors"
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
                    className="w-full py-3 rounded-lg bg-[#CBB890] hover:bg-[#d8c7a2] text-[#070D12] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
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

                <p className="text-[11px] text-white/40 text-center pt-1">
                  Direct inquiry to Globe Construction · Licensed FL CGC
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
