import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Building2,
  Briefcase,
} from 'lucide-react';
import EstimateSection from '../components/EstimateSection';
import { scrollToEstimate } from '../utils/scroll';

export default function CommercialRemodelingPage() {
  const capabilities = [
    {
      title: 'Minimalist Galleries & Creative Lounges',
      desc: 'Seamless microcement flooring, museum-grade directional lighting, floating banquettes, and acoustical partition engineering.',
      img: '/images/commercial-gallery-lounge.jpg',
    },
    {
      title: 'Executive Boardrooms & Conference Suites',
      desc: 'Integrated AV conference tables, custom slat acoustic paneling, concealed electrical raceways, and architectural glass partitions.',
      img: '/images/commercial-conference.jpg',
    },
    {
      title: 'Commercial Steel Framing & Drywall Systems',
      desc: 'Heavy-gauge light steel framing, Level 5 smooth drywall finish, commercial drop ceilings, and commercial fire-rated assemblies.',
      img: '/images/commercial-steel-framing.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Do you work within active commercial buildings and coordinate with property managers?',
      a: 'Yes. We accommodate after-hours work, dust-containment barriers (HEPA filtration), and strict building access rules to minimize disruption to neighboring tenants.',
    },
    {
      q: 'Are your commercial buildouts ADA compliant?',
      a: 'Completely. We ensure all doorway widths, zero-barrier thresholds, commercial restroom grab bars, and counter heights strictly adhere to the Americans with Disabilities Act (ADA) and Florida Accessibility Code.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A2128]">
      {/* Hero Header */}
      <section className="relative min-h-[65vh] flex items-center bg-[#000D13] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/commercial-gallery-lounge.jpg"
            alt="Commercial remodeling and executive buildouts by Globe Construction"
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
            <span className="text-[#CBB890] font-semibold">Commercial Remodeling</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Stature & Tenant Buildouts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.1] mb-6 font-display">
              Commercial Remodeling <br />
              <span className="text-[#CBB890] font-editorial italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                & Executive Buildouts.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
              From boutique galleries and professional medical/legal offices to executive conference suites, Globe Construction applies residential-grade craftsmanship to commercial environments.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToEstimate}
                className="inline-flex items-center justify-center gap-3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Request Commercial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-4 rounded-xl border border-white/20 transition-all hover:border-[#CBB890]/50"
              >
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#051821] border-b border-[#CBB890]/20 py-6 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Commercial Tenant Improvements (TI)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">ADA Compliance & Municipal Life Safety Codes</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Fully Insured Florida General Contractor</span>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Commercial Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Elevating workplaces into bespoke brand experiences.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      Real Commercial Project
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
              Commercial Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Commercial Remodeling FAQs
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
      <EstimateSection defaultService="Commercial Remodeling" />
    </div>
  );
}
