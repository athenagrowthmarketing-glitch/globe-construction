import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { scrollToEstimate } from '../utils/scroll';

export default function Footer() {
  const handleAnchorClick = (hash) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#000D13] text-white border-t border-[#CBB890]/25 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand & Stature Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center">
              <svg viewBox="0 0 280 65" className="h-10 w-auto" fill="none">
                <path
                  d="M 12 36 L 52 14 L 88 30"
                  stroke="#CBB890"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="48"
                  y="40"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontSize="28"
                  fontWeight="800"
                  fill="#CBB890"
                  letterSpacing="0.06em"
                >
                  GLOBE
                </text>
                <text
                  x="50"
                  y="56"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#E2D7C0"
                  letterSpacing="0.28em"
                >
                  CONSTRUCTION
                </text>
              </svg>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Premium residential remodeling and architectural general contracting for discerning 
              homeowners across Odessa, Pasco County, and the greater Tampa Bay area.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#CBB890]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed & Insured Florida General Contractor</span>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToEstimate}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#CBB890] hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Request Project Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CBB890]">
              Remodeling Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <Link to="/kitchen-remodeling" className="hover:text-[#CBB890] transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link to="/bathroom-remodeling" className="hover:text-[#CBB890] transition-colors">
                  Bathroom Remodeling & Wet Rooms
                </Link>
              </li>
              <li>
                <Link to="/full-home-remodeling" className="hover:text-[#CBB890] transition-colors">
                  Full Home Remodeling
                </Link>
              </li>
              <li>
                <Link to="/home-additions" className="hover:text-[#CBB890] transition-colors">
                  Home Additions & Covered Lanais
                </Link>
              </li>
              <li>
                <Link to="/commercial-remodeling" className="hover:text-[#CBB890] transition-colors">
                  Commercial Remodeling & Buildouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CBB890]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <button
                  onClick={() => handleAnchorClick('#portfolio')}
                  className="hover:text-[#CBB890] transition-colors text-left"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('#before-after')}
                  className="hover:text-[#CBB890] transition-colors text-left"
                >
                  Before & After
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('#process')}
                  className="hover:text-[#CBB890] transition-colors text-left"
                >
                  Our 4-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('#reviews')}
                  className="hover:text-[#CBB890] transition-colors text-left"
                >
                  Client Reviews (5.0 ★)
                </button>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-[#CBB890] transition-colors">
                  Service Areas (FL)
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('#about')}
                  className="hover:text-[#CBB890] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#CBB890]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80">
              <li>
                <a
                  href="tel:+18133944528"
                  className="flex items-center gap-2 text-white hover:text-[#CBB890] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#CBB890] shrink-0" />
                  <span>+1 (813) 394-4528</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:globegroupfl@gmail.com"
                  className="flex items-center gap-2 hover:text-[#CBB890] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#CBB890] shrink-0" />
                  <span>globegroupfl@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#CBB890] shrink-0 mt-0.5" />
                <span>Odessa, FL 33556 • Pasco & Tampa Bay</span>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.instagram.com/globeconstructionfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#CBB890] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@globeconstructionfl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Athena Credit Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p>© 2026 Globe Group Construction LLC. All rights reserved.</p>
            <p className="text-[11px] text-white/35 mt-0.5">
              Operating publicly as Globe Construction across Florida.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <span>
              Developed by: <a href="https://athenagrowthmarketing.com" target="_blank" rel="noopener" className="text-[#CBB890] hover:underline font-medium">Athena Growth Marketing</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
