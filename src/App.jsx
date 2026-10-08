import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BrandPositioning from './components/BrandPositioning';
import KitchenShowcase from './components/KitchenShowcase';
import BathroomShowcase from './components/BathroomShowcase';
import FullHomeShowcase from './components/FullHomeShowcase';
import AdditionsShowcase from './components/AdditionsShowcase';
import CommercialShowcase from './components/CommercialShowcase';
import PortfolioGrid from './components/PortfolioGrid';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ProcessSection from './components/ProcessSection';
import ReviewsSection from './components/ReviewsSection';
import ServiceAreas from './components/ServiceAreas';
import AboutSection from './components/AboutSection';
import EstimateSection from './components/EstimateSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import EstimateModal from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const openEstimateModal = () => {
    setIsEstimateModalOpen(true);
  };

  const closeEstimateModal = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A2128]">
      {/* Top Announcement Bar */}
      <Topbar />

      {/* Sticky Luxury Navbar */}
      <Navbar onOpenEstimate={openEstimateModal} />

      <main className="flex-1">
        {/* Flagship Hero Section */}
        <Hero onOpenEstimate={openEstimateModal} />

        {/* General Contractor Trust Strip */}
        <TrustStrip />

        {/* Brand Thesis & Differentiators */}
        <BrandPositioning onOpenEstimate={openEstimateModal} />

        {/* Core Tier 1 Services */}
        <KitchenShowcase onOpenEstimate={openEstimateModal} />
        <BathroomShowcase onOpenEstimate={openEstimateModal} />
        <FullHomeShowcase onOpenEstimate={openEstimateModal} />

        {/* Tier 2 Services: Structural Additions & Commercial Stature */}
        <AdditionsShowcase onOpenEstimate={openEstimateModal} />
        <CommercialShowcase onOpenEstimate={openEstimateModal} />

        {/* Editorial Project Portfolio */}
        <PortfolioGrid onOpenEstimate={openEstimateModal} />

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* The 4-Step Client Journey */}
        <ProcessSection />

        {/* 5.0 Star Client Reviews */}
        <ReviewsSection />

        {/* Geographic Service Footprint */}
        <ServiceAreas />

        {/* About Us & Field Heritage */}
        <AboutSection onOpenEstimate={openEstimateModal} />

        {/* Interactive Multi-Step Estimate Section */}
        <EstimateSection />
      </main>

      {/* Architectural Deep Navy Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenEstimate={openEstimateModal} />

      {/* Conversion Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={closeEstimateModal}
      />
    </div>
  );
}
