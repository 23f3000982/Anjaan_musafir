'use client';
import React, { useState, useEffect } from 'react';

import { Bike, Compass, Heart, MapPin, Mail, Phone, Map, ShieldAlert } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RiderDestinations from '@/components/RiderDestinations';
import BrandIntegration from '@/components/BrandIntegration';
import TrustStats from '@/components/TrustStats';
import TourExperienceGallery from '@/components/TourExperienceGallery';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import NewsletterSection from '@/components/NewsletterSection';
import BookingModal from '@/components/BookingModal';
import { BrandTheme } from './types';


export default function Home() {

  const [activeTheme, setActiveTheme] = useState<BrandTheme>('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedId, setPreselectedId] = useState('');

  // Sychronize active brand theme with the document body's global CSS styles
  useEffect(() => {
    document.body.className = activeTheme === 'riders' ? 'theme-riders' : 'theme-chaloyaar';
  }, [activeTheme]);

  // Handle open modal with specific trip ID pre-filled
  const handleOpenBookingModal = (id: string) => {
    setPreselectedId(id);
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setPreselectedId('');
  };

  return (
    <div className="app-container" id="chalo-yaar-app-container">
      {/* Navigation & Header */}
      <Navbar
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        openBookingModal={handleOpenBookingModal}
      />

      {/* Main Sections Wrapper */}
      <main id="main-content-scroller">
        {/* Hero Section */}
        <HeroSection
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
          openBookingModal={handleOpenBookingModal}
        />

        {/* Motorcycle Expeditions (ChaloYaarRiders Focus) */}
        <RiderDestinations
          openBookingModal={handleOpenBookingModal}
        />

        {/* Holiday Verticals (ChaloYaar General Focus) */}
        <BrandIntegration
          openBookingModal={handleOpenBookingModal}
        />

        {/* Dynamic Experience Photo Gallery Bento */}
        <TourExperienceGallery />

        {/* Interactive FAQ accordion block */}
        <FAQSection />

        {/* Trust Indicators and Testimonials */}
        <TrustStats />

        {/* Interactive Direct Communication Form */}
        <ContactSection />

        {/* Cohort alert newsletter subscriptor */}
        <NewsletterSection />
      </main>

      {/* High-fidelity Brand Footer */}
      <footer className="site-footer" id="site-footer-pane">
        <div className="footer-columns" id="footer-links-columns">
          {/* Logo & Callouts column */}
          <div id="footer-logo-desc-col">
            <div className="logo-wrap" style={{ marginBottom: '16px' }}>
              <div className="logo-graphic">
                {activeTheme === 'riders' ? <Bike size={18} /> : <Compass size={18} />}
              </div>
              <span className="logo-text">
                {activeTheme === 'riders' ? 'Befikar Bikers' : 'Anjan Musafir'}
              </span>
            </div>
            <p className="footer-col-desc">
              Curating high-energy motor convoy rallies and verified vacation packages for explorers. Strangers on day 1, family on day 10.
            </p>
          </div>

          {/* Riders Quick Links */}
          <div id="footer-riders-col">
            <h4 className="footer-col-title">Befikar Bikers Hotlines</h4>
            <ul className="footer-col-links">
              <li><a href="#destinations" className="footer-col-link">Ladakh Expedition</a></li>
              <li><a href="#destinations" className="footer-col-link">Spiti Loop Trail</a></li>
              <li><a href="#destinations" className="footer-col-link">Kerala Coastal cruise</a></li>
              <li><a href="#destinations" className="footer-col-link">Thar Desert Sandstorm</a></li>
            </ul>
          </div>

          {/* Holiday Packages Quick links */}
          <div id="footer-chaloyaar-col">
            <h4 className="footer-col-title">Anjan Musafir Sectors</h4>
            <ul className="footer-col-links">
              <li><a href="#chaloyaar-explore" className="footer-col-link">Strangers Cohort Trip</a></li>
              <li><a href="#chaloyaar-explore" className="footer-col-link">Personalized Family Travel</a></li>
              <li><a href="#chaloyaar-explore" className="footer-col-link">Intimate Couple Getaways</a></li>
              <li><a href="#chaloyaar-explore" className="footer-col-link">Student Budget Excursions</a></li>
            </ul>
          </div>

          {/* Contact coordinates & Safety */}
          <div id="footer-contact-col">
            <h4 className="footer-col-title">Main Headquarters</h4>
            <ul className="footer-col-links" style={{ gap: '16px' }}>
              <li className="footer-col-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} />
                <span>Indiranagar Double Road, Bangalore, 560038</span>
              </li>
              <li className="footer-col-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} />
                <span>+91 80 44520 900</span>
              </li>
              <li className="footer-col-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                <span>go@befikarbikers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="footer-bottom" id="footer-copyright-strip">
          <div>
            © 2026 Befikar Bikers & Anjan Musafir. All Rights Reserved. Developed & Handcrafted for True Explorers.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#hero" className="footer-col-link">License Waiver</a>
            <a href="#hero" className="footer-col-link">Privacy Safeguards</a>
            <a href="#hero" className="footer-col-link">Safety Regs</a>
          </div>
        </div>
      </footer>

      {/* Multi-step Registration Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        preselectedId={preselectedId}
      />
    </div>
  );
}
