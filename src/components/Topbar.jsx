import React from 'react';
import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-[#000D13] text-[#FAF9F6] border-b border-[#CBB890]/20 text-xs py-2 px-4 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
          <span className="flex items-center gap-1.5 text-[#CBB890]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Licensed General Contractor</span>
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:flex items-center gap-1 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#CBB890]" />
            <span>Based in Odessa, FL • Serving Pasco & Tampa Bay</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden lg:flex items-center gap-1 text-white/70">
            <Clock className="w-3.5 h-3.5 text-[#CBB890]" />
            <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
          </span>
          <a
            href="tel:+18133944528"
            className="flex items-center gap-1.5 font-semibold text-[#CBB890] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(813) 394-4528</span>
          </a>
        </div>
      </div>
    </div>
  );
}
