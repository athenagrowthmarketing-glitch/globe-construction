import React from 'react';
import { Compass, FileText, Hammer, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Consultation & Spatial Feasibility',
      desc: 'We meet at your home in Odessa or the greater Tampa Bay area to evaluate your space, listen to your lifestyle goals, and discuss structural feasibility and realistic investment parameters.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'Architectural Planning & Fixed Scope',
      desc: 'Our design and engineering team develops detailed layout plans, assists with finish and appliance selections, and produces a transparent, itemized milestone agreement with zero surprise charges.',
    },
    {
      num: '03',
      icon: Hammer,
      title: 'Controlled Build & Daily Cleanliness',
      desc: 'Under dedicated licensed General Contractor supervision, our specialized trade crews execute demolition, framing, MEP, and fine installations with strict dust containment and daily site protection.',
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'White-Glove Walkthrough & Handover',
      desc: 'We walk through every room alongside you to verify fit, finish, and mechanical operation. We do not consider a project complete until every single detail meets our uncompromising standard.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Methodical Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15] mb-4">
            How We Build: <br />
            <span className="text-[#8E7F60] font-editorial italic font-normal">
              A Four-Step Client Journey.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4D5761] leading-relaxed">
            Renovating your home should bring anticipation, not anxiety. Our disciplined four-step process 
            ensures total transparency, predictable scheduling, and flawless architectural delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#E5DFD7] rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#8E7F60]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#8E7F60] font-display">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#000D13] text-[#CBB890] flex items-center justify-center border border-[#CBB890]/30 shadow-sm transition-transform group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2128] font-display mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4D5761] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5DFD7]/60 text-[11px] font-semibold text-[#8E7F60] uppercase tracking-wider">
                  Step {st.num} of 04
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
