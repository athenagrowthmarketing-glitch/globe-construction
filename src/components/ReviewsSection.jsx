import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      author: 'David & Kimberly M.',
      location: 'Odessa, FL',
      project: 'Kitchen & Great Room Remodel',
      rating: 5,
      date: 'Recent Client',
      quote:
        'Globe Construction transformed our 1990s kitchen and living area into a breathtaking modern open space. The waterfall quartz island and custom millwork are flawless. Their superintendent was on-site every day, and they kept our home clean and protected throughout.',
    },
    {
      author: 'Robert S.',
      location: 'Tampa, FL',
      project: 'Master Bath Spa & Wet Room',
      rating: 5,
      date: 'Recent Client',
      quote:
        'The curbless walk-in shower with the freestanding tub is truly like staying at a 5-star resort. Their tile cuts, waterproofing, and plumbing precision gave us absolute peace of mind. Globe handles permits and construction with real general contractor professionalism.',
    },
    {
      author: 'Carlos & Elena R.',
      location: 'Pasco County, FL',
      project: 'Whole-Home Renovation & Addition',
      rating: 5,
      date: 'Recent Client',
      quote:
        'We hired Globe to add a covered patio extension and renovate our entire interior. From CBS block framing to the custom fireplace and floors, everything was delivered on schedule and with outstanding craftsmanship. Highly recommend Globe Construction!',
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CBB890]/15 border border-[#CBB890]/30 text-[#8E7F60] text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#8E7F60]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A2128] font-display tracking-tight leading-[1.15] mb-4">
            Craftsmanship Validated by <br />
            <span className="text-[#8E7F60] font-editorial italic font-normal">
              Florida Homeowners.
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex text-[#CBB890]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#CBB890]" />
              ))}
            </div>
            <span className="text-base font-bold text-[#1A2128]">
              5.0 Star Rating
            </span>
            <span className="text-xs text-[#7E8B98]">
              (29+ Verified Google Client Reviews)
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5DFD7] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#8E7F60]/50 transition-all relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#CBB890]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CBB890]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#CBB890]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#4D5761] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD7]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2128] font-display">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-[#7E8B98]">{rev.location}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF9F6] text-[#8E7F60] border border-[#E5DFD7]">
                    {rev.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
