import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Is traveling in a cohort of strangers safe (especially for solo female travelers)?",
    answer: "Absolutely! Safety is our foundational anchor. Every traveler undergoes basic ID verification. Our trips have certified, friendly cohort masters onboard. Safe spacing, separate high-end camp/hotel allocations, and zero-tolerance policies on misconduct ensure a thoroughly liberating, protective family environment on the road."
  },
  {
    question: "What happens if my motorcycle breaks down or gets a puncture?",
    answer: "No rider gets left behind! Every Befikar Bikers convoy travels alongside a support utility car fully loaded with group professional mechanics, essential spare parts, extra engine oils, dry fuel, and flat puncture kits. We also transport a spare backup motorcycle in the carrier to ensure you continue throttle immediately while we restore yours!"
  },
  {
    question: "Can I join if I don't own an adventure motorcycle?",
    answer: "Yes, you can! We arrange premium dual-sport rentals (such as Royal Enfield Himalayans and Scrams) in perfect, certified mechanical conditions from our verified local hubs in Delhi, Leh, Manali, and Kochi. Optional riding gear packages (helmets, protective guards, jackets) are also provided during booking."
  },
  {
    question: "What medical back-up do you operate in high altitudinal passes?",
    answer: "Our medical backup cars accompanying the convoy carry complete portable oxygen cylinders, specialized first-aid setups, and trained rescue responders. In case of Acute Mountain Sickness (AMS), we immediately safely altitude-descend the rider and coordinate prompt local healthcare egress."
  },
  {
    question: "How are the holiday packages customized under Anjan Musafir?",
    answer: "While Befikar Bikers has fixed convoy departure dates, general Anjan Musafir packages offer unlimited flexibility. Just select the 'Personalized' or 'Couple' card and indicate your desired region, preferred dates, vehicle configurations, and budget - our remote tour concierge handles 100% of the rest."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper faq-section" id="faq-accordions">
      {/* FAQ Header */}
      <div className="text-center" style={{ marginBottom: '48px' }} id="faq-header-container">
        <span className="section-tag" id="faq-tag">
          <HelpCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Common Doubts Resolved
        </span>
        <h2 className="section-title" id="faq-heading-text">
          CONVOY & COHORT INTEL
        </h2>
        <p className="section-desc" style={{ maxWidth: '650px', margin: '0 auto' }} id="faq-p-descriptor">
          Answers to your most common questions about safety, support, and custom itineraries on the road.
        </p>
      </div>

      {/* Accordion list */}
      <div className="faq-layout" id="faq-accordion-tiles-list">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = expandedIndex === idx;
          return (
            <article 
              className={`faq-card ${isOpen ? 'open' : ''}`} 
              key={idx}
              id={`faq-accordion-card-${idx}`}
            >
              <button
                className="faq-trigger"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                id={`faq-trigger-btn-${idx}`}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon-chevron" size={18} />
              </button>

              <div 
                className="faq-answer-block"
                style={{ maxHeight: isOpen ? '400px' : '0' }}
                id={`faq-answer-block-${idx}`}
              >
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
