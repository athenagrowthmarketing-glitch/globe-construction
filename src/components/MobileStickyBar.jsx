import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function MobileStickyBar({ onOpenEstimate }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#000D13]/95 backdrop-blur-md border-t border-[#CBB890]/25 p-3 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+18133944528"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#CBB890]/40 bg-[#051821] text-[#CBB890] text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenEstimate}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#CBB890] text-[#000D13] text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <span>Get Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
