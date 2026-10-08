import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowRight, Shield } from 'lucide-react';

export default function Navbar({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Kitchen Remodeling',
      desc: 'Waterfall islands, custom cabinetry & open layouts',
      href: '#kitchens',
      tag: 'Primary Focus',
    },
    {
      title: 'Bathroom Remodeling',
      desc: 'Spa wet rooms, curbless showers & freestanding tubs',
      href: '#bathrooms',
      tag: 'Spa Luxury',
    },
    {
      title: 'Full Home Remodeling',
      desc: 'Whole-house architectural cohesion & floorplan redesign',
      href: '#full-home',
      tag: 'Whole Residence',
    },
    {
      title: 'Home Additions',
      desc: 'Structural extensions, master suites & covered lanai living',
      href: '#additions',
      tag: 'Structural CBS',
    },
    {
      title: 'Commercial Remodeling',
      desc: 'Boutique offices, ateliers, retail & executive buildouts',
      href: '#commercial',
      tag: 'Commercial',
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000D13]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#CBB890]/20'
          : 'bg-[#000D13] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-center">
            {/* SVG Logo mark */}
            <div className="relative flex items-center">
              <svg viewBox="0 0 280 65" className="h-10 sm:h-11 w-auto" fill="none">
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
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors py-2"
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#CBB890]' : 'text-white/60'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-[#051821] border border-[#CBB890]/25 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-1">
                  {services.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block p-3 rounded-lg hover:bg-[#000D13] hover:border hover:border-[#CBB890]/30 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white group-hover:text-[#CBB890] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#CBB890]/15 text-[#CBB890] border border-[#CBB890]/20">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed group-hover:text-white/80">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#portfolio"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#before-after"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Before & After
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Our Process
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Reviews
          </a>
          <a
            href="#areas"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Service Areas
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18133944528"
            className="text-sm font-medium text-white/80 hover:text-[#CBB890] flex items-center gap-1.5 transition-colors pr-2"
          >
            <Phone className="w-4 h-4 text-[#CBB890]" />
            <span>(813) 394-4528</span>
          </a>

          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 bg-[#CBB890] hover:bg-[#B8A377] text-[#000D13] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request an Estimate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+18133944528"
            className="p-2 text-[#CBB890] bg-white/5 rounded-lg border border-white/10"
            aria-label="Call Globe Construction"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#CBB890] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000D13] border-b border-[#CBB890]/25 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#CBB890]">
              Remodeling Services
            </span>
            <div className="grid grid-cols-1 gap-2 pt-1">
              {services.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-white/90 hover:text-[#CBB890] text-sm border-b border-white/5"
                >
                  <span>{item.title}</span>
                  <span className="text-[10px] text-[#CBB890]">{item.tag}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-3">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Featured Portfolio
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Before & After Transformations
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              The 4-Step Build Process
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Client Reviews (5.0 ★)
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Odessa & Tampa Bay Service Areas
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              About Globe Construction
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full text-center bg-[#CBB890] text-[#000D13] font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-md"
            >
              Request an Estimate
            </button>
            <a
              href="tel:+18133944528"
              className="w-full text-center border border-[#CBB890]/40 text-[#CBB890] font-semibold text-xs uppercase tracking-wider py-3 rounded-lg"
            >
              Call (813) 394-4528
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
