import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary to-[#163c1e] text-white overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <polygon points="0,0 100,0 100,20 0,80" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 font-display text-white">
          Ready to Get Your Business Compliant?
        </h2>
        
        <p className="text-base md:text-lg text-primary-light max-w-xl mb-8 opacity-90">
          Connect with our professional CA, CS, and Legal advocates today. Your first consultation is completely free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            label="Consult Now"
            variant="gold"
            size="lg"
            href="/contact"
            icon={Calendar}
            className="w-full sm:w-auto"
          />
          <Button
            label="Call: 76000 49383"
            variant="outline"
            size="lg"
            href="tel:7600049383"
            icon={Phone}
            className="w-full sm:w-auto !text-white !border-white hover:!bg-white/10"
          />
        </div>
      </div>
    </section>
  );
}
