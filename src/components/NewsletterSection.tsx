import React, { useState } from 'react';
import { Mail, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['motorcycle-rallies']);
  const [error, setError] = useState('');

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address');
    } else {
      setError('');
      setSubscribed(true);
    }
  };

  return (
    <section className="section-wrapper newsletter-section" id="newsletter-subscription">
      <div className="section-Inner">

        <div className="newsletter-glass-container" id="newsletter-backdrop-glass">

          {/* Left column titles */}
          <div id="newsletter-promo-messages">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', marginBottom: '12px' }}>
              <Sparkles size={16} />
              <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>
                Elite Alert Squad
              </span>
            </div>
            <h2 style={{ fontSize: '28px', lineHeight: '1.2', marginBottom: '16px' }} id="newsletter-main-h2">
              NEVER MISS AN EXCLUSIVE COHORT DEPARTURE!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
              Our trips fill up very quickly. Get early-alert notifications regarding new convoy departures and custom group cohorts.
            </p>
          </div>

          {/* Right column Form */}
          <div id="newsletter-action-form">
            {subscribed ? (
              <div className="contact-submit-sent" style={{ padding: '20px 0' }} id="newsletter-success-feedback">
                <div className="success-icon-badge" style={{ width: '60px', height: '60px', fontSize: '24px' }}>
                  <CheckCircle2 size={30} />
                </div>
                <h4 style={{ fontSize: '20px' }}>VIP ALERTS SECURED</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                  Priority alert coordinates established for <strong>{email}</strong>! We’ve logged your desired segments. Prepare your gear.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    justifyContent: 'center',
                    marginTop: '10px'
                  }}
                >
                  {selectedInterests.map(interest => (
                    <span
                      key={interest}
                      style={{
                        fontSize: '11px',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        padding: '4px 10px',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        color: 'var(--primary-color)'
                      }}
                    >
                      ✦ {interest.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Form Input block */}
                <div className="news-inline-form" id="newsletter-inline-input-wrap">
                  <input
                    type="email"
                    placeholder="e.g. purushottam@befikarbikers.com"
                    className="news-input"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }}
                    required
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '13px' }} id="newsletter-subscribe-submit">
                    <Send size={14} /> Subscribe
                  </button>
                </div>
                {error && <span style={{ color: 'var(--accent-color)', fontSize: '11px' }}>{error}</span>}

                {/* Segment Toggle Filters */}
                <div id="newsletter-preferences-grid">
                  <span className="form-label" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', display: 'block' }}>
                    CHOOSE YOUR SQUAD PREFERENCES:
                  </span>
                  <div className="news-interests-pills">
                    <button
                      type="button"
                      className={`news-pill-btn ${selectedInterests.includes('motorcycle-rallies') ? 'selected' : ''}`}
                      onClick={() => toggleInterest('motorcycle-rallies')}
                    >
                      🏍️ Motorcycle Rallies
                    </button>
                    <button
                      type="button"
                      className={`news-pill-btn ${selectedInterests.includes('strangers-cohorts') ? 'selected' : ''}`}
                      onClick={() => toggleInterest('strangers-cohorts')}
                    >
                      👥 Strangers Cohorts
                    </button>
                    <button
                      type="button"
                      className={`news-pill-btn ${selectedInterests.includes('luxury-getaways') ? 'selected' : ''}`}
                      onClick={() => toggleInterest('luxury-getaways')}
                    >
                      🏡 Luxury Getaways
                    </button>
                    <button
                      type="button"
                      className={`news-pill-btn ${selectedInterests.includes('budget-trips') ? 'selected' : ''}`}
                      onClick={() => toggleInterest('budget-trips')}
                    >
                      🎒 Student Badshahs
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
