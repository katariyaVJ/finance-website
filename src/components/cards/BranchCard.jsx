import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function BranchCard({ city, address, phone, mapLink }) {
  return (
    <div className="p-6 bg-white hover:bg-[#F2F6F3] rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 text-primary font-bold text-lg mb-3">
          <MapPin className="h-5 w-5 flex-shrink-0" />
          <h3 className="text-primary">{city}</h3>
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {address}
        </p>

        {phone && (
          <div className="flex items-center space-x-2 text-text-dark text-sm mb-4">
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="font-medium">{phone}</span>
          </div>
        )}
      </div>

      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-primary hover:text-gold uppercase tracking-wider transition-colors duration-200 mt-2"
        >
          View on Google Maps
          <ExternalLink className="ml-1 h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
