import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Home,
  Maximize2,
} from 'lucide-react';
import EstimateSection from '../components/EstimateSection';
import { scrollToEstimate } from '../utils/scroll';

export default function FullHomeRemodelingPage() {
  const capabilities = [
    {
      title: 'Double-Height Living & Floating Stairs',
      desc: 'Opening up compartmentalized Florida tract homes into breathtaking double-height architectural living spaces with custom iron rails and slat feature walls.',
      img: '/images/fullhome-greatroom.jpg',
    },
    {
      title: 'Architectural Fireplace & Media Walls',
      desc: 'Integrated linear electric fireplaces, vertical slat wood cladding, recessed 85-inch screens, and concealed low-voltage cable management.',
      img: '/images/fullhome-living-modern.jpg',
    },
    {
      title: 'Boutique Walk-In Closets & Dressing Suites',
      desc: 'Floor-to-ceiling custom closet systems with jewelry display islands, built-in LED shoe vitrines, and velvet-lined organizational drawers.',
      img: '/images/fullhome-walkin-closet.jpg',
    },
    {
      title: 'Entertainer Bars & Wine Displays',
      desc: 'Built-in cocktail bars with quartz service counters, floating back-lit shelving, integrated dual-zone wine coolers, and beverage centers.',
      img: '/images/fullhome-bar-cocktail.jpg',
    },
    {
      title: 'Spanish Colonial & Mediterranean Upgrades',
      desc: 'Preserving authentic Florida architectural character while updating arches, millwork, interior doors, and continuous modern flooring throughout.',
      img: '/images/fullhome-spanish-hall.jpg',
    },
    {
      title: 'Exterior Modernization & Facade Renovation',
      desc: 'Modern smooth stucco finishes, architectural exterior lighting, impact entry doors, and seamless lanai integrations.',
      img: '/images/fullhome-exterior-mansion.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Can we stay in the home during a full home remodel?',
      a: 'For whole-home transformations involving electrical panel upgrades, multi-room floor replacement, and structural changes, we usually recommend phasing the project or temporarily renting nearby. We establish strict phase milestones to minimize displacement.',
    },
    {
      q: 'How does Globe ensure design cohesion across every room?',
      a: 'We establish a unified architectural palette before construction begins—coordinating door styles, trim profiles, hardware finishes, paint tones, and flooring continuity so the home feels intentionally unified rather than piecemeal.',
    },
    {
      q: 'Do you manage structural engineering and Pasco/Hillsborough permitting?',
      a: 'Yes, 100%. We collaborate with licensed structural engineers to stamp plans for beam sizes, roof load recalculations, and submit complete turnkey permit packages.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A2128]">
      {/* Hero Header */}
      <section className="relative min-h-[65vh] flex items-center bg-[#000D13] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-living.jpg"
            alt="Full home remodeling in Odessa, FL by Globe Construction"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000D13]/95 via-[#000D13]/85 to-[#000D13]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000D13] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-[#CBB890] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#CBB890]" />
            <span className="text-white/40">Services</span>
            <ChevronRight className="w-3 h-3 text-[#CBB890]" />
            <span className="text-[#CBB890] font-semibold">Full Home Remodeling</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turnkey Whole-House Transformation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.1] mb-6 font-display">
              Full Home Remodeling <br />
              <span className="text-[#CBB890] font-editorial italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                in Odessa & Tampa Bay.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
              Complete architectural transformations engineered to elevate lifestyle, luxury, and property value. We reimagine dated layouts into cohesive, light-filled estates.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToEstimate}
                className="inline-flex items-center justify-center gap-3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Request Whole-Home Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-4 rounded-xl border border-white/20 transition-all hover:border-[#CBB890]/50"
              >
                <span>Explore Spaces</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#051821] border-b border-[#CBB890]/20 py-6 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Home className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Comprehensive Single-Source Responsibility</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Maximize2 className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Structural Wall Removal & Engineering</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Florida State Licensed General Contractor</span>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Comprehensive Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Every room harmonized under one unified vision.
            </h2>
            <p className="text-base text-[#1A2128]/70 mt-4 leading-relaxed">
              We eliminate disjointed renovations by executing full floorplans with consistent craftsmanship, level subfloors, and flawless trim carpentry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5DFD7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#000D13]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000D13]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#000D13] mb-2.5 group-hover:text-[#B8A377] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1A2128]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#F0ECE1] flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B8A377]">
                      Real Client Residence
                    </span>
                    <button
                      onClick={scrollToEstimate}
                      className="text-xs font-bold text-[#000D13] hover:text-[#B8A377] inline-flex items-center gap-1 transition-colors"
                    >
                      Inquire <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Full Home Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Full Home Remodeling FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl border border-[#E5DFD7] bg-[#FAF9F6]"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#000D13] mb-2 flex items-start gap-3">
                  <span className="text-[#B8A377] font-display font-extrabold text-lg">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#1A2128]/75 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Single Form (Zero Modal Popup) */}
      <EstimateSection defaultService="Full Home Remodeling" />
    </div>
  );
}
