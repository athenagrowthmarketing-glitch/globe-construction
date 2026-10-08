import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import KitchenRemodelingPage from './pages/KitchenRemodelingPage';
import BathroomRemodelingPage from './pages/BathroomRemodelingPage';
import FullHomeRemodelingPage from './pages/FullHomeRemodelingPage';
import HomeAdditionsPage from './pages/HomeAdditionsPage';
import CommercialRemodelingPage from './pages/CommercialRemodelingPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import { scrollToEstimate } from './utils/scroll';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A2128]">
      {/* Scroll Viewport to Top on Route Transitions */}
      <ScrollToTop />

      {/* Top Announcement Bar */}
      <Topbar />

      {/* Sticky Luxury Navbar */}
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kitchen-remodeling" element={<KitchenRemodelingPage />} />
          <Route path="/bathroom-remodeling" element={<BathroomRemodelingPage />} />
          <Route path="/full-home-remodeling" element={<FullHomeRemodelingPage />} />
          <Route path="/home-additions" element={<HomeAdditionsPage />} />
          <Route path="/commercial-remodeling" element={<CommercialRemodelingPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Architectural Deep Navy Footer with Athena Credit */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenEstimate={scrollToEstimate} />
    </div>
  );
}
