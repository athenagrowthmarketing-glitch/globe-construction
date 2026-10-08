import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ShieldCheck,
  Building,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import EstimateSection from '../components/EstimateSection';
import { scrollToEstimate } from '../utils/scroll';

export default function ServiceAreasPage() {
  const regions = [
    {
      name: 'Pasco County',
      tier: 'Primary Strategic Territory',
      hub: 'Odessa (Home Market)',
      cities: ['Odessa', 'Trinity', 'Wesley Chapel', 'New Port Richey', 'Land O’ Lakes', 'Dade City'],
      description: 'Our primary residential focus. We execute high-value kitchen, bathroom, and structural additions across Pasco’s gated communities and custom estate parcels.',
    },
    {
      name: 'Hillsborough County',
      tier: 'Secondary Priority',
      hub: 'Tampa Bay',
      cities: ['Tampa', 'Westchase', 'Carrollwood', 'South Tampa', 'Brandon', 'Riverview', 'Plant City'],
      description: 'Serving established neighborhoods throughout Hillsborough with permitted open-concept renovations, historic updates, and luxury master bath suites.',
    },
    {
      name: 'Pinellas County',
      tier: 'Coastal & Urban',
      hub: 'Clearwater & St. Petersburg',
      cities: ['Clearwater', 'St. Petersburg', 'Palm Harbor', 'Safety Harbor', 'Dunedin', 'Largo', 'Tarpon Springs'],
      description: 'Coastal home transformations with strict adherence to FEMA flood elevation standards and wind-borne debris impact requirements.',
    },
    {
      name: 'Sarasota & Manatee',
      tier: 'Commercial & Coastal Living',
      hub: 'Sarasota & Lakewood Ranch',
      cities: ['Sarasota', 'Lakewood Ranch', 'Bradenton', 'Venice'],
      description: 'Bespoke modern renovations, minimalist commercial buildouts, and architectural second-home updates across Florida’s Suncoast.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A2128]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-[#000D13] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fullhome-exterior-mansion.jpg"
            alt="Service areas for Globe Construction across Florida"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000D13]/95 via-[#000D13]/85 to-[#000D13]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-[#CBB890] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#CBB890]" />
            <span className="text-[#CBB890] font-semibold">Service Areas</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              <span>Odessa, Pasco County & Tampa Bay</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.1] mb-6 font-display">
              Florida Service Areas <br />
              <span className="text-[#CBB890] font-editorial italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                & Regional Permitting.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
              Licensed and insured to construct and remodel across the State of Florida, with primary daily operations concentrated in Odessa, Pasco County, and the greater Tampa Bay metropolitan area.
            </p>

            <button
              onClick={scrollToEstimate}
              className="inline-flex items-center justify-center gap-3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Check Your Project Location</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* County Grids */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Regional Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Where We Build & Remodel
            </h2>
            <p className="text-base text-[#1A2128]/70 mt-3 leading-relaxed">
              We maintain active general contracting accounts with local building departments, guaranteeing rapid permit processing without procedural delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E5DFD7] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#000D13] font-display">
                      {reg.name}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#000D13] text-[#CBB890]">
                      {reg.tier}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#B8A377] uppercase tracking-wider mb-3">
                    Hub: {reg.hub}
                  </p>

                  <p className="text-sm text-[#1A2128]/75 leading-relaxed mb-6">
                    {reg.description}
                  </p>

                  <div className="pt-4 border-t border-[#F0ECE1]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#000D13] block mb-2">
                      Communities Served:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {reg.cities.map((city, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-[#FAF9F6] border border-[#E5DFD7] text-[#1A2128]/80 font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0ECE1] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1A2128]/60 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8A377]" /> Full Code Compliance
                  </span>
                  <button
                    onClick={scrollToEstimate}
                    className="text-xs font-bold text-[#000D13] hover:text-[#B8A377] inline-flex items-center gap-1 transition-colors"
                  >
                    Inquire for {reg.name} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Single Form (Zero Modal Popup) */}
      <EstimateSection defaultService="Kitchen Remodeling" />
    </div>
  );
}
