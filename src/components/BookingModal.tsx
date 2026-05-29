import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ChevronRight, ChevronLeft, Calendar, ShieldCheck, Bike, Flame } from 'lucide-react';
import { SYSTEM_DESTINATIONS, GENERAL_CATEGORIES, UPCOMING_LEISURE_TRIPS } from '../data';
import { BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedId: string;
}

const INITIAL_FORM_STATE: BookingState = {
  destinationId: '',
  name: '',
  email: '',
  phone: '',
  experienceLevel: 'Intermediate',
  licenseNumber: '',
  emergencyName: '',
  emergencyPhone: '',
  ownBike: true,
  bikeModel: '',
  termsAccepted: false,
};

export default function BookingModal({ isOpen, onClose, preselectedId }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingState>(INITIAL_FORM_STATE);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset or pre-populate whenever modal is toggled
  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...INITIAL_FORM_STATE,
        destinationId: preselectedId || SYSTEM_DESTINATIONS[0]?.id || '',
      });
      setCurrentStep(1);
      setFormSubmitted(false);
      setErrors({});
    }
  }, [isOpen, preselectedId]);

  if (!isOpen) return null;

  // Selected Option titles for summary views
  const selectedRouteObj = SYSTEM_DESTINATIONS.find(d => d.id === formData.destinationId);
  const selectedLeisureObj = UPCOMING_LEISURE_TRIPS.find(t => t.id === formData.destinationId);
  const selectedCategoryObj = GENERAL_CATEGORIES.find(c => `category-${c.id}` === formData.destinationId);
  const currentSelectionLabel = selectedRouteObj 
    ? selectedRouteObj.title 
    : (selectedLeisureObj 
      ? selectedLeisureObj.title 
      : (selectedCategoryObj ? `${selectedCategoryObj.title} Holiday` : 'Custom India Tour'));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSelectExperience = (level: 'Beginner' | 'Intermediate' | 'Expert' | 'Pro-Rider') => {
    setFormData(prev => ({ ...prev, experienceLevel: level }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Rider name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Contact number is required';
      } else if (formData.phone.length < 8) {
        newErrors.phone = 'Please provide a valid phone number';
      }
    } else if (step === 2) {
      // Bike credentials
      const isBikePref = SYSTEM_DESTINATIONS.some(d => d.id === formData.destinationId); // Bike trip
      if (isBikePref) {
        if (!formData.licenseNumber.trim()) {
          newErrors.licenseNumber = 'Valid Indian Driving License is required for bike tracks';
        }
        if (formData.ownBike && !formData.bikeModel.trim()) {
          newErrors.bikeModel = 'Please specify your motorcycle model';
        }
      }
    } else if (step === 3) {
      if (!formData.emergencyName.trim()) newErrors.emergencyName = 'Emergency contact name is required';
      if (!formData.emergencyPhone.trim()) {
        newErrors.emergencyPhone = 'Emergency contact telephone is required';
      }
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'You must accept the safety rules and disclaimer terms';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} id="booking-modal-overlay">
      <div className="booking-modal-content" id="booking-modal-content-card">
        {/* Modal Header */}
        <div className="booking-modal-header" id="booking-modal-header-section">
          <h2 className="booking-modal-title" id="booking-modal-header-text">
            {formSubmitted ? 'Reserving Your Spot' : 'COHORT RESERVATION PORTAL'}
          </h2>
          <button className="btn-close-modal" onClick={onClose} aria-label="Close modal" id="booking-modal-close-trigger">
            <X size={20} />
          </button>
        </div>

        {/* Steps navigation bar */}
        {!formSubmitted && (
          <div className="booking-steps-nav" id="booking-modal-progress-navbar">
            <div className={`step-indicator ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`} id="step-indicator-item-1">
              <div className="step-bar" />
              <div className="step-info-lbl">1. Contact</div>
            </div>
            <div className={`step-indicator ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`} id="step-indicator-item-2">
              <div className="step-bar" />
              <div className="step-info-lbl">2. Rider Skill</div>
            </div>
            <div className={`step-indicator ${currentStep === 3 ? 'active' : ''}`} id="step-indicator-item-3">
              <div className="step-bar" />
              <div className="step-info-lbl">3. Safety Waiver</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }} id="booking-convoy-form">
          <div className="booking-form-body" id="booking-form-scroller">
            
            {/* Success screen */}
            {formSubmitted ? (
              <div className="booking-success-wrap" id="reservation-success-pane">
                <div className="success-icon-badge" id="success-visual-shield">
                  <Flame size={44} />
                </div>
                <h3 style={{ fontSize: '24px' }}>CONVOY TICKET GENERATED!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '500px' }}>
                  Acoustic campfire tunes await you, <strong>{formData.name}</strong>! Your tentative convoy ticket to <strong>{currentSelectionLabel}</strong> has been secured in our server dashboard.
                </p>

                {/* Reservation Summary Slip receipt */}
                <div className="details-summary-card" id="success-details-summary-card">
                  <div className="details-summary-title">RIDER RESERVATION RECEIPT</div>
                  
                  <div className="details-summary-row">
                    <span className="summary-label">Convoy Selection</span>
                    <span className="summary-value" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>{currentSelectionLabel}</span>
                  </div>

                  <div className="details-summary-row">
                    <span className="summary-label font-mono">CONFIRMATION ID</span>
                    <span className="summary-value font-mono text-accent" style={{ fontWeight: 600 }}>CY-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>

                  <div className="details-summary-row">
                    <span className="summary-label">Rider Registered</span>
                    <span className="summary-value">{formData.name} ({formData.email})</span>
                  </div>

                  <div className="details-summary-row">
                    <span className="summary-label">Rider Experience</span>
                    <span className="summary-value">{formData.experienceLevel} Level</span>
                  </div>

                  {formData.licenseNumber && (
                    <div className="details-summary-row">
                      <span className="summary-label">Driving License</span>
                      <span className="summary-value">{formData.licenseNumber}</span>
                    </div>
                  )}

                  <div className="details-summary-row">
                    <span className="summary-label">Emergency Line</span>
                    <span className="summary-value">{formData.emergencyName} ({formData.emergencyPhone})</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                  <button type="button" className="btn btn-primary" onClick={onClose} id="success-done-btn">
                    Awesome, Let’s Prep My Gear
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <div id="booking-form-step-1-elements">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                      Whether taking a fully customized SUV holiday or an elite motorcycle convoy with wild strangers, help us map your coordinates correctly.
                    </p>

                    <div className="form-field">
                      <label className="form-label" htmlFor="destinationId">SELECT TOUR OR ROUTE</label>
                      <select
                        id="destinationId"
                        name="destinationId"
                        value={formData.destinationId}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <optgroup label="✨ Befikar Bikers Expeditions">
                          {SYSTEM_DESTINATIONS.map(d => (
                            <option key={d.id} value={d.id}>{d.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="🌟 Anjan Musafir Upcoming Escapes">
                          {UPCOMING_LEISURE_TRIPS.map(t => (
                            <option key={t.id} value={t.id}>{t.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="💼 Anjan Musafir Vacation Styles">
                          {GENERAL_CATEGORIES.map(c => (
                            <option key={c.id} value={`category-${c.id}`}>{c.title} Services</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="name">YOUR FULL NAME</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. Purushottam Mehta"
                        required
                      />
                      {errors.name && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.name}</span>}
                    </div>

                    <div className="form-group-grid">
                      <div className="form-field">
                        <label className="form-label" htmlFor="email">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="e.g. name@example.com"
                          required
                        />
                        {errors.email && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.email}</span>}
                      </div>

                      <div className="form-field">
                        <label className="form-label" htmlFor="phone">MOBILE PHONE (WHATSAPP)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="e.g. +91 98765 43210"
                          required
                        />
                        {errors.phone && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.phone}</span>}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <div id="booking-form-step-2-elements">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                      Let’s understand your touring capabilities. Safety in numbers is great, but safety in riding rules supreme.
                    </p>

                    <div className="form-field">
                      <label className="form-label">YOUR RIDING EXPERIENCE LEVEL</label>
                      <div className="experience-grid" id="rider-experience-custom-radio-grid">
                        <div 
                          className={`experience-option ${formData.experienceLevel === 'Beginner' ? 'selected' : ''}`}
                          onClick={() => handleSelectExperience('Beginner')}
                        >
                          <span className="experience-title">Beginner</span>
                          <span className="experience-desc">Limited highway miles. Prefer light trail speeds around 40-60 km/h.</span>
                        </div>
                        <div 
                          className={`experience-option ${formData.experienceLevel === 'Intermediate' ? 'selected' : ''}`}
                          onClick={() => handleSelectExperience('Intermediate')}
                        >
                          <span className="experience-title">Intermediate</span>
                          <span className="experience-desc">Cruised 3,000+ km. Comfortable with twisty mountains & water levels.</span>
                        </div>
                        <div 
                          className={`experience-option ${formData.experienceLevel === 'Expert' ? 'selected' : ''}`}
                          onClick={() => handleSelectExperience('Expert')}
                        >
                          <span className="experience-title">Expert Pack</span>
                          <span className="experience-desc">Can handle mud-slides, rain, and steep altitude hairpin loops without sweating.</span>
                        </div>
                        <div 
                          className={`experience-option ${formData.experienceLevel === 'Pro-Rider' ? 'selected' : ''}`}
                          onClick={() => handleSelectExperience('Pro-Rider')}
                        >
                          <span className="experience-title">Pro Convoy Captain</span>
                          <span className="experience-desc">Rode Ladakh/Spiti already. Capable of supporting other convoy buddies.</span>
                        </div>
                      </div>
                    </div>

                    {SYSTEM_DESTINATIONS.some(d => d.id === formData.destinationId) ? (
                      /* Show license fields only for bike tracks */
                      <div id="motorcycle-specific-fields">
                        <div className="form-field">
                          <label className="form-label" htmlFor="licenseNumber">RIDER'S DRIVING LICENSE NUMBER</label>
                          <input
                            type="text"
                            id="licenseNumber"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="e.g. DL-142018000456"
                            required
                          />
                          {errors.licenseNumber && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.licenseNumber}</span>}
                        </div>

                        {/* Motor Bike ownership choice */}
                        <div className="form-field" style={{ marginTop: '16px' }}>
                          <label className="checkbox-field" htmlFor="ownBike">
                            <input
                              type="checkbox"
                              id="ownBike"
                              name="ownBike"
                              checked={formData.ownBike}
                              onChange={handleInputChange}
                              className="checkbox-input"
                            />
                            <span className="checkbox-label" style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                              I am riding my own motorcycle.
                            </span>
                          </label>
                        </div>

                        {formData.ownBike ? (
                          <div className="form-field" style={{ paddingLeft: '30px' }} id="bike-model-input-wrap">
                            <label className="form-label" htmlFor="bikeModel">BIKE MAKE & MODEL</label>
                            <input
                              type="text"
                              id="bikeModel"
                              name="bikeModel"
                              value={formData.bikeModel}
                              onChange={handleInputChange}
                              className="form-input"
                              placeholder="e.g. Royal Enfield Himalayan 450 / Duke 390"
                              required
                            />
                            {errors.bikeModel && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.bikeModel}</span>}
                          </div>
                        ) : (
                          <div style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '14px', marginLeft: '30px', color: 'var(--text-muted)', fontSize: '13px' }}>
                            🏍️ <strong>Rentals available:</strong> No worries! Befikar Bikers handles premium rentals of Royal Enfield Himalayans and Scrams at reasonable per-day rates. Our tour assistants will contact you.
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-muted)', fontSize: '13px' }}>
                        🚗 <strong>Excellent Choice:</strong> You’ve selected a general vacation category. No driving license is required. We handle professional climate-controlled luxury transport/SUVs throughout!
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <div id="booking-form-step-3-elements">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                      Safety is our absolute anchor. Our medical backup cars travel behind the caravan, but we need instant emergency contacts on file.
                    </p>

                    <div className="form-group-grid" style={{ marginBottom: '24px' }}>
                      <div className="form-field">
                        <label className="form-label" htmlFor="emergencyName">EMERGENCY CONTACT NAME</label>
                        <input
                          type="text"
                          id="emergencyName"
                          name="emergencyName"
                          value={formData.emergencyName}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="e.g. Anand Mehta (Father)"
                          required
                        />
                        {errors.emergencyName && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.emergencyName}</span>}
                      </div>

                      <div className="form-field">
                        <label className="form-label" htmlFor="emergencyPhone">EMERGENCY CONTACT PHONE</label>
                        <input
                          type="tel"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="e.g. +91 91234 56789"
                          required
                        />
                        {errors.emergencyPhone && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '4px' }}>{errors.emergencyPhone}</span>}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                      <div className="form-field">
                        <label className="checkbox-field" htmlFor="termsAccepted">
                          <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleInputChange}
                            className="checkbox-input"
                          />
                          <span className="checkbox-label">
                            I acknowledge that I am physically fit for remote mountain travel. I agree to abide by Befikar Bikers convoy speeds, zero-tolerance safety policies on road discipline, and understand that group travel involves cooperation.
                          </span>
                        </label>
                        {errors.termsAccepted && <span style={{ color: 'var(--accent-color)', fontSize: '11px', marginTop: '10px' }}>{errors.termsAccepted}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

          </div>

          {/* Modal Actions Footer */}
          {!formSubmitted && (
            <div className="booking-form-footer" id="booking-modal-action-footer">
              <div>
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={handlePrevStep}
                    id="booking-form-back-btn"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                )}
              </div>
              <div>
                {currentStep < 3 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={handleNextStep}
                    id="booking-form-next-btn"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    id="booking-form-submit-btn"
                  >
                    <ShieldCheck size={16} /> Secure Booking Place
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
