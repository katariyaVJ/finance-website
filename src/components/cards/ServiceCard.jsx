import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = memo(function ServiceCard({ icon, title, description, href }) {
  // Memoize icon resolution so it doesn't re-compute on every render
  const IconElement = useMemo(() => {
    if (typeof icon === 'string') {
      const ResolvedIcon = Icons[icon] || Icons.FileText;
      return <ResolvedIcon className="h-5.5 w-5.5 text-primary transition-colors duration-700 group-hover:text-white" />;
    }
    return icon;
  }, [icon]);

  return (
    <Link 
      to={href}
      aria-label={`Learn more about ${title}`}
      className="group block px-5 py-4 bg-white border border-border/80 rounded-2xl shadow-card card-hover-effect transition-all duration-500 flex flex-col justify-between items-center text-center"
    >
      <div className="flex flex-col items-center">
        {/* Icon Circle */}
        <div className="inline-flex items-center justify-center p-2.5 bg-primary-light rounded-xl mb-3 group-hover:bg-primary transition-colors duration-700">
          <div className="group-hover:scale-110 transition-transform duration-500 text-primary">
            {IconElement}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-[17px] font-extrabold text-text-dark mb-1.5 group-hover:text-primary transition-colors duration-300 font-display">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[15px] text-text-muted leading-relaxed mb-3">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="flex items-center justify-center text-[14px] font-bold text-primary transition-transform duration-500">
        <span>Learn more</span> 
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
});

export default ServiceCard;
