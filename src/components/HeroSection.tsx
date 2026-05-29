import React from 'react';
import { ArrowRight, ShieldCheck, Award, Flame } from 'lucide-react';
import { BrandTheme } from '../types';

interface HeroSectionProps {
  activeTheme: BrandTheme;
  setActiveTheme: (theme: BrandTheme) => void;
  openBookingModal: (id: string) => void;
}

export default function HeroSection({ activeTheme, setActiveTheme, openBookingModal }: HeroSectionProps) {
  const isRiders = activeTheme === 'riders';

  const ridersBg = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1920'; // Rugged custom motorcycle cruise landscape
  const chaloyaarBg = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920'; // Clean premium highway sunset roadtrip landscape

  const handleCtaClick = () => {
    openBookingModal('');
  };

  const handleSecondaryScroll = () => {
    const selector = isRiders ? '#destinations' : '#chaloyaar-explore';
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`hero-container ${isRiders ? 'riders-theme-active' : 'chaloyaar-theme-active'}`}
      id="hero"
    >
      {/* Background Images with smooth absolute fading opacity */}
      <img
        src={ridersBg}
        alt="Rugged motorcycle riders packing convoy"
        className="hero-bg-media"
        style={{ opacity: isRiders ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
        referrerPolicy="no-referrer"
        id="hero-bg-riders-media"
      />
      <img
        src={chaloyaarBg}
        alt="Sleek travel highway SUV expedition"
        className="hero-bg-media"
        style={{ opacity: !isRiders ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
        referrerPolicy="no-referrer"
        id="hero-bg-chaloyaar-media"
      />

      {/* Dynamic Overlay Gradient */}
      <div className="hero-overlay" id="hero-gradient-overlay" />

      {/* Hero Content */}
      <div className="hero-content-inner" id="hero-text-and-actions">
        {/* Dynamic Tagline */}
        <div className="hero-tagline" id="hero-brand-top-tag">
          {isRiders ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={16} /> Ride With Wild Strangers Across India
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} /> Curated Cohort Holidays & Easy Packages
            </span>
          )}
        </div>

        {/* Dynamic Title */}
        <h1 className="hero-title" id="hero-main-title">
          {isRiders ? (
            <>Ride the Adventure<br />Premium bike trips for the modern explorers.</>
          ) : (
            <>EXPLORE INDIA TOGETHER.<br />WORRY ABOUT NOTHING.</>
          )}
        </h1>

        {/* Dynamic Description */}
        <p className="hero-desc" id="hero-description-paragraph">
          {isRiders ? (
            'Befikar Bikers is a comprehensive adventure travel and community-building service. We curate end-to-end motorcycle and high-altitude trekking expeditions tailored for young adults and working professionals.'
          ) : (
            'Immersive group trips and custom vacations with flawless logistics, handpicked boutique stays, and 24/7 on-road support.'
          )}
        </p>

        {/* Custom Badges for Brand Credibility */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            color: 'var(--text-main)',
            fontSize: '13px',
            margin: '10px 0',
            flexWrap: 'wrap'
          }}
          id="hero-trust-badges"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} style={{ color: 'var(--primary-color)' }} />
            <span><strong>100% Verified</strong> Riders & Cohorts</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} style={{ color: 'var(--primary-color)' }} />
            <span><strong>24/7 Road</strong> & Medical Backup</span>
          </div>
        </div>

        {/* Dynamic CTAs */}
        <div className="hero-buttons" id="hero-ctas-action-wrap">
          <button
            className="btn btn-primary"
            onClick={handleCtaClick}
            id="hero-primary-cta"
          >
            {isRiders ? 'Join The Pack' : 'Plan My Escape'}
            <ArrowRight size={16} />
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleSecondaryScroll}
            id="hero-secondary-cta"
          >
            {isRiders ? 'Explore Routes' : 'View Holiday Sectors'}
          </button>
        </div>
      </div>
    </section>
  );
}
