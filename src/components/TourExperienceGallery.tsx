import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, Sparkles, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'riders' | 'chaloyaar';
  title: string;
  tagline: string;
  location: string;
  image: string;
  widthClass: string; // grid spans
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'riders',
    title: 'The Great Himalayan S-Curves',
    tagline: 'Khardung La Pass',
    location: 'Ladakh (17,582 ft)',
    image: '/images/Rides/1.jpeg',
    widthClass: 'grid-w-6'
  },
  {
    id: 'g-2',
    category: 'chaloyaar',
    title: 'Strangers-Turned-Family Bonfire',
    tagline: 'Starlit Acoustic Gathering',
    location: 'Kasol Desert-Camps, HP',
    image: '/images/Rides/2.jpg',
    widthClass: 'grid-w-6'
  },
  {
    id: 'g-3',
    category: 'riders',
    title: 'River Crossings & Iron Fortitude',
    tagline: 'Kunzum Pass Trail',
    location: 'Spiti Valley Loop, HP',
    image: '/images/Rides/3.jpg',

    widthClass: 'grid-w-4'
  },
  {
    id: 'g-4',
    category: 'chaloyaar',
    title: 'Misty Coffee Plantation Ascent',
    tagline: 'Off-road Estate Escapes',
    location: 'Munnar Hills, Kerala',
    image: '/images/Anjan/1.jpg',
    widthClass: 'grid-w-4'
  },
  {
    id: 'g-5',
    category: 'riders',
    title: 'Cosmic Camping in Sand Dunes',
    tagline: 'Overnight Desert Campfire',
    location: 'Sam Sand Dunes, Rajasthan',
    image: '/images/Anjan/2.jpg',
    widthClass: 'grid-w-4'
  },
  {
    id: 'g-6',
    category: 'chaloyaar',
    title: 'Romantic Starlit Dinner',
    tagline: 'Atmospheric Honeymoon Cabins',
    location: 'Vagamon Heights, Kerala',
    image: '/images/Anjan/3.jpg',
    widthClass: 'grid-w-8'
  },
  {
    id: 'g-7',
    category: 'chaloyaar',
    title: 'High-energy Alpine Trekking',
    tagline: 'Unleashing Student Spirits',
    location: 'Triund Peak, Himachal',
    image: '/images/Anjan/4.jpg',
    widthClass: 'grid-w-4'
  }
];

export default function TourExperienceGallery() {
  const [filter, setFilter] = useState<'all' | 'riders' | 'chaloyaar'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <section className="section-wrapper gallery-section" id="tour-gallery">
      <div className="section-Inner">
        {/* Gallery Header */}
        <div className="text-center" style={{ marginBottom: '48px' }} id="gallery-header-section">
          <span className="section-tag" id="gallery-taglines">
            <Camera size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Real-Photo Logbook
          </span>
          <h2 className="section-title" id="gallery-main-title">
            BEFIKAR & ANJAAN MUSFIR ARCHIVES
          </h2>
          <p className="section-desc" style={{ maxWidth: '650px', margin: '0 auto' }} id="gallery-subtitle-p">
            Unfiltered, cinematic snapshots captured on the road by our trip captains and cohort riders.
          </p>
        </div>

        {/* Filter Tabs Button Row */}
        <div className="gallery-filters" id="gallery-filter-triggers-row">
          <button
            className={`gallery-filter-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            id="gallery-filter-all"
          >
            All Snapshots
          </button>
          <button
            className={`gallery-filter-pill ${filter === 'riders' ? 'active' : ''}`}
            onClick={() => setFilter('riders')}
            id="gallery-filter-riders"
          >
            Riders Only
          </button>
          <button
            className={`gallery-filter-pill ${filter === 'chaloyaar' ? 'active' : ''}`}
            onClick={() => setFilter('chaloyaar')}
            id="gallery-filter-general"
          >
            Anjan Musafir Moments
          </button>
        </div>

        {/* Responsive Bento Grid */}
        <div className="gallery-grid" id="masonry-gallery-container-grid">
          {filteredItems.map(item => (
            <article
              className={`gallery-item ${item.widthClass}`}
              key={item.id}
              onClick={() => setLightboxItem(item)}
              id={`gallery-snapshot-card-${item.id}`}
              style={{ position: 'relative' }}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  referrerPolicy="no-referrer"
                  id={`gallery-snapshot-media-${item.id}`}
                />

                {/* Overlay elements */}
                {/* <div className="gallery-overlay">
                  <span className="gallery-tag">{item.tagline}</span>
                  <h3 className="gallery-title">{item.title}</h3>
                  <div className="gallery-location">
                    <MapPin size={13} style={{ color: 'var(--primary-color)' }} />
                    <span>{item.location}</span>
                  </div>
                </div> */}
              </div>
            </article>
          ))}
        </div>

        {/* Lightbox Immersive Overlay */}
        {lightboxItem && (
          <div
            className="lightbox-modal"
            onClick={() => setLightboxItem(null)}
            id="gallery-lightbox-overlay-view"
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              id="gallery-lightbox-card-elements"
            >
              {/* Close button */}
              <button
                className="btn-close-modal"
                style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', zIndex: 10 }}
                onClick={() => setLightboxItem(null)}
                id="close-lightbox-btn"
              >
                <X size={24} />
              </button>

              {/* Projected Media */}
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="lightbox-image"
                referrerPolicy="no-referrer"
                id="lightbox-expanded-img"
              />

              {/* Captions */}
              {/* <div className="lightbox-info" id="lightbox-label-meta">
                <div className="gallery-tag" style={{ fontSize: '12px' }}>{lightboxItem.tagline}</div>
                <h3 style={{ fontSize: '22px', margin: '4px 0 8px' }}>{lightboxItem.title}</h3>
                <div className="flex-center" style={{ gap: '6px', fontSize: '14px', color: 'rgba(255,255,255,0.8)', justifyContent: 'flex-start' }}>
                  <MapPin size={14} style={{ color: 'var(--primary-color)' }} />
                  <span>{lightboxItem.location}</span>
                </div>
              </div> */}
            </div>
          </div>
        )}</div>
    </section>
  );
}
