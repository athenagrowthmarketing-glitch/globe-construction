import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function BrandPositioning({ onOpenEstimate }) {
  const differentiators = [
    {
      title: 'Architectural Vision Meets Structural Execution',
      desc: 'We combine the design sensitivity of a high-end interior studio with the structural muscle of a licensed Florida general contractor.',
    },
    {
      title: 'Turnkey Permitting & Engineering',
      desc: 'Load-bearing wall removals, foundation work, plumbing relocations, and electrical updates managed seamlessly through local building departments.',
    },
    {
      title: 'Predictable Timelines & Clear Scopes',
      desc: 'Fixed-price milestone contracts with itemized specifications. No bait-and-switch change orders, no unreturned calls.',
    },
    {
      title: 'Clean Jobsite Protocol',
      desc: 'Air scrubbers, floor protection, and daily site cleanup to protect your residence and family throughout the build.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Thesis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider">
              <span>The Globe Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15]">
              Built around the way <br />
              <span className="text-[#8E7F60] font-editorial italic font-normal tracking-normal">
                you truly live.
              </span>
            </h2>

            <p className="text-base text-[#4D5761] leading-relaxed">
              True residential remodeling is never just about swapping out finishes or repainting surfaces. 
              It is about re-engineering the spatial flow, natural light, and everyday functionality of your 
              home—harmonizing custom architectural millwork with uncompromising structural integrity.
            </p>

            <p className="text-base text-[#4D5761] leading-relaxed">
              Whether you are opening up your kitchen into a sprawling culinary centerpiece, creating a 
              spa-grade master retreat, or adding square footage with a structural addition, Globe Construction 
              delivers disciplined execution from pre-construction permits to the final white-glove walkthrough.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2.5 bg-[#000D13] hover:bg-[#051821] text-[#CBB890] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg border border-[#CBB890]/30 transition-all shadow-md hover:shadow-lg"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Differentiators Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border border-[#E5DFD7] rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E7F60] block mb-4">
                Why Florida Homeowners Choose Globe
              </span>

              <div className="space-y-6">
                {differentiators.map((diff, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#CBB890]/20 text-[#8E7F60] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1A2128] font-display">
                        {diff.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4D5761] leading-relaxed mt-1">
                        {diff.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Contractor Anchor */}
              <div className="mt-8 pt-6 border-t border-[#E5DFD7] flex items-center justify-between text-xs text-[#7E8B98]">
                <span>State of Florida Registered Entity</span>
                <span className="font-semibold text-[#1A2128]">Globe Group Construction LLC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
