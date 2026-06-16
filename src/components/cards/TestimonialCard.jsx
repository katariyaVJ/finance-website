import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, name, city, business, rating = 5 }) {
  return (
    <div className="p-6 bg-white border-l-4 border-l-primary border border-border rounded-r-lg shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-1 mb-4 text-[#C9960C]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 fill-current ${
                i < rating ? 'text-gold' : 'text-gray-light'
              }`}
            />
          ))}
        </div>
        
        <p className="text-text-muted italic text-sm md:text-base leading-relaxed mb-6">
          "{quote}"
        </p>
      </div>

      <div>
        <h4 className="font-bold text-text-dark text-sm md:text-base">
          {name}
        </h4>
        <p className="text-xs text-text-muted">
          {business} · <span className="text-primary font-medium">{city}</span>
        </p>
      </div>
    </div>
  );
}
