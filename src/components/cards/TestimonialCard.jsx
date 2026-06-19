import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, name, rating = 5 }) {
  return (
    <div
      className="p-6 bg-white border-t border-b border-l-2 border-r-2 border-border/80 rounded-2xl shadow-card flex flex-col justify-between h-full select-none text-left transition-all duration-500 ease-in-out hover:border-l-gold hover:border-r-gold"
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-[18px] w-[18px] fill-current ${
                i < rating ? 'text-gold' : 'text-gray-light'
              }`}
            />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-[17px] text-text-muted leading-relaxed italic mb-6">
          "{quote}"
        </p>
      </div>

      {/* Client Name Only */}
      <div className="pt-4 border-t border-border mt-auto">
        <h3 className="font-extrabold text-text-dark text-sm sm:text-base leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
}
