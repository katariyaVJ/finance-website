import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BranchCard({ city, address, phone, mapLink }) {
  return (
    <motion.div
      className="p-6 bg-white border border-border/80 rounded-2xl shadow-card hover:shadow-hover hover:border-primary/50 hover:bg-[#F2F6F3]/30 transition-all duration-350 flex flex-col justify-between h-full text-left"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        {/* City Pin Title */}
        <div className="flex items-center space-x-2 text-primary font-bold text-lg mb-3">
          <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
          <h3 className="text-primary font-display font-extrabold">{city}</h3>
        </div>
        
        {/* Address */}
        <p className="text-text-muted text-sm leading-relaxed mb-4 font-medium">
          {address}
        </p>

        {/* Phone */}
        {phone && (
          <div className="flex items-center space-x-2 text-text-dark text-sm mb-4">
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="font-bold text-sm">{phone}</span>
          </div>
        )}
      </div>

      {/* Google Maps Link */}
      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-primary hover:text-[#0f3016] hover:underline uppercase tracking-wider transition-colors duration-200 mt-2 self-start"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
      )}
    </motion.div>
  );
}
