import React from 'react';
import { ShieldCheck, Award, Users, HardHat, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenEstimate }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Structural General Contractor',
      desc: 'We are not cosmetic-only subcontractors. We handle Florida building codes, structural engineering, and heavy mechanical rough-ins with total mastery.',
    },
    {
      icon: Award,
      title: '7+ Years Florida Craft Heritage',
      desc: 'Decades of combined trade execution across hurricane-prone building envelopes, specialized waterproofing, and luxury interior joinery.',
    },
    {
      icon: Users,
      title: 'Owner-Led Supervision',
      desc: 'Every project receives direct executive site oversight, maintaining strict quality control and continuous, transparent client communication.',
    },
    {
      icon: HardHat,
      title: 'Clean & Protected Sites',
      desc: 'We treat your home with utmost care. Dust barriers, HEPA filtration, floor protection, and daily cleanups are standard protocol.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5DFD7] aspect-[4/5] image-zoom-container">
              <img
                src="/images/fullhome-greatroom.jpg"
                alt="Globe Construction architectural living room craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Credential Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#000D13] text-[#FAF9F6] border border-[#CBB890]/30 rounded-2xl p-5 shadow-2xl hidden sm:block max-w-[240px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#CBB890] block mb-1">
                Field Heritage
              </span>
              <p className="text-xl font-extrabold font-display text-white">7+ Years</p>
              <p className="text-xs text-white/70 mt-1 leading-snug">
                Florida Construction & Remodeling Craftsmanship
              </p>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider">
              <span>About Globe Construction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15]">
              Built with Passion. <br />
              <span className="text-[#8E7F60] font-editorial italic font-normal">
                Engineered for Permanence.
              </span>
            </h2>

            <p className="text-base text-[#4D5761] leading-relaxed">
              Globe Construction was founded on an uncompromising principle: that residential remodeling 
              requires both the visionary eye of an interior designer and the disciplined technical rigor of a 
              licensed general contractor.
            </p>

            <p className="text-base text-[#4D5761] leading-relaxed">
              Backing our projects with over seven years of Florida field experience—from intricate structural 
              restorations to multi-million-dollar custom estate renovations—we understand how Florida’s 
              climate, moisture, and building codes dictate material selection and craftsmanship.
            </p>

            {/* Four Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div key={idx} className="bg-white border border-[#E5DFD7] rounded-xl p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#000D13] text-[#CBB890] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#1A2128] font-display uppercase tracking-wide">
                      {pil.title}
                    </h4>
                    <p className="text-[11px] text-[#4D5761] leading-relaxed mt-1">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 bg-[#000D13] hover:bg-[#051821] text-[#CBB890] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-[#CBB890]/30 transition-all shadow-md"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+18133944528"
                className="text-xs font-bold text-[#1A2128] hover:text-[#8E7F60] transition-colors"
              >
                Call (813) 394-4528
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
