import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const reviews = testimonialsData;

  // Start auto-play cycling through the 4 dots
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimerRef.current = setInterval(() => {
      if (scrollContainerRef.current && !isDownRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;

        const nextIndex = (currentIndex + 1) % 4; // Cycles through 0, 1, 2, 3
        const targetScrollLeft = (nextIndex / 3) * maxScroll;

        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(nextIndex);
      }
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  // Synchronize the dots when the user manually scrolls/swipes natively
  const handleScroll = () => {
    if (scrollContainerRef.current && !isDownRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const calculatedIndex = Math.round((container.scrollLeft / maxScroll) * 3);
      const clampedIndex = Math.max(0, Math.min(calculatedIndex, 3));
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    }
  };

  // Scroll to a specific slide manually
  const scrollToSlide = (index) => {
    stopAutoPlay();
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        const targetScrollLeft = (index / 3) * maxScroll;
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
    setTimeout(startAutoPlay, 1500);
  };

  // Drag handlers for mouse support
  const handleMouseDown = (e) => {
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    if (isDownRef.current) {
      isDownRef.current = false;
      setIsDragging(false);
      snapToClosest();
    }
    startAutoPlay();
  };

  const handleMouseUp = () => {
    if (isDownRef.current) {
      isDownRef.current = false;
      setIsDragging(false);
      snapToClosest();
    }
    startAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const snapToClosest = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const calculatedIndex = Math.round((container.scrollLeft / maxScroll) * 3);
      const clampedIndex = Math.max(0, Math.min(calculatedIndex, 3));
      
      const targetScrollLeft = (clampedIndex / 3) * maxScroll;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(clampedIndex);
    }
  };

  return (
    <section className="bg-bg-page py-10 md:py-14 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <SectionHeader
          eyebrow={
            <span className="flex items-center gap-1.5 justify-start">
              <Sparkles className="h-4 w-4 fill-gold/10 text-gold animate-pulse" />
              Client Stories
            </span>
          }
          eyebrowSize="text-sm"
          title="Trusted by happy Clients, Proven by Results"
          align="left"
          className="max-w-none"
          titleClassName="md:whitespace-nowrap"
        />

        {/* Horizontal scroll container with drag listeners */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={stopAutoPlay}
          onTouchEnd={startAutoPlay}
          className={`flex gap-6 overflow-x-auto pb-4 mt-8 select-none ${
            isDragging ? 'cursor-grabbing' : 'snap-x snap-mandatory cursor-grab scroll-smooth'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] pointer-events-none"
            >
              {/* Added pointer-events-auto inside card so click on links inside still works if needed */}
              <div className="pointer-events-auto h-full">
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  rating={5}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Exactly 4 Dot Indicators */}
        <div className="flex justify-center items-center gap-1.5 mt-3">
          {Array.from({ length: 4 }).map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className="relative flex items-center justify-center w-5 h-5 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Gold outer outline circle with scale transition animation */}
                <div
                  className={`absolute w-4 h-4 rounded-full border border-gold transition-all duration-300 ease-out ${
                    isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
                  }`}
                />
                {/* Center dot */}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive ? 'w-1.5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gold/45'
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
