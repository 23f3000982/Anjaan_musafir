import React from 'react';
import { Target, Smile, Map, ShieldAlert, Sparkles, Star } from 'lucide-react';

export default function TrustStats() {
  return (
    <section className="section-wrapper" id="statistics" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="section-Inner">


        {/* Testimonials and Stats header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-tag">COHORTS BY THE NUMBERS</span>
          <h2 className="section-title">PROVEN ADVENTURE TRACK RECORD</h2>
          <p className="section-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Over years of map-making, we have traversed India’s most unforgiving routes. We focus on extreme safety support so you can focus entirely on throttle and landscape.
          </p>
        </div>

        {/* Grid numbers */}
        <div className="stats-banner" id="stats-banner">
          <div className="stat-item" id="stat-item-kms">
            <div className="stat-number">45,00+</div>
            <div className="stat-label">KMS RIDE COVERED</div>
          </div>
          <div className="stat-item" id="stat-item-trips">
            <div className="stat-number">20+</div>
            <div className="stat-label">COHORTS COMPLETED</div>
          </div>
          <div className="stat-item" id="stat-item-completion">
            <div className="stat-number">100%</div>
            <div className="stat-label">SAFETY RATE RECORD</div>
          </div>
          <div className="stat-item" id="stat-item-members">
            <div className="stat-number">100+</div>
            <div className="stat-label">STRANGERS TURNED FAM</div>
          </div>
        </div>

        {/* Micro Testimonials Column */}
        <div className="grid-cols-3" style={{ marginTop: '64px' }} id="testimonials-grid">
          <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', color: '#fca311', gap: '4px' }}>
              <Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" />
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--text-muted)' }}>
              "I joined the Leh Ladakh voyage alone and nervous. On Day 2, our backup car fixed a flat in 5 minutes! The camaraderie was unreal. "
            </p>
            <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text-main)' }}>— Siddharth Rao, Bangalore </strong>
          </div>

          <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', color: '#fca311', gap: '4px' }}>
              <Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" />
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--text-muted)' }}>
              "The safety protocols were impeccable. From regular check-ins to the support vehicle, I felt secure throughout the Spiti Loop. The team’s attention to detail is unmatched."
            </p>
            <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text-main)' }}>— Prashant</strong>
          </div>

          <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', color: '#fca311', gap: '4px' }}>
              <Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" /><Star size={14} fill="#fca311" />
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '13px', color: 'var(--text-muted)' }}>
              "As a first-time rider, I was anxious about the Leh Ladakh trip. But the safety measures and support were top-notch. The team made sure I felt secure every step of the way."
            </p>
            <strong style={{ fontSize: '13px', display: 'block', color: 'var(--text-main)' }}>—  Director, Algobright</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
