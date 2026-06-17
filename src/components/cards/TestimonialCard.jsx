import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, name, city, business, rating = 5 }) {
  // Get initials for the client avatar
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'C';

  return (
    <motion.div
      className="p-6 bg-white border border-border/80 rounded-2xl shadow-card hover:shadow-hover hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full select-none"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4.5 w-4.5 fill-current ${
                i < rating ? 'text-gold' : 'text-gray-light'
              }`}
            />
          ))}
        </div>
        
        {/* Quote Text */}
        <p className="text-[13px] md:text-sm text-text-muted leading-relaxed italic mb-6">
          "{quote}"
        </p>
      </div>

      {/* Client Profile Section */}
      <div className="flex items-center space-x-3 pt-4 border-t border-border/40 mt-auto">
        <div className="h-10 w-10 rounded-full bg-primary-light/80 text-primary flex items-center justify-center font-extrabold text-xs flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0 text-left">
          <h4 className="font-extrabold text-text-dark text-xs sm:text-sm leading-tight truncate">
            {name}
          </h4>
          <p className="text-[10px] sm:text-xs text-text-muted truncate mt-0.5">
            {business} · <span className="text-primary font-bold">{city}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
