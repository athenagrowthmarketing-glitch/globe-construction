import React from 'react';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export default function AdditionsShowcase({ onOpenEstimate }) {
  const points = [
    'Reinforced concrete block (CBS) construction engineered for Florida wind-load codes',
    'Truss design, roof tie-in engineering, and seamless exterior stucco matching',
    'Covered lanai expansions, pool cage integration, and outdoor living pavilions',
    'Custom outdoor summer kitchens featuring built-in pizza ovens and granite bars',
    'Master suite wings, private in-law suites, and dedicated multi-vehicle garage extensions',
    'Full municipal permitting and zoning variance management handled turnkey',
  ];

  return (
    <section id="additions" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Structural Expansion • Tier 2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15]">
              Home Additions & <br />
              <span className="text-[#8E7F60] font-editorial italic font-normal">
                Covered Lanai Living.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4D5761] max-w-md leading-relaxed">
            Expand your Florida home’s living footprint without relocating. From structural room extensions 
            to integrated pool pavilions, we build durable additions that match your existing architecture.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Image 1 (Covered Lanai / Pool Addition) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD7] image-zoom-container group aspect-[16/10]">
              <img
                src="/images/addition-pool-lanai.jpg"
                alt="Structural home addition integrated with covered lanai and Florida pool enclosure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000D13]/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#CBB890] block mb-1">
                    Structural Addition
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Covered Patio Extension & Pool Lanai
                  </h3>
                  <p className="text-xs text-white/70">Seamless indoor-to-outdoor flow</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-[#000D13]/80 backdrop-blur-sm text-[#CBB890] border border-[#CBB890]/30 text-xs rounded-lg font-semibold">
                  Odessa Project
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Outdoor Kitchen Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E5DFD7] rounded-2xl p-6 sm:p-7 shadow-sm">
              <h4 className="text-base font-bold text-[#1A2128] font-display mb-4">
                Structural Additions Scope
              </h4>

              <div className="space-y-3.5">
                {points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8E7F60] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4D5761] leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/addition-framing.jpg"
                  alt="Concrete block CBS addition framing in progress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E5DFD7] aspect-[4/3] image-zoom-container">
                <img
                  src="/images/outdoor-summer-kitchen.jpg"
                  alt="Custom outdoor summer kitchen with pizza oven"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
