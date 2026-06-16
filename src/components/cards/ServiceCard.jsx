import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon, title, description, href }) {
  // Dynamically resolve icon from name if passed as string
  const getIcon = () => {
    if (typeof icon === 'string') {
      const ResolvedIcon = Icons[icon] || Icons.FileText;
      return <ResolvedIcon className="h-6 w-6 text-primary" />;
    }
    return icon;
  };

  return (
    <Link 
      to={href}
      className="group block p-6 bg-white border border-border rounded-lg card-hover-effect transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="inline-flex items-center justify-center p-3 bg-primary-light rounded-md mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <div className="group-hover:scale-110 transition-transform duration-300 text-primary group-hover:text-white">
            {getIcon()}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
        Learn more 
        <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </Link>
  );
}
