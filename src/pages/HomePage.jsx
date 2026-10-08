import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import BrandPositioning from '../components/BrandPositioning';
import KitchenShowcase from '../components/KitchenShowcase';
import BathroomShowcase from '../components/BathroomShowcase';
import FullHomeShowcase from '../components/FullHomeShowcase';
import AdditionsShowcase from '../components/AdditionsShowcase';
import CommercialShowcase from '../components/CommercialShowcase';
import PortfolioGrid from '../components/PortfolioGrid';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessSection from '../components/ProcessSection';
import ReviewsSection from '../components/ReviewsSection';
import ServiceAreas from '../components/ServiceAreas';
import AboutSection from '../components/AboutSection';
import EstimateSection from '../components/EstimateSection';
import { scrollToEstimate } from '../utils/scroll';

export default function HomePage() {
  return (
    <>
      {/* Flagship Hero Section */}
      <Hero onOpenEstimate={scrollToEstimate} />

      {/* General Contractor Trust Strip */}
      <TrustStrip />

      {/* Brand Thesis & Differentiators */}
      <BrandPositioning onOpenEstimate={scrollToEstimate} />

      {/* Core Tier 1 Services */}
      <KitchenShowcase onOpenEstimate={scrollToEstimate} />
      <BathroomShowcase onOpenEstimate={scrollToEstimate} />
      <FullHomeShowcase onOpenEstimate={scrollToEstimate} />

      {/* Tier 2 Services: Structural Additions & Commercial Stature */}
      <AdditionsShowcase onOpenEstimate={scrollToEstimate} />
      <CommercialShowcase onOpenEstimate={scrollToEstimate} />

      {/* Editorial Project Portfolio */}
      <PortfolioGrid onOpenEstimate={scrollToEstimate} />

      {/* Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* The 4-Step Client Journey */}
      <ProcessSection />

      {/* 5.0 Star Client Reviews */}
      <ReviewsSection />

      {/* Geographic Service Footprint */}
      <ServiceAreas />

      {/* About Us & Field Heritage */}
      <AboutSection onOpenEstimate={scrollToEstimate} />

      {/* Interactive Multi-Step Estimate Section (Single embedded form - zero modal popup) */}
      <EstimateSection />
    </>
  );
}
