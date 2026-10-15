import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ArrowRight, Shield, Camera } from 'lucide-react';
import { scrollToEstimate } from '../utils/scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

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
      href: '/kitchen-remodeling',
      tag: 'Primary Focus',
    },
    {
      title: 'Bathroom Remodeling',
      desc: 'Spa wet rooms, curbless showers & freestanding tubs',
      href: '/bathroom-remodeling',
      tag: 'Spa Luxury',
    },
    {
      title: 'Full Home Remodeling',
      desc: 'Whole-house architectural cohesion & floorplan redesign',
      href: '/full-home-remodeling',
      tag: 'Whole Residence',
    },
    {
      title: 'Home Additions',
      desc: 'Structural extensions, master suites & covered lanai living',
      href: '/home-additions',
      tag: 'Structural CBS',
    },
    {
      title: 'Commercial Remodeling',
      desc: 'Boutique offices, ateliers, retail & executive buildouts',
      href: '/commercial-remodeling',
      tag: 'Commercial',
    },
  ];

  const handleNavClick = (hash) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
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
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000D13]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#CBB890]/20'
          : 'bg-[#000D13] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/globe-logo-transparent.png"
            alt="Globe Construction"
            className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

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
                    <Link
                      key={index}
                      to={item.href}
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
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CBB890] hover:text-white px-3 py-1.5 rounded-lg bg-[#CBB890]/15 hover:bg-[#CBB890]/25 border border-[#CBB890]/35 transition-all shadow-sm"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Gallery</span>
            <span className="text-[10px] font-mono px-1 rounded bg-[#000D13]/40 text-[#CBB890]">176</span>
          </Link>

          <button
            onClick={() => handleNavClick('#portfolio')}
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNavClick('#before-after')}
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Before & After
          </button>

          <button
            onClick={() => handleNavClick('#process')}
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Process
          </button>

          <Link
            to="/service-areas"
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            Service Areas
          </Link>

          <button
            onClick={() => handleNavClick('#about')}
            className="text-sm font-medium text-white/90 hover:text-[#CBB890] transition-colors"
          >
            About Us
          </button>
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

          {/* Smooth Scroll to Single Estimate Form - ZERO POPUP */}
          <button
            onClick={scrollToEstimate}
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
        <div className="lg:hidden bg-[#000D13] border-b border-[#CBB890]/25 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          {/* HIGH-IMPACT PROMINENT GALLERY CARD (CLIENT TOP PRIORITY) */}
          <Link
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-4 rounded-xl bg-gradient-to-r from-[#CBB890]/25 via-[#CBB890]/15 to-[#CBB890]/5 border-2 border-[#CBB890] shadow-xl group transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#CBB890] text-[#000D13] shadow-md">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-white group-hover:text-[#CBB890] transition-colors">
                      Galeria / Gallery
                    </span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#CBB890] text-[#000D13]">
                      176 Fotos
                    </span>
                  </div>
                  <p className="text-xs text-white/80 font-medium">
                    Cozinhas, Banheiros, Pisos, Exterior &amp; Obras
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#CBB890] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#CBB890]">
              Remodeling Services
            </span>
            <div className="grid grid-cols-1 gap-2 pt-1">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#CBB890]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between w-full text-left text-sm font-semibold text-[#CBB890] hover:text-white py-1"
            >
              <span className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>Galeria de Obras (Todas as Fotos)</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => handleNavClick('#portfolio')}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Project Portfolio
            </button>
            <button
              onClick={() => handleNavClick('#before-after')}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Before & After
            </button>
            <button
              onClick={() => handleNavClick('#process')}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Our 4-Step Process
            </button>
            <Link
              to="/service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              Service Areas (Odessa & Tampa Bay)
            </Link>
            <button
              onClick={() => handleNavClick('#about')}
              className="block w-full text-left text-sm font-medium text-white/90 hover:text-[#CBB890]"
            >
              About Globe Construction
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToEstimate();
              }}
              className="w-full py-3.5 bg-[#CBB890] text-[#000D13] font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg"
            >
              Request Free Estimate
            </button>
            <a
              href="tel:+18133944528"
              className="w-full py-3 bg-white/5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#CBB890]" />
              <span>(813) 394-4528</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
