import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon, title, description, href }) {
  // Dynamically resolve icon from name if passed as string
  const getIcon = () => {
    if (typeof icon === 'string') {
      const ResolvedIcon = Icons[icon] || Icons.FileText;
      return <ResolvedIcon className="h-6.5 w-6.5 text-primary transition-colors duration-300 group-hover:text-white" />;
    }
    return icon;
  };

  return (
    <Link 
      to={href}
      className="group block p-6 bg-white border border-border/80 rounded-2xl shadow-card card-hover-effect transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Icon Circle */}
        <div className="inline-flex items-center justify-center p-3 bg-primary-light rounded-xl mb-5 group-hover:bg-primary transition-colors duration-350">
          <div className="group-hover:scale-110 transition-transform duration-350 text-primary">
            {getIcon()}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-base sm:text-lg font-extrabold text-text-dark mb-2.5 group-hover:text-primary transition-colors duration-300 font-display">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[13px] sm:text-sm text-text-muted leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center text-xs sm:text-sm font-bold text-primary group-hover:translate-x-1.5 transition-transform duration-300 mt-4">
        <span>Learn more</span> 
        <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </Link>
  );
}
