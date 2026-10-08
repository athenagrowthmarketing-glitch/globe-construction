import React from 'react';
import { ArrowRight, CheckCircle2, Home } from 'lucide-react';

export default function FullHomeShowcase({ onOpenEstimate }) {
  const highlights = [
    'Complete interior reconfiguration removing compartmentalized 1990s/2000s walls',
    'Double-height great rooms with custom vertical fluted wood slat fireplace focal walls',
    'Continuous European oak flooring, Level 5 drywall, and modern linear fireplaces',
    'Custom boutique dressing suites with center islands and custom closet millwork',
    'Complete plumbing, electrical, and HVAC re-engineering managed under one roof',
    'Phased construction management designed to respect client schedules and property',
  ];

  return (
    <section id="full-home" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
              <Home className="w-3.5 h-3.5" />
              <span>Whole-Home Cohesion • Tier 1</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15]">
              Full Home Remodeling & <br />
              <span className="text-[#8E7F60] font-editorial italic font-normal">
                Space Reconfiguration.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4D5761] max-w-md leading-relaxed">
            Eliminate patchwork finishes and awkward room transitions. We bring seamless architectural 
            continuity, open living flow, and elevated luxury across every square foot of your residence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Main Showcase Image (Living Room with Double Height) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD7] image-zoom-container group aspect-[16/10]">
              <img
                src="/images/hero-living.jpg"
                alt="Double-height great room remodel with custom fluted wood slat fireplace by Globe Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000D13]/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#CBB890] block mb-1">
                    Whole-Home Stature
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Double-Height Great Room & Floating Staircase
                  </h3>
                  <p className="text-xs text-white/70">Floor-to-ceiling fluted millwork & modern fireplace</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-[#000D13]/80 backdrop-blur-sm text-[#CBB890] border border-[#CBB890]/30 text-xs rounded-lg font-semibold">
                  Full Home Scope
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Millwork Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF9F6] border border-[#E5DFD7] rounded-2xl p-6 sm:p-7">
              <h4 className="text-base font-bold text-[#1A2128] font-display mb-4">
                Whole-House Scope Management
              </h4>

              <div className="space-y-3.5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8E7F60] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4D5761] leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/fullhome-walkin-closet.jpg"
                  alt="Custom boutique walk-in closet dressing suite"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/fullhome-living-modern.jpg"
                  alt="Modern open-concept living room flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer / CTA Bar */}
        <div className="bg-[#000D13] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#CBB890]/25">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Considering a Full Home Transformation in Tampa Bay?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              Speak directly with our project directors about architectural feasibility, phasing, and budgets.
            </p>
          </div>

          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0"
          >
            <span>Request Whole-Home Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
