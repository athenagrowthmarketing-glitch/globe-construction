import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export default function PortfolioGrid({ onOpenEstimate }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'full-home', label: 'Full Home' },
    { id: 'additions', label: 'Additions & Outdoor' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const projects = [
    {
      title: 'The Contemporary Estate',
      category: 'kitchens',
      categoryLabel: 'Kitchen Remodel',
      location: 'Odessa, FL',
      image: '/images/hero-kitchen.jpg',
      scope: 'Waterfall Quartz Island & Custom Shaker Millwork',
    },
    {
      title: 'The Spa Wet Room Suite',
      category: 'bathrooms',
      categoryLabel: 'Master Bathroom',
      location: 'Pasco County, FL',
      image: '/images/hero-bath.jpg',
      scope: 'Dual Gold Rain Showers & Freestanding Soaking Tub',
    },
    {
      title: 'The Great Room & Architectural Hearth',
      category: 'full-home',
      categoryLabel: 'Full Home Remodel',
      location: 'Odessa, FL',
      image: '/images/hero-living.jpg',
      scope: 'Double-Height Slat Fireplace & Floating Iron Staircase',
    },
    {
      title: 'The Poolside Lanai Addition',
      category: 'additions',
      categoryLabel: 'Structural Addition',
      location: 'Odessa, FL',
      image: '/images/addition-pool-lanai.jpg',
      scope: 'Covered Patio Extension & Florida Pool Enclosure',
    },
    {
      title: 'The Sarasota Design Atelier',
      category: 'commercial',
      categoryLabel: 'Commercial Buildout',
      location: 'Sarasota, FL',
      image: '/images/commercial-gallery-lounge.jpg',
      scope: 'Polished Microcement, Steel Framing & Track Lighting',
    },
    {
      title: 'The Spanish Colonial Villa',
      category: 'kitchens',
      categoryLabel: 'Kitchen Remodel',
      location: 'Tampa Bay, FL',
      image: '/images/kitchen-spanish.jpg',
      scope: 'Handcrafted Plaster Hood, Saltillo Floors & Waterfall Bar',
    },
    {
      title: 'The Charcoal Transitional Kitchen',
      category: 'kitchens',
      categoryLabel: 'Kitchen Remodel',
      location: 'Tampa Bay, FL',
      image: '/images/kitchen-charcoal.jpg',
      scope: 'Glass-Front Upper Cabinets, Gas Range & Brass Hardware',
    },
    {
      title: 'The Arched Double Vanity Retreat',
      category: 'bathrooms',
      categoryLabel: 'Master Bathroom',
      location: 'Estero, FL',
      image: '/images/bath-double-vanity.jpg',
      scope: 'Natural Oak Millwork, Black Mirrors & Curbless Shower',
    },
    {
      title: 'The Florida Summer Kitchen & Pizza Oven',
      category: 'additions',
      categoryLabel: 'Outdoor Living',
      location: 'Odessa, FL',
      image: '/images/outdoor-summer-kitchen.jpg',
      scope: 'Stone Countertops, Pergola Roof & Built-In Pizza Hearth',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#000D13] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Florida Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF9F6] font-display tracking-tight leading-[1.15]">
              Featured Project <br />
              <span className="text-[#CBB890] font-editorial italic font-normal">
                Case Studies.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
            Every home we touch represents a bespoke architectural transformation. Explore our portfolio 
            of luxury kitchens, spa bathrooms, structural additions, and whole-house renovations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === cat.id
                  ? 'bg-[#CBB890] text-[#000D13] shadow-md'
                  : 'bg-[#051821] text-white/70 hover:text-white border border-white/10 hover:border-[#CBB890]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#051821] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#CBB890]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="relative aspect-[16/11] overflow-hidden image-zoom-container">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#000D13]/85 text-[#CBB890] border border-[#CBB890]/30 backdrop-blur-sm">
                    {proj.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#CBB890]" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-[#CBB890] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {proj.scope}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#CBB890] font-semibold tracking-wide">
                    General Contractor Oversight
                  </span>
                  <button
                    onClick={onOpenEstimate}
                    className="text-white/60 group-hover:text-[#CBB890] transition-colors flex items-center gap-1 text-xs font-semibold"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
