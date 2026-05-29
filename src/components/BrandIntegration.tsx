import React, { useState } from 'react';
import { Users, Compass, Home, Heart, GraduationCap, Briefcase, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { SYSTEM_DESTINATIONS, GENERAL_CATEGORIES, UPCOMING_LEISURE_TRIPS } from "../app/data";
import { BrandTheme } from '../app/types';

interface BrandIntegrationProps {
  openBookingModal: (id: string) => void;
}

export default function BrandIntegration({ openBookingModal }: BrandIntegrationProps) {
  const [activeTab, setActiveTab] = useState<'styles' | 'upcoming' | 'past'>('styles');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  // Dynamic Lucide icon resolution
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={24} />;
      case 'Compass': return <Compass size={24} />;
      case 'Home': return <Home size={24} />;
      case 'Heart': return <Heart size={24} />;
      case 'GraduationCap': return <GraduationCap size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      default: return <Award size={24} />;
    }
  };

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section-wrapper" id="chaloyaar-explore" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-Inner">

        {/* General Section Header */}
        <div className="section-header" id="chaloyaar-section-header">
          <span className="section-tag" id="chaloyaar-pre-title">ANJAN MUSAFIR ESCAPES</span>
          <h2 className="section-title" id="chaloyaar-h2-title">
            HOLIDAYS IN INDIA FOR EVERY TRAVEL STYLE
          </h2>
          <p className="section-desc" id="chaloyaar-p-desc">
            Curated group trips and custom vacations mapped specifically to your preferred travel style. Browse options below.
          </p>
        </div>

        {/* Tab Selector Nav bar */}
        <div className="brand-tab-selectors" id="leisure-tab-navigation-bar">
          <button
            className={`brand-tab-trigger ${activeTab === 'styles' ? 'active' : ''}`}
            onClick={() => setActiveTab('styles')}
            id="leisure-tab-btn-styles"
          >
            🌟 Vacation Styles
          </button>
          <button
            className={`brand-tab-trigger ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
            id="leisure-tab-btn-upcoming"
          >
            📅 Upcoming Cohorts
          </button>
          <button
            className={`brand-tab-trigger ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
            id="leisure-tab-btn-past"
          >
            📸 Past Cohort Gallery
          </button>
        </div>

        {/* TAB 1: VACATION STYLES */}
        {activeTab === 'styles' && (
          <div className="grid-categories" id="chaloyaar-categories-grid">
            {GENERAL_CATEGORIES.map((cat: TravelCategory) => (
              <article className="card-category" key={cat.id} id={`category-card-${cat.id}`}>
                {/* Header section */}
                <div className="flex-row-between" style={{ alignItems: 'flex-start' }} id={`cat-header-wrap-${cat.id}`}>
                  <div className="category-icon-header" id={`cat-icon-container-${cat.id}`}>
                    {renderIcon(cat.iconName)}
                  </div>
                  <span className="category-tagline" id={`cat-tagline-${cat.id}`}>{cat.tagline}</span>
                </div>

                {/* Core textuals */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="category-title" id={`cat-title-${cat.id}`}>{cat.title}</h3>
                  <p className="category-desc" id={`cat-desc-${cat.id}`}>{cat.description}</p>
                </div>

                {/* Key highlights bullet point */}
                <ul className="category-highlights" id={`cat-highlights-${cat.id}`}>
                  {cat.features.map((feature, idx) => (
                    <li className="category-highlight-item" key={idx}>
                      <span className="category-bullet" style={{ color: 'var(--primary-color)', fontSize: '10px' }}>⭐</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro Call to Action button */}
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <button
                    className="btn btn-secondary"
                    style={{ width: '100%', padding: '10px 18px', fontSize: '11px', textTransform: 'uppercase' }}
                    onClick={() => openBookingModal(`category-${cat.id}`)}
                    id={`cat-cta-btn-${cat.id}`}
                  >
                    Inquire & Customize
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* TAB 2: UPCOMING SCHEDULED LEISURE COHORTS */}
        {activeTab === 'upcoming' && (
          <div className="grid-cols-2" id="leisure-upcoming-trips-grid">
            {UPCOMING_LEISURE_TRIPS.map(trip => (
              <article className="card-destination" key={trip.id} id={`leisure-trip-card-${trip.id}`}>
                <div className="card-media-wrapper">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="card-image"
                    referrerPolicy="no-referrer"
                  />
                  <span className="card-difficulty-badge challenge-easy" style={{ borderColor: 'var(--primary-color)', color: '#fff', backgroundColor: 'var(--primary-color)' }}>
                    🔥 Only {trip.slotsLeft} Slots Left
                  </span>
                  <div className="card-meta-ribbon">
                    <span className="flex-center" style={{ gap: '6px' }}><Calendar size={13} /> {trip.duration}</span>
                    <span className="flex-center" style={{ gap: '6px' }}>₹{trip.price.toLocaleString('en-IN')} All-inclusive</span>
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="card-route-title">{trip.title}</h3>
                  <div className="card-route-sub">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {trip.subtitle}
                  </div>
                  <p className="card-route-desc">{trip.description}</p>

                  {/* Date stamp banner */}
                  <div style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '10px 14px', marginBottom: '16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={14} style={{ color: 'var(--primary-color)' }} />
                    <strong>Departs:</strong> {trip.date}
                  </div>

                  <ul className="category-highlights" style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '16px', marginBottom: '20px' }}>
                    {trip.highlights.map((item, idx) => (
                      <li className="category-highlight-item" key={idx} style={{ fontSize: '13px' }}>
                        <span className="category-bullet" style={{ color: 'var(--primary-color)' }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px 18px', fontSize: '13px' }}
                    onClick={() => openBookingModal(trip.id)}
                    id={`book-leisure-btn-${trip.id}`}
                  >
                    Reserve Cohort Seat
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* TAB 3: PAST COHORT GALLERY MEMORIES */}
        {activeTab === 'past' && (
          <div className="memories-grid-layout" id="past-leisure-gallery-grid-block">
            {PAST_LEISURE_GALLERY.map(item => (
              <article className="memory-card-wrap" key={item.id} id={`past-leisure-mem-${item.id}`}>
                <div className="memory-photo-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="memory-photo"
                    referrerPolicy="no-referrer"
                  />
                  <span className="memory-participant-lbl" style={{ backgroundColor: 'var(--primary-color-dim)', borderColor: 'var(--primary-color)' }}>
                    <Users size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'baseline' }} />
                    {item.participantCount} Travelers
                  </span>
                </div>
                <div className="memory-card-body">
                  <h3 className="memory-card-title">{item.title}</h3>
                  <div className="memory-card-location">
                    <MapPin size={11} style={{ display: 'inline', marginRight: '3px', verticalAlign: 'text-top' }} />
                    {item.location}
                  </div>
                  <p className="memory-card-quote">"{item.memoryNote}"</p>

                  <div className="memory-card-footer">
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>MUSE ARCHIVE</span>
                    <button
                      className={`memory-interactive-heart ${likedItems[item.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(item.id)}
                      style={{ color: likedItems[item.id] ? '#e63946' : 'var(--text-muted)' }}
                      id={`heart-btn-leisure-${item.id}`}
                    >
                      <Heart size={15} fill={likedItems[item.id] ? '#e63946' : 'none'} />
                      <span className="memory-heart-count">
                        {item.heartCount + (likedItems[item.id] ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
