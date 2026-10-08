import React from 'react';
import { ShieldCheck, HardHat, Star, ClipboardCheck } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Licensed General Contractor',
      desc: 'Full permitting, structural engineering & FL code compliance',
    },
    {
      icon: HardHat,
      title: 'Comprehensive Insurance',
      desc: 'Commercial General Liability & Workers’ Comp protected',
    },
    {
      icon: Star,
      title: '5.0 Star Client Rating',
      desc: '29+ verified reviews with proven customer satisfaction',
    },
    {
      icon: ClipboardCheck,
      title: 'Single-Source Accountability',
      desc: 'Dedicated superintendents & daily clean jobsite protocol',
    },
  ];

  return (
    <section className="bg-[#FAF9F6] border-b border-[#E5DFD7] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-[#000D13] text-[#CBB890] flex items-center justify-center shrink-0 border border-[#CBB890]/30 shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2128] font-display">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[#4D5761] leading-relaxed mt-0.5">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
