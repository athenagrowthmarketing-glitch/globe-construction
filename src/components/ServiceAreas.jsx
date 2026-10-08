import React from 'react';
import { MapPin, ShieldCheck, Check } from 'lucide-react';

export default function ServiceAreas() {
  const regions = [
    {
      county: 'Pasco County (Primary Market)',
      cities: ['Odessa', 'Trinity', 'New Port Richey', 'Wesley Chapel', 'Land O’ Lakes'],
      isPrimary: true,
    },
    {
      county: 'Hillsborough County',
      cities: ['Tampa', 'Westchase', 'Carrollwood', 'Brandon', 'Riverview'],
      isPrimary: false,
    },
    {
      county: 'Pinellas County',
      cities: ['Palm Harbor', 'Clearwater', 'St. Petersburg', 'Dunedin', 'Largo'],
      isPrimary: false,
    },
    {
      county: 'Sarasota & Manatee',
      cities: ['Sarasota', 'Bradenton', 'Lakewood Ranch', 'Venice'],
      isPrimary: false,
    },
  ];

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Service Territory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15] mb-4">
            Based in Odessa. <br />
            <span className="text-[#8E7F60] font-editorial italic font-normal">
              Serving Tampa Bay & Surrounding Communities.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4D5761] leading-relaxed">
            We operate throughout Pasco, Hillsborough, Pinellas, and Sarasota counties, managing complete 
            permitting, inspections, and code compliance across each local building jurisdiction.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                reg.isPrimary
                  ? 'bg-[#000D13] text-white border-2 border-[#CBB890] shadow-xl'
                  : 'bg-[#FAF9F6] border border-[#E5DFD7] text-[#1A2128]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-base font-bold font-display ${
                      reg.isPrimary ? 'text-[#CBB890]' : 'text-[#1A2128]'
                    }`}
                  >
                    {reg.county}
                  </h3>
                  {reg.isPrimary && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#CBB890] text-[#000D13]">
                      Home Base
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5">
                  {reg.cities.map((city, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 ${
                          reg.isPrimary ? 'text-[#CBB890]' : 'text-[#8E7F60]'
                        }`}
                      />
                      <span className={reg.isPrimary ? 'text-white/90' : 'text-[#4D5761]'}>
                        {city}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-6 pt-4 border-t text-[11px] ${
                  reg.isPrimary ? 'border-white/10 text-[#CBB890]' : 'border-[#E5DFD7] text-[#7E8B98]'
                }`}
              >
                Permitted & Inspected Locally
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
