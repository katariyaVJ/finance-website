import React, { memo } from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const BranchCard = memo(function BranchCard({ city, address, phone, mapLink, upcoming }) {
  return (
    <div
      className={`p-6 bg-white border border-border/80 rounded-2xl shadow-card hover:shadow-hover hover:border-primary/50 hover:bg-[#F2F6F3]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${
        upcoming ? 'items-center justify-center text-center' : 'justify-between text-left'
      }`}
    >
      {upcoming ? (
        <div className="flex flex-col items-center justify-center space-y-3 py-4 w-full">
          <MapPin className="h-7 w-7 text-[#a1780b]" />
          <h3 className="text-primary font-display font-extrabold text-lg leading-tight">
            {city}
          </h3>
          <span className="px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-gold/20 text-[#a1780b] border border-gold/35 rounded-md">
            Upcoming Branch
          </span>
          <p className="text-text-muted text-xs font-semibold leading-relaxed max-w-[200px] mt-1">
            Opening soon to serve your compliance &amp; tax needs.
          </p>
        </div>
      ) : (
        <>
          <div>
            {/* City Pin Title */}
            <div className="flex items-center space-x-2 text-primary font-bold text-lg mb-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <h3 className="text-primary font-display font-extrabold flex items-center flex-wrap gap-2">
                <span>{city}</span>
              </h3>
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
        </>
      )}
    </div>
  );
});

export default BranchCard;
