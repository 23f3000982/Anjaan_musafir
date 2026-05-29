import React, { useState } from 'react';
import { Calendar, Compass, MapPin, Sparkles, Heart, Users } from 'lucide-react';
import { SYSTEM_DESTINATIONS, GENERAL_CATEGORIES, UPCOMING_LEISURE_TRIPS } from "../app/data";
import { BrandTheme } from '../app/types';

interface RiderDestinationsProps {
  openBookingModal: (id: string) => void;
}

export default function RiderDestinations({ openBookingModal }: RiderDestinationsProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'Extreme': return 'challenge-extreme';
      case 'Challenging': return 'challenge-extreme';
      case 'Moderate': return 'challenge-moderate';
      default: return 'challenge-easy';
    }
  };

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section-wrapper" id="destinations" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-Inner">

        {/* Rider Section Header */}
        <div className="section-header" id="riders-routes-section-header">
          <span className="section-tag" id="riders-routes-pre-title">
            <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} /> Befikar Bikers Center
          </span>
          <h2 className="section-title" id="riders-routes-h2-title">
            BEFIKAR BIKERS RIDES
          </h2>
          <p className="section-desc" id="riders-routes-p-desc">
            Professional mechanics, backup vehicles, and boutique stays are fully sorted. Pick your upcoming trail or view past memories.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="brand-tab-selectors" id="riders-tab-navigation-bar">
          <button
            className={`brand-tab-trigger ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
            id="riders-tab-btn-upcoming"
          >
            📅 Upcoming Rides
          </button>
          <button
            className={`brand-tab-trigger ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
            id="riders-tab-btn-past"
          >
            📸 Past Ride Gallery
          </button>
        </div>

        {/* Render Active Tab */}
        {activeTab === 'upcoming' ? (
          <div className="grid-cols-2" id="destinations-cards-grid">
            {SYSTEM_DESTINATIONS.map((route: Destination) => (
              <article className="card-destination" key={route.id} id={`destination-card-${route.id}`}>
                {/* Visual Media Wrapper */}
                <div className="card-media-wrapper">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="card-image"
                    referrerPolicy="no-referrer"
                    id={`destination-img-${route.id}`}
                  />
                  {/* Difficulty Level Indicator */}
                  <span className={`card-difficulty-badge ${getDifficultyClass(route.difficulty)}`} id={`badge-difficulty-${route.id}`}>
                    {route.difficulty} Difficulty
                  </span>
                  {/* Distance and Duration Ribbon overlay */}
                  <div className="card-meta-ribbon" id={`meta-ribbon-${route.id}`}>
                    <span className="flex-center" style={{ gap: '6px' }}><Compass size={13} /> {route.distance}</span>
                    <span className="flex-center" style={{ gap: '6px' }}><Calendar size={13} /> {route.duration}</span>
                  </div>
                </div>

                {/* Card Content body */}
                <div className="card-body" id={`card-inner-${route.id}`}>
                  <h3 className="card-route-title" id={`card-title-${route.id}`}>{route.title}</h3>
                  <div className="card-route-sub" id={`card-sub-${route.id}`}>
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {route.subtitle}
                  </div>
                  <p className="card-route-desc" id={`card-desc-${route.id}`}>{route.description}</p>

                  {/* Dynamic Highlights List */}
                  <ul className="category-highlights" style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '16px', margin: '14px 0 24px' }} id={`card-highlights-${route.id}`}>
                    {route.highlights.map((highlight, index) => (
                      <li className="category-highlight-item" key={index} style={{ fontSize: '13px' }}>
                        <span className="category-bullet" style={{ color: 'var(--primary-color)' }}>✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking Actions */}
                  <div className="card-footer " id={`card-foot-${route.id}`}>
                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '12px 18px', fontSize: '13px' }}
                      onClick={() => openBookingModal(route.id)}
                      id={`join-convoy-btn-${route.id}`}
                    >
                      Join Trip
                    </button>
                    <button
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '12px 18px', fontSize: '13px' }}
                      onClick={() => openBookingModal(route.id)}
                      id={`join-convoy-btn-${route.id}`}
                    >
                      Download Itinerary
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Past Expedition Memories Gallery */
          <div className="memories-grid-layout" id="past-riders-gallery-grid-block">
            {PAST_BIKE_GALLERY.map(item => (
              <article className="memory-card-wrap" key={item.id} id={`past-rider-mem-${item.id}`}>
                <div className="memory-photo-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="memory-photo"
                    referrerPolicy="no-referrer"
                  />
                  <span className="memory-participant-lbl">
                    <Users size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'baseline' }} />
                    {item.participantCount} Bikers
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
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>MEMBER MEMORY WALLET</span>
                    <button
                      className={`memory-interactive-heart ${likedItems[item.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(item.id)}
                      style={{ color: likedItems[item.id] ? 'var(--accent-color)' : 'var(--text-muted)' }}
                      id={`heart-btn-rider-${item.id}`}
                    >
                      <Heart size={15} fill={likedItems[item.id] ? 'var(--accent-color)' : 'none'} />
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
