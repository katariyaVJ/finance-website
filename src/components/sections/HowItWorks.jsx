import React, { useState, useEffect, useRef } from 'react';
import { CalendarRange, FileUp, ClipboardCheck } from 'lucide-react';
import { useInView } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

export default function HowItWorks() {
  const steps = [
    {
      icon: CalendarRange,
      step: '01',
      title: 'Book Consultation',
      desc: 'Call us or submit the contact form. An expert contacts you within 24 hours to analyze your business needs.',
      highlights: ['Quick 15-min discovery call', 'Personalized compliance roadmap']
    },
    {
      icon: FileUp,
      step: '02',
      title: 'Share Documents',
      desc: 'Provide your details and upload the required documents securely via email or WhatsApp.',
      highlights: ['Encrypted secure uploads', 'WhatsApp or Email submission']
    },
    {
      icon: ClipboardCheck,
      step: '03',
      title: 'We Handle the Rest',
      desc: 'Our professionals prepare drafts, make filings, and deliver your registration or filing receipts directly.',
      highlights: ['Airtight draft validation', 'Instant receipt delivery']
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.25 });
  
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [hoveredStepIndex, setHoveredStepIndex] = useState(null);

  // Auto-play loop when in view, pause on hover
  useEffect(() => {
    if (isInView && hoveredStepIndex === null) {
      const interval = setInterval(() => {
        setActiveStepIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000); // transition every 3 seconds
      
      return () => clearInterval(interval);
    }
  }, [isInView, hoveredStepIndex]);

  const handleMouseEnter = (index) => {
    setHoveredStepIndex(index);
    setActiveStepIndex(index); // resume from hovered step on mouse leave
  };

  const handleMouseLeave = () => {
    setHoveredStepIndex(null);
  };

  const currentActiveIdx = hoveredStepIndex !== null ? hoveredStepIndex : activeStepIndex;
  const progressPercent = (currentActiveIdx / 2) * 100;
  const isProgressActive = isInView;

  return (
    <section ref={containerRef} className="bg-white py-[50px] border-y border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Process"
          title="Get Compliant in 3 Simple Steps"
          subtitle="Our digital workflow makes business compliance and tax filings completely hassle-free."
          align="left"
        />

        {/* Relative container to wrap the grid and progress bar */}
        <div className="relative mt-28">
          {/* Unique Progress Bar (Desktop Only) */}
          <div className={`hidden md:block absolute top-[-56px] left-0 w-full z-20 transition-all duration-500
            ${isProgressActive ? 'opacity-100' : 'opacity-40'}`}>
            {/* The line container starts from center of first col (15%) to center of last col (85%) */}
            <div className="relative" style={{ width: '70%', left: '15%' }}>
              {/* Progress Line Track */}
              <div className="h-[6px] bg-primary/10 rounded-full relative">
                {/* Glow/Pulse effect for active path */}
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-gold transition-all duration-[1500ms] ease-in-out rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                  style={{ 
                    width: `${progressPercent}%` 
                  }} 
                />
                
                {/* Steps Nodes along the track */}
                <div className="absolute inset-0 flex justify-between items-center">
                  {steps.map((item, idx) => {
                    const isVisited = currentActiveIdx >= idx;
                    const isCurrent = currentActiveIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="relative flex flex-col items-center"
                      >
                        {/* Node Circle */}
                        <div 
                          className={`w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-10
                            ${isVisited 
                              ? 'bg-gold border-primary scale-125 shadow-[0_0_12px_rgba(212,175,55,0.7)]' 
                              : 'bg-white border-primary/20'}`}
                        >
                          {/* Inner glowing dot */}
                          {isVisited && (
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute" />
                          )}
                        </div>
                        
                        {/* Label above node to make it unique and clear it's a progress bar */}
                        <span className={`absolute top-[-26px] text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-500 font-sans text-primary opacity-100
                          ${isCurrent ? 'scale-105' : ''}`}>
                          Step {item.step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 3-Step Grid (100% Cardless) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-0">
            {steps.map((item, i) => {
              const isStepActive = currentActiveIdx === i;
              return (
                <div 
                  key={i} 
                  className={`group relative flex flex-col justify-between transition-all duration-500 transform
                    ${isStepActive ? 'scale-[1.03] -translate-y-1' : 'scale-100 translate-y-0'}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave}
                >
                  <div>
                    {/* Step Header: Giant Number */}
                    <div className="flex items-center mb-4">
                      <span className={`text-5xl lg:text-6xl font-black font-display leading-none transition-all duration-500
                        ${isStepActive ? 'text-gold opacity-100' : 'text-primary opacity-30'}`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Horizontal Divider Line (Expands on Hover or Active) */}
                    <div className={`h-[3px] mb-6 transition-all duration-500 rounded-full
                      ${isStepActive ? 'bg-gold w-full' : 'bg-primary/20 w-20'}`} 
                    />

                    {/* Title */}
                    <h3 className="text-[18px] font-bold text-text-dark font-sans leading-tight mb-2.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[16px] text-text-muted leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Sub-Highlights Bullet List */}
                  <ul className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-dashed border-primary/5">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[15.5px] text-text-muted font-sans">
                        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                          ${isStepActive ? 'bg-gold scale-125' : 'bg-primary/20'}`} 
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
