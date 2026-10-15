import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { scrollToEstimate } from '../utils/scroll';
import EstimateSection from '../components/EstimateSection';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Compute counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: galleryItems.length };
    galleryCategories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = galleryItems.filter((item) => item.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  // Touch swipe handling for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      // Next
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (isRightSwipe) {
      // Prev
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A2128]">
      {/* Hero Header */}
      <section className="relative bg-[#000D13] text-white pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-[#CBB890]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0A2635] via-[#000D13] to-[#000D13] opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#CBB890] text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>100% Real Work • Zero Stock Photos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Project Gallery <span className="text-[#CBB890] font-serif italic">&amp; Works</span>
          </h1>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Direct from our job sites across Tampa Bay, Odessa, and Sarasota. Tap any category below to inspect our real craftsmanship.
          </p>
        </div>
      </section>

      {/* Sticky Category Filter Bar */}
      <section className="sticky top-[68px] sm:top-[76px] z-30 bg-[#000D13]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
            <div className="flex items-center gap-1.5 text-xs text-[#CBB890] font-semibold pr-2 shrink-0 hidden sm:flex">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </div>
            {galleryCategories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#CBB890] text-[#000D13] shadow-md shadow-[#CBB890]/20 font-bold scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-[#000D13]/20 text-[#000D13]' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        {/* Count Bar */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-black/10">
          <div className="text-xs sm:text-sm text-neutral-600 font-medium">
            Showing <strong className="text-[#000D13]">{filteredItems.length}</strong> authentic photos
          </div>
          <div className="text-xs text-neutral-500 hidden sm:block">
            Tap any photo to view in high definition
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-[#000D13] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 aspect-[4/3] sm:aspect-[4/3]"
            >
              <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#CBB890] mb-0.5">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#CBB890] font-medium">
                  <Maximize2 className="w-3 h-3" />
                  <span>Tap to view</span>
                </div>
              </div>

              {/* Subtle Corner Badge for Mobile Tap Affordance */}
              <div className="absolute bottom-2 right-2 sm:hidden p-1.5 rounded-full bg-black/60 text-white/80 backdrop-blur-sm">
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[#000D13]/98 backdrop-blur-lg flex flex-col justify-between select-none animate-in fade-in duration-200"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono font-semibold text-[#CBB890]">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-[#CBB890]/20 text-[#CBB890] border border-[#CBB890]/30">
                {currentItem.category}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Viewer */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#CBB890] hover:text-[#000D13] text-white transition-all transform active:scale-90 border border-white/15"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Current Image */}
            <div className="max-w-6xl max-h-[75vh] sm:max-h-[82vh] flex items-center justify-center">
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-w-full max-h-[75vh] sm:max-h-[82vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#CBB890] hover:text-[#000D13] text-white transition-all transform active:scale-90 border border-white/15"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Bar / Caption */}
          <div className="px-4 sm:px-8 py-4 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-sm sm:text-base font-bold text-white leading-tight">
                {currentItem.title}
              </p>
              <p className="text-xs text-[#CBB890] mt-0.5">
                {currentItem.titlePt}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setLightboxIndex(null);
                  scrollToEstimate();
                }}
                className="px-4 py-2 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all"
              >
                Inquire About Similar Build
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Conversion Section */}
      <EstimateSection />
    </div>
  );
}
