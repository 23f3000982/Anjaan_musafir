import React, { useState } from 'react';
import { Menu, X, Bike, Compass } from 'lucide-react';
import Image from 'next/image';
import type { BrandTheme } from '@/app/types';


interface NavbarProps {
  activeTheme: BrandTheme;
  setActiveTheme: React.Dispatch<React.SetStateAction<BrandTheme>>;
  openBookingModal: (id: string) => void;
}

export default function Navbar({ activeTheme, setActiveTheme, openBookingModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  void setActiveTheme;
  void openBookingModal;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = (selector: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="site-header" id="site-header-nav">
        <div className="header-content">
          {/* Brand Logo */}
          <div className="logo-wrap" id="brand-logo-container">
            <div className="logo-graphic" id="logo-graphic-visual">
              <Image src="/logo.jpeg" alt="Logo" width={22} height={22} />
            </div>

          </div>

          {/* Nav Links Desktop */}
          <nav className="nav-links" id="desktop-routing-nav">
            <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}>Home</a>
            <a href="#chaloyaar-explore" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#chaloyaar-explore'); }}>Trips</a>
            <a href="#tour-gallery" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#tour-gallery'); }}>Gallery</a>
            <a href="#contact-headquarters" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact-headquarters'); }}>Contact Us</a>

          </nav>

          {/* Brand Flip Toggle Switch */}
          <div className="hello" style={{ gap: '16px' }}>
            <div className="btn-brand-toggle" id="brand-theme-flip-control">
              <a href="https://befikarbikers.com" target="_blank" rel="noopener noreferrer">
                <button
                  className={`toggle-option ${activeTheme === 'riders' ? 'active' : ''}`}

                  title="Swith to Riders Theme"
                  id="toggle-theme-riders-btn"
                >
                  <Bike size={14} />
                  <span>Befikar Bikers</span>
                </button></a>
              <a href="https://anjaanmusafir.com" target="_blank" rel="noopener noreferrer">
                <button
                  className={`toggle-option ${activeTheme === 'chaloyaar' ? 'active' : ''}`}
                  title="Switch to General Tours"
                  id="toggle-theme-chaloyaar-btn"
                >
                  <Compass size={14} />
                  <span>Anjan Musafir</span>
                </button></a>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button
              className="menu-drawer-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              id="mobile-drawer-trigger-btn"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header >

      {/* Backdrop for Mobile Menu Drawer */}
      < div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`
        }
        onClick={toggleMobileMenu}
        id="mobile-drawer-overlay"
      />

      {/* Mobile Menu Drawer */}
      < aside className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobile-sidebar-drawer" >
        <div className="mobile-nav-header">
          <div className="logo-wrap">
            <div className="logo-graphic">
              <Image src="/logo.jpeg" alt="Logo" width={22} height={22} />
            </div>
            <span className="logo-text" style={{ fontSize: '18px' }}>
              Anjan Musafir
            </span>
          </div>
          <button
            className="btn-close-modal"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            id="mobile-drawer-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-nav-links" id="mobile-drawer-navigation-links">
          <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}>Home</a>
          <a href="#destinations" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#destinations'); }}>Trips</a>
          <a href="#tour-gallery" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#tour-gallery'); }}>Gallery</a>
          <a href="#faq-accordions" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#faq-accordions'); }}>FAQ</a>
          <a href="#contact-headquarters" className="nav-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact-headquarters'); }}>Contact</a>

        </div>
      </aside >
    </>
  );
}
