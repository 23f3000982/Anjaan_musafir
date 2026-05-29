import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';

interface ContactState {
  name: string;
  email: string;
  phone: string;
  category: 'rider-convoy' | 'leisure-group' | 'custom-itinerary' | 'other';
  message: string;
  newsletterConsent: boolean;
}

const INITIAL_CONTACT_STATE: ContactState = {
  name: '',
  email: '',
  phone: '',
  category: 'rider-convoy',
  message: '',
  newsletterConsent: true
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactState>(INITIAL_CONTACT_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: val
    }));

    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email structure';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Please provide a descriptive message (at least 15 characters)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-wrapper contact-section" id="contact-headquarters">
      <div className="section-Inner">

        {/* Structural layout grid */}
        <div className="contact-layout-grid" id="contact-wrapper-grid">

          {/* Left Side: Information Coordinates */}
          <div className="contact-info-panel" id="contact-coordinates-left-panel">
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-tag">Direct Lines</span>
              <h2 className="section-title">ESCAPE COORD HEADQUARTERS</h2>
              <p className="section-desc">
                Have custom package questions, student budgets, or corporate requests? Contact our route coordinators.
              </p>
            </div>

            {/* Quick contact detail cards */}
            <div className="contact-info-card" id="contact-coordinate-india">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-detail-title">MAIN ADVENTURE OFFICE</div>
                <div className="contact-detail-text">Indiranagar 80ft Double Road, Bangalore, KA, India</div>
              </div>
            </div>

            <div className="contact-info-card" id="contact-coordinate-tel">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-detail-title">TEL & WHATSAPP SUPPORT</div>
                <div className="contact-detail-text">+91 80 44520 900 / +91 98450 11900</div>
              </div>
            </div>

            <div className="contact-info-card" id="contact-coordinate-email">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-detail-title">ELECTRONIC MAIL</div>
                <div className="contact-detail-text">go@befikarbikers.com</div>
              </div>
            </div>


          </div>

          {/* Right Side: High Fidelity Inquiry Form */}
          <div className="contact-form-card" id="contact-form-card-column">
            {submitted ? (
              <div className="contact-submit-sent" id="contact-message-submitted-feedback">
                <div className="success-icon-badge">
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '24px' }}>MESSAGE DETONATED!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>! Your inquiry regarding <strong>{formData.category.replace('-', ' ').toUpperCase()}</strong> has been dispatched.
                </p>

                {/* Receipt metadata box */}
                <div className="details-summary-card" style={{ marginTop: '16px' }}>
                  <div className="details-summary-title">TICKET RESOLUTION TARGETS</div>
                  <div className="details-summary-row">
                    <span className="summary-label">Route Captain assigned:</span>
                    <span className="summary-value" style={{ fontWeight: 600 }}>Siddharth Rao (Himalayan Captain)</span>
                  </div>
                  <div className="details-summary-row">
                    <span className="summary-label">Est. Response Interval:</span>
                    <span className="summary-value text-accent" style={{ fontWeight: 700 }}>24 Minutes / Call</span>
                  </div>
                  <div className="details-summary-row">
                    <span className="summary-label">Emergency E-Channel:</span>
                    <span className="summary-value">riders-desk@befikarbikers.com</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginTop: '20px' }}
                  onClick={() => { setSubmitted(false); setFormData(INITIAL_CONTACT_STATE); }}
                  id="reset-contact-btn"
                >
                  Send Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} id="contact-interaction-form">
                <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>LAUNCH AN INQUIRY</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                  Fill out the contact form below. Our custom trip coordinators respond instantly.
                </p>

                <div className="form-field">
                  <label className="form-label" htmlFor="contact-name">YOUR FULL NAME</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. Purushottam Mehta"
                  />
                  {errors.name && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.name}</span>}
                </div>

                <div className="form-group-grid">
                  <div className="form-field">
                    <label className="form-label" htmlFor="contact-email">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="name@example.com"
                    />
                    {errors.email && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.email}</span>}
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="contact-phone">WHATSAPP MOBILE</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 99887 76655"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="contact-category">INQUIRY SPECTRUM</label>
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="rider-convoy">Join Befikar Bikers Convoy (Motorcycle)</option>
                    <option value="leisure-group">Group Cohort Holiday (Strangers Trips)</option>
                    <option value="custom-itinerary">Personalized Private Escape Plan</option>
                    <option value="other">Rentals, Sponsorships & Corporate Events</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="contact-message">WHAT TRIP DETAILS ARE YOU EXAMINING?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about your desired vacation, estimated timing, previous riding background, or custom wishes. We make everything possible."
                  />
                  {errors.message && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.message}</span>}
                </div>

                <div className="form-field" style={{ margin: '8px 0 24px' }}>
                  <label className="checkbox-field" htmlFor="contact-consent">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      name="newsletterConsent"
                      checked={formData.newsletterConsent}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <span className="checkbox-label">
                      Alert me when new mountain road trips or strangers cohorts are released in Bangalore office.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', gap: '12px' }}
                  id="contact-form-submit-trigger"
                >
                  <Send size={16} /> Disseminate Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
