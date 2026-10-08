import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activePair, setActivePair] = useState(0);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const pairs = [
    {
      title: 'Commercial Gallery Transformation',
      subtitle: 'From Raw Concrete & Steel Studs to Museum-Grade Minimalist Gallery',
      location: 'Sarasota, FL',
      beforeImg: '/images/commercial-steel-framing.jpg',
      afterImg: '/images/commercial-gallery-lounge.jpg',
      beforeLabel: 'Before: Framing & MEP Rough-In',
      afterLabel: 'After: Finished Luxury Gallery',
    },
    {
      title: 'Odessa Residence Living Transformation',
      subtitle: 'From Unfinished Drywall & Blockwork to Architectural Double-Height Living',
      location: 'Odessa, FL',
      beforeImg: '/images/in-progress-drywall.jpg',
      afterImg: '/images/hero-living.jpg',
      beforeLabel: 'Before: Rough Drywall Phase',
      afterLabel: 'After: Slat Fireplace & Wood Trim',
    },
  ];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  const currentPair = pairs[activePair];

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15] mb-4">
            Real Transformations, <br />
            <span className="text-[#8E7F60] font-editorial italic font-normal">
              Revealed Side-by-Side.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#4D5761] leading-relaxed">
            Drag the slider to witness how Globe Construction transforms raw construction sites, 
            rough framing, and outdated layouts into architectural showcases.
          </p>

          {/* Pair Toggle Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {pairs.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePair(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activePair === idx
                    ? 'bg-[#000D13] text-[#CBB890] shadow-md border border-[#CBB890]/40'
                    : 'bg-white text-[#4D5761] border border-[#E5DFD7] hover:border-[#8E7F60]'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD7] select-none cursor-ew-resize"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={handleMouseMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <img
              src={currentPair.afterImg}
              alt={currentPair.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#000D13]/85 text-[#CBB890] border border-[#CBB890]/30 backdrop-blur-sm pointer-events-none">
              {currentPair.afterLabel}
            </span>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentPair.beforeImg}
                alt={currentPair.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#000D13]/85 text-white/90 border border-white/20 backdrop-blur-sm pointer-events-none">
                {currentPair.beforeLabel}
              </span>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#CBB890] shadow-[0_0_10px_rgba(203,184,144,0.6)] cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#000D13] border-2 border-[#CBB890] flex items-center justify-center text-[#CBB890] shadow-xl">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Caption Below Slider */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E8B98] gap-2 px-2">
            <span>Drag the center handle left or right to inspect the transformation</span>
            <span className="font-semibold text-[#1A2128]">{currentPair.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
