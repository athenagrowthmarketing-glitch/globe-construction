import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenEstimate }) {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#000D13] overflow-hidden">
      {/* Background Project Photography with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-kitchen.jpg"
          alt="Luxury custom kitchen remodel by Globe Construction in Florida"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        {/* Multilayer gradient veil for WCAG AAA legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000D13]/95 via-[#000D13]/85 to-[#000D13]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000D13] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kitchen • Bathroom • Full Home Remodeling</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.08] mb-6 font-display">
            Reimagine the home <br className="hidden sm:inline" />
            <span className="text-[#CBB890] font-editorial italic font-normal tracking-normal text-4xl sm:text-6xl lg:text-7xl">
              around you.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
            Bespoke residential remodeling and licensed architectural general contracting for
            discerning homeowners across Odessa, Pasco County, and the greater Tampa Bay region.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Project Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all hover:border-[#CBB890]/50"
            >
              <span>Explore Our Portfolio</span>
            </a>
          </div>

          {/* Trust Metric Micro-Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/75">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CBB890]" />
              <span className="font-medium text-white/90">Licensed General Contractor</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex text-[#CBB890]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#CBB890]" />
                ))}
              </div>
              <span className="font-semibold text-white/95">5.0 Star Rating</span>
              <span className="text-white/50">(29+ Verified Reviews)</span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBB890]" />
              <span className="font-medium text-white/90">Turnkey Permitting & Code Compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Project Tag */}
      <div className="hidden xl:flex absolute bottom-8 right-8 z-10 bg-[#051821]/80 backdrop-blur-md border border-[#CBB890]/25 rounded-xl p-3.5 items-center gap-3 max-w-sm">
        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
          <img src="/images/kitchen-island.jpg" alt="Featured kitchen project thumbnail" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#CBB890]">Featured Project</span>
          <p className="text-xs font-semibold text-white">The Contemporary Estate • Odessa, FL</p>
          <p className="text-[11px] text-white/60">Waterfall Quartz & Custom Millwork</p>
        </div>
      </div>
    </section>
  );
}
