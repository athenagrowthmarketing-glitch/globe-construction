import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowUpRight,
  Sparkles,
  Film,
  ArrowRight,
  Play,
  X,
  VolumeX,
  Eye,
} from 'lucide-react';

export default function PortfolioGrid({ onOpenEstimate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', galleryCat: 'all' },
    { id: 'videos', label: 'Video Tours', galleryCat: 'videos' },
    { id: 'kitchens', label: 'Kitchens', galleryCat: 'kitchen' },
    { id: 'bathrooms', label: 'Bathrooms', galleryCat: 'bathroom' },
    { id: 'full-home', label: 'Full Home', galleryCat: 'living' },
    { id: 'additions', label: 'Additions & Outdoor', galleryCat: 'exterior' },
    { id: 'commercial', label: 'Commercial', galleryCat: 'commercial' },
  ];

  const projects = [
    {
      title: 'The Contemporary Estate',
      category: 'kitchens',
      galleryCategory: 'kitchen',
      categoryLabel: 'Kitchen Remodel',
      location: 'Odessa, FL',
      image: '/images/hero-kitchen.jpg',
      scope: 'Waterfall Quartz Island & Custom Shaker Millwork',
    },
    {
      title: 'Spanish Villa Kitchen Tour',
      category: 'videos',
      galleryCategory: 'videos',
      categoryLabel: 'Video Tour • Kitchen',
      location: 'Tampa Bay, FL',
      image: '/videos/posters/kitchen-spanish-colonial-tour-poster.webp',
      videoSrc: '/videos/kitchen-spanish-colonial-tour.mp4',
      duration: '0:41',
      isVideo: true,
      scope: 'Cinematic walkthrough of plaster hood, fluted island, and custom millwork',
    },
    {
      title: 'The Spa Wet Room Suite',
      category: 'bathrooms',
      galleryCategory: 'bathroom',
      categoryLabel: 'Master Bathroom',
      location: 'Pasco County, FL',
      image: '/images/hero-bath.jpg',
      scope: 'Dual Gold Rain Showers & Freestanding Soaking Tub',
    },
    {
      title: 'Luxury Master Bath & Tub Tour',
      category: 'videos',
      galleryCategory: 'videos',
      categoryLabel: 'Video Tour • Bathroom',
      location: 'Pasco County, FL',
      image: '/videos/posters/bathroom-soaking-tub-tour-poster.webp',
      videoSrc: '/videos/bathroom-soaking-tub-tour.mp4',
      duration: '0:34',
      isVideo: true,
      scope: 'Full tour of freestanding tub, gold shower fixtures, and marble finish',
    },
    {
      title: 'The Great Room & Architectural Hearth',
      category: 'full-home',
      galleryCategory: 'living',
      categoryLabel: 'Full Home Remodel',
      location: 'Odessa, FL',
      image: '/images/hero-living.jpg',
      scope: 'Double-Height Slat Fireplace & Floating Iron Staircase',
    },
    {
      title: 'The Poolside Lanai Addition',
      category: 'additions',
      galleryCategory: 'exterior',
      categoryLabel: 'Structural Addition',
      location: 'Odessa, FL',
      image: '/images/addition-pool-lanai.jpg',
      scope: 'Covered Patio Extension & Florida Pool Enclosure',
    },
    {
      title: 'Outdoor Lanai & Screened Pool Tour',
      category: 'videos',
      galleryCategory: 'videos',
      categoryLabel: 'Video Tour • Outdoor',
      location: 'Tampa Bay, FL',
      image: '/videos/posters/outdoor-lanai-pool-patio-poster.webp',
      videoSrc: '/videos/outdoor-lanai-pool-patio.mp4',
      duration: '0:18',
      isVideo: true,
      scope: 'Seamless indoor-outdoor living, covered patio addition, and screened pool',
    },
    {
      title: 'The Sarasota Design Atelier',
      category: 'commercial',
      galleryCategory: 'commercial',
      categoryLabel: 'Commercial Buildout',
      location: 'Sarasota, FL',
      image: '/images/commercial-gallery-lounge.jpg',
      scope: 'Polished Microcement, Steel Framing & Track Lighting',
    },
    {
      title: 'Sarasota Atelier Commercial Tour',
      category: 'videos',
      galleryCategory: 'videos',
      categoryLabel: 'Video Tour • Commercial',
      location: 'Sarasota, FL',
      image: '/videos/posters/commercial-atelier-gallery-tour-poster.webp',
      videoSrc: '/videos/commercial-atelier-gallery-tour.mp4',
      duration: '0:41',
      isVideo: true,
      scope: 'Polished microcement gallery, steel stud framing, and luxury lounge',
    },
    {
      title: 'The Spanish Villa Bath Suite',
      category: 'bathrooms',
      galleryCategory: 'bathroom',
      categoryLabel: 'Master Bathroom',
      location: 'Tampa Bay, FL',
      image: '/images/kitchen-spanish.jpg',
      scope: 'Cross-Pattern Relief Tile, Brushed Brass & Curbless Shower',
    },
    {
      title: 'The Outdoor Living & Pizza Hearth',
      category: 'additions',
      galleryCategory: 'exterior',
      categoryLabel: 'Outdoor Living',
      location: 'Tampa Bay, FL',
      image: '/images/kitchen-charcoal.jpg',
      scope: 'Pergola Covered Patio, Granite Bar & Wood-Fired Pizza Oven',
    },
    {
      title: 'The Waterfront Waterfall Island',
      category: 'kitchens',
      galleryCategory: 'kitchen',
      categoryLabel: 'Kitchen Remodel',
      location: 'Tampa Bay, FL',
      image: '/images/kitchen-waterfall.jpg',
      scope: 'Calacatta Quartz Waterfall Island & Integrated Smart Appliances',
    },
    {
      title: 'The Transitional Oak Kitchen',
      category: 'kitchens',
      galleryCategory: 'kitchen',
      categoryLabel: 'Kitchen Remodel',
      location: 'Odessa, FL',
      image: '/images/kitchen-island.jpg',
      scope: 'Rift-Sawn White Oak Island, Gas Range & Custom Bell Hood',
    },
    {
      title: 'The Arched Double Vanity Retreat',
      category: 'bathrooms',
      galleryCategory: 'bathroom',
      categoryLabel: 'Master Bathroom',
      location: 'Estero, FL',
      image: '/images/bath-double-vanity.jpg',
      scope: 'Natural Oak Millwork, Black Mirrors & Curbless Shower',
    },
    {
      title: 'The Florida Summer Kitchen & Pizza Oven',
      category: 'additions',
      galleryCategory: 'exterior',
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
                Case Studies & Tours.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
            Every home we touch represents a bespoke architectural transformation. Explore our portfolio 
            of luxury kitchens, spa bathrooms, silent video walkthroughs, and additions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? 'bg-[#CBB890] text-[#000D13] shadow-md font-bold'
                  : 'bg-[#051821] text-white/70 hover:text-white border border-white/10 hover:border-[#CBB890]/40'
              }`}
            >
              {cat.id === 'videos' && <Film className="w-3.5 h-3.5 text-current" />}
              <span>{cat.label}</span>
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
              {/* Media Thumbnail Container */}
              {proj.isVideo ? (
                <div
                  onClick={() => setActiveVideo(proj)}
                  className="relative aspect-[16/11] overflow-hidden image-zoom-container cursor-pointer block group/media"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#000D13]/85 text-[#CBB890] border border-[#CBB890]/30 backdrop-blur-sm flex items-center gap-1.5">
                      <Film className="w-3 h-3 text-[#CBB890]" />
                      <span>{proj.categoryLabel}</span>
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/media:bg-black/25 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#CBB890] text-[#000D13] flex items-center justify-center shadow-2xl group-hover/media:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {proj.duration && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono tracking-wider">
                      {proj.duration}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={`/gallery?category=${proj.galleryCategory || 'all'}`}
                  className="relative aspect-[16/11] overflow-hidden image-zoom-container block group/media"
                  title="View project in Gallery"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#000D13]/85 text-[#CBB890] border border-[#CBB890]/30 backdrop-blur-sm">
                      {proj.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover/media:opacity-100 transition-opacity">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#CBB890] text-[#000D13] shadow-md flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>View in Gallery</span>
                    </span>
                  </div>
                </Link>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#CBB890]" />
                    <span>{proj.location}</span>
                  </div>
                  {proj.isVideo ? (
                    <h3
                      onClick={() => setActiveVideo(proj)}
                      className="text-lg font-bold text-white font-display mb-1 group-hover:text-[#CBB890] transition-colors cursor-pointer"
                    >
                      {proj.title}
                    </h3>
                  ) : (
                    <Link to={`/gallery?category=${proj.galleryCategory || 'all'}`}>
                      <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-[#CBB890] transition-colors">
                        {proj.title}
                      </h3>
                    </Link>
                  )}
                  <p className="text-xs text-white/70 leading-relaxed">
                    {proj.scope}
                  </p>
                </div>

                {/* Card Footer with Direct Gallery Link and Inquire CTA */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  {proj.isVideo ? (
                    <button
                      onClick={() => setActiveVideo(proj)}
                      className="text-[#CBB890] hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Tour</span>
                    </button>
                  ) : (
                    <Link
                      to={`/gallery?category=${proj.galleryCategory || 'all'}`}
                      className="text-[#CBB890] hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold"
                    >
                      <span>View in Gallery</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <button
                    onClick={onOpenEstimate}
                    className="text-white/60 hover:text-[#CBB890] transition-colors flex items-center gap-1 text-xs font-semibold"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Gallery with Photos & Videos */}
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[#CBB890] text-white hover:text-[#000D13] font-bold text-xs uppercase tracking-wider border border-white/15 hover:border-[#CBB890] transition-all shadow-md group"
          >
            <Film className="w-4 h-4 text-[#CBB890] group-hover:text-[#000D13] transition-colors" />
            <span>Explore Complete Gallery & All Video Tours (185+ Works)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Video Modal Player on Home Page */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#000D13] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#051821]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-display">
                    {activeVideo.title}
                  </h4>
                  <p className="text-[11px] text-white/60">
                    {activeVideo.location} • {activeVideo.categoryLabel}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70">
                  <VolumeX className="w-3.5 h-3.5 text-[#CBB890]" />
                  <span>Silent Tour</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center max-h-[70vh]">
              <video
                src={activeVideo.videoSrc}
                poster={activeVideo.image}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#051821] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-white/70 text-center sm:text-left">
                {activeVideo.scope}
              </span>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/gallery?category=videos"
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 rounded-lg bg-[#CBB890] text-[#000D13] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5"
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>See All Videos in Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
