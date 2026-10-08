import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';

const RECAPTCHA_SITE_KEY = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';

export default function EstimateModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Full Home Remodeling',
    'Home Addition',
    'Commercial Remodeling',
    'Other Project',
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

      if (typeof window !== 'undefined' && window.grecaptcha) {
        token = await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            try {
              const res = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
                action: 'modal_estimate',
              });
              resolve(res);
            } catch (err) {
              console.warn('reCAPTCHA error:', err);
              resolve('');
            }
          });
        });
      }

      await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token }),
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#051821] border border-[#CBB890]/30 rounded-2xl w-full max-w-lg p-6 sm:p-8 text-white relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#CBB890]/20 text-[#CBB890] flex items-center justify-center mx-auto border border-[#CBB890]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Request Received
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs mx-auto">
              Our project team will review your project parameters and contact you at {formData.phone} shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#CBB890] text-[#000D13] font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#CBB890] block mb-1">
                Consultation Request
              </span>
              <h3 className="text-xl font-extrabold font-display text-white">
                Start Your Renovation
              </h3>
              <p className="text-xs text-white/60">
                Serving Odessa, Pasco County, and the greater Tampa Bay area.
              </p>
            </div>

            {errorMessage && (
              <div className="p-2.5 bg-red-950/50 border border-red-500/30 text-red-200 text-xs rounded-lg">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                Service Needed *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#CBB890]"
              >
                {services.map((srv, idx) => (
                  <option key={idx} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#CBB890]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(813) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#CBB890]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#CBB890]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                  Project ZIP Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="33556"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full bg-[#000D13] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#CBB890]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                Project Notes
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your vision..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-[#000D13] border border-white/15 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#CBB890]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send Estimate Request</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
