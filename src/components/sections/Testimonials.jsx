import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Dynamic visible cards based on screen size (3 on desktop, 1 on mobile/tablet)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonialsData.length - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <SectionHeader
          eyebrow="Client Stories"
          title="Trusted by Businesses Across India"
          subtitle="Read what promoters and small business owners in Surat, Ahmedabad, and Vadodara say about working with us."
          align="center"
        />

        {/* Slider Window Container */}
        <div className="relative mt-8 max-w-6xl mx-auto px-2 md:px-8">
          
          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white shadow-md text-text-dark transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white hover:bg-primary hover:text-white shadow-md text-text-dark transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Slider Viewport */}
          <div className="overflow-hidden w-full px-8 md:px-10">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  handleNext();
                } else if (info.offset.x > 50) {
                  handlePrev();
                }
              }}
              animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {testimonialsData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-bg-page/40 hover:bg-bg-page/70 rounded-2xl p-6 h-full flex flex-col justify-between text-left transition-all duration-300 select-none">
                    <div>
                      {/* Gold Star rating */}
                      <div className="flex items-center space-x-1 mb-4 text-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current text-gold"
                          />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-sm text-text-muted leading-relaxed italic mb-6">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Details Profile */}
                    <div className="flex items-center space-x-3 pt-4 mt-auto">
                      <div className="h-10 w-10 rounded-full bg-primary-light/80 text-primary flex items-center justify-center font-extrabold text-xs flex-shrink-0">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-text-dark text-xs sm:text-sm leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-text-muted truncate mt-0.5">
                          {item.business} · <span className="text-primary font-bold">{item.city}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
