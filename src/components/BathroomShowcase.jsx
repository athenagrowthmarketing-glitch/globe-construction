import React from 'react';
import { ArrowRight, CheckCircle2, Droplets } from 'lucide-react';

export default function BathroomShowcase({ onOpenEstimate }) {
  const features = [
    'Zero-threshold curbless walk-in showers with concealed linear drains',
    'Custom wet rooms pairing dual gold rain shower systems with soaking tubs',
    'Floor-to-ceiling large-format porcelain slabs & bookmatched marble tile',
    'Custom double floating oak vanities with undermount quartz basins',
    'Wall-mounted brushed champagne gold & matte black thermostatic fixtures',
    'Schluter-certified multi-layer waterproofing protecting against Florida humidity',
  ];

  return (
    <section id="bathrooms" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
              <Droplets className="w-3.5 h-3.5" />
              <span>Primary Service • Tier 1</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15]">
              Master Bathrooms & <br />
              <span className="text-[#8E7F60] font-editorial italic font-normal">
                Spa-Grade Wet Rooms.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4D5761] max-w-md leading-relaxed">
            Elevate your morning routine into a luxury sanctuary. We specialize in curbless walk-in wet rooms,
            freestanding architectural soaking tubs, and flawless moisture-sealed tile precision.
          </p>
        </div>

        {/* Feature Grid: Hero Image + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Specifications & Secondary Previews */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E5DFD7] rounded-2xl p-6 sm:p-7 shadow-sm">
              <h4 className="text-base font-bold text-[#1A2128] font-display mb-4">
                Master Bath Engineering
              </h4>

              <div className="space-y-3.5">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8E7F60] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4D5761] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/bath-linear-drain.jpg"
                  alt="Curbless walk-in shower with linear floor drain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/bath-double-vanity.jpg"
                  alt="Custom wood double vanity with arched mirrors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Main Showcase Image (Wet Room) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD7] image-zoom-container group aspect-[16/10]">
              <img
                src="/images/hero-bath.jpg"
                alt="Spa retreat wet room with dual gold rain showers and soaking tub by Globe Construction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000D13]/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#CBB890] block mb-1">
                    Signature Wet Room
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Freestanding Tub & Dual Brushed-Gold Rain Showers
                  </h3>
                  <p className="text-xs text-white/70">Pebble floor & floor-to-ceiling porcelain</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-[#000D13]/80 backdrop-blur-sm text-[#CBB890] border border-[#CBB890]/30 text-xs rounded-lg font-semibold">
                  Custom Build
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer / CTA Bar */}
        <div className="bg-[#000D13] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#CBB890]/25">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Ready to Upgrade Your Bathroom into a Wellness Retreat?
            </h4>
            <p className="text-xs sm:text-sm text-white/70">
              Get an accurate estimate for curbless showers, custom tile, and vanity remodels.
            </p>
          </div>

          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0"
          >
            <span>Request Bathroom Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
