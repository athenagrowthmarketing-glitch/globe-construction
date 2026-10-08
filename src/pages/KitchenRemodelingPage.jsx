import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Hammer,
  Layers,
  Compass,
  FileCheck2,
} from 'lucide-react';
import EstimateSection from '../components/EstimateSection';
import { scrollToEstimate } from '../utils/scroll';

export default function KitchenRemodelingPage() {
  const capabilities = [
    {
      title: 'Waterfall Quartz Islands',
      desc: 'Bookmatched slabs, 45-degree mitered apron edges, and integrated seating overhangs engineered as the architectural centerpiece of your home.',
      img: '/images/kitchen-waterfall.jpg',
    },
    {
      title: 'Floor-to-Ceiling Custom Millwork',
      desc: 'Soft-close dovetail drawers, full-extension European slides, integrated spice pull-outs, hidden pantries, and bespoke crown molding.',
      img: '/images/kitchen-cabinetry.jpg',
    },
    {
      title: 'Structural Open-Concept Conversion',
      desc: 'Licensed removal of load-bearing walls, installation of concealed steel or LVL flush beams, expanding sightlines into the living room.',
      img: '/images/kitchen-island.jpg',
    },
    {
      title: 'Designer Plumbing & Hardware',
      desc: 'Solid brass gooseneck faucets, undermount composite or stainless workstation sinks, pot fillers, and champagne bronze pulls.',
      img: '/images/kitchen-detail.jpg',
    },
    {
      title: 'Transitional & Contrast Islands',
      desc: 'Moody charcoal and rich espresso base cabinetry paired with luminous perimeter quartz and architectural custom range hoods.',
      img: '/images/kitchen-charcoal.jpg',
    },
    {
      title: 'Spanish & Mediterranean Accents',
      desc: 'Handcrafted plaster bell hoods, zellige or herringbone backsplashes, and authentic Florida coastal character.',
      img: '/images/kitchen-spanish.jpg',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Discovery & Spatial Planning',
      desc: 'We analyze your lifestyle, kitchen workflow, storage pain points, and design aspirations on-site in Odessa, Pasco, or Tampa Bay.',
    },
    {
      step: '02',
      title: 'Permitting & Material Procurement',
      desc: 'As licensed Florida general contractors, we pull Pasco/Hillsborough/Pinellas permits and order slabs, cabinets, and fixtures to eliminate downtime.',
    },
    {
      step: '03',
      title: 'Licensed Rough-Ins & Installation',
      desc: 'Our certified crews handle plumbing, dedicated 20-amp circuits, mechanical venting, cabinet setting, and laser-guided quartz fabrication.',
    },
    {
      step: '04',
      title: 'Detail Finishing & Final Sign-Off',
      desc: 'Grout sealing, under-cabinet LED balancing, punch list execution, building department final inspection, and turnkey handover.',
    },
  ];

  const faqs = [
    {
      q: 'How long does a full luxury kitchen remodel take?',
      a: 'A comprehensive kitchen remodel typically spans 4 to 8 weeks from demolition to final inspection, depending on whether load-bearing walls are removed or plumbing is relocated. Pre-ordering cabinetry and countertops ensures zero downtime during construction.',
    },
    {
      q: 'Do you handle the building permits in Pasco County and Tampa Bay?',
      a: 'Yes, completely. Globe Construction is a licensed Florida General Contractor. We handle engineering plans, submit permit packages to Pasco County, Hillsborough County, or Pinellas County building departments, schedule municipal inspections, and guarantee full Florida Building Code (FBC 8th Edition) compliance.',
    },
    {
      q: 'Can we remove a wall between the kitchen and living room?',
      a: 'Absolutely. We specialize in structural wall removals. We calculate ceiling loads, engineer flush-mount LVL or steel beams, and reroute HVAC, electrical, and plumbing to create seamless, wide-open living spaces.',
    },
    {
      q: 'Can I choose my own quartz slabs and appliances?',
      a: 'Yes. We guide you to premier local stone yards across Tampa and Sarasota to personally select your live quartz, quartzite, or marble slabs, and coordinate seamlessly with your luxury appliance distributor (Sub-Zero, Wolf, Thermador, Bosch).',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1A2128]">
      {/* Hero Header */}
      <section className="relative min-h-[65vh] flex items-center bg-[#000D13] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-kitchen.jpg"
            alt="Bespoke luxury kitchen remodeling in Odessa, FL by Globe Construction"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000D13]/95 via-[#000D13]/85 to-[#000D13]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000D13] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-[#CBB890] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#CBB890]" />
            <span className="text-white/40">Services</span>
            <ChevronRight className="w-3 h-3 text-[#CBB890]" />
            <span className="text-[#CBB890] font-semibold">Kitchen Remodeling</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Residential Specialization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.1] mb-6 font-display">
              Bespoke Kitchen Remodeling <br />
              <span className="text-[#CBB890] font-editorial italic font-normal text-4xl sm:text-5xl lg:text-6xl">
                in Odessa & Tampa Bay.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
              From continuous waterfall quartz islands and architectural millwork to licensed open-concept wall removals, Globe Construction delivers heirloom kitchens built with Florida general contracting precision.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToEstimate}
                className="inline-flex items-center justify-center gap-3 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Request Kitchen Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-4 rounded-xl border border-white/20 transition-all hover:border-[#CBB890]/50"
              >
                <span>View Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-[#051821] border-b border-[#CBB890]/20 py-6 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Florida Licensed General Contractor</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Permits & Structural Engineering Handled</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-[#CBB890]" />
            <span className="font-semibold text-white/90">Dedicated Project Management</span>
          </div>
        </div>
      </section>

      {/* Capabilities & Real Portfolio Photos */}
      <section id="capabilities" className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Craftsmanship & Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Built with architectural integrity and authentic materials.
            </h2>
            <p className="text-base text-[#1A2128]/70 mt-4 leading-relaxed">
              Every kitchen we deliver is custom-engineered for your family’s routine. We never rely on flat-pack modular solutions or superficial cosmetics.
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
                      Real Field Project
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

      {/* 4-Step Methodology */}
      <section className="py-20 lg:py-24 bg-[#051821] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CBB890]">
              Predictable Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FAF9F6] mt-2 font-display">
              Our 4-Step Kitchen Remodeling Protocol
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3">
              Clear timelines, guaranteed Florida code compliance, and constant direct communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="bg-[#000D13] border border-[#CBB890]/25 rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#CBB890]/30 font-display block mb-3">
                    {st.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen FAQ Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E5DFD7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8A377]">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000D13] mt-2 font-display">
              Kitchen Remodeling FAQs
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
      <EstimateSection defaultService="Kitchen Remodeling" />
    </div>
  );
}
