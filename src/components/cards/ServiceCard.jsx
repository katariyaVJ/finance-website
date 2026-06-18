import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon, title, description, href }) {
  // Dynamically resolve icon from name if passed as string
  const getIcon = () => {
    if (typeof icon === 'string') {
      const ResolvedIcon = Icons[icon] || Icons.FileText;
      return <ResolvedIcon className="h-5.5 w-5.5 text-primary transition-colors duration-300 group-hover:text-white" />;
    }
    return icon;
  };

  return (
    <Link 
      to={href}
      className="group block px-5 py-4 bg-white border border-border/80 rounded-2xl shadow-card card-hover-effect transition-all duration-300 flex flex-col justify-between items-center text-center"
    >
      <div className="flex flex-col items-center">
        {/* Icon Circle */}
        <div className="inline-flex items-center justify-center p-2.5 bg-primary-light rounded-xl mb-3 group-hover:bg-primary transition-colors duration-350">
          <div className="group-hover:scale-110 transition-transform duration-350 text-primary">
            {getIcon()}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base font-extrabold text-text-dark mb-1.5 group-hover:text-primary transition-colors duration-300 font-display">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed mb-3">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center justify-center text-xs font-bold text-primary transition-transform duration-300 mt-2">
        <span>Learn more</span> 
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
