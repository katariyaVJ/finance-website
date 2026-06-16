import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function NavLink({ label, href, hasDropdown = false, onClick, className = '' }) {
  if (hasDropdown) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center text-text-muted hover:text-primary font-medium text-sm transition-colors py-2 focus:outline-none ${className}`}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
    );
  }

  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        `relative py-2 text-sm font-medium transition-colors hover:text-primary ${
          isActive 
            ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary' 
            : 'text-text-muted'
        } ${className}`
      }
    >
      {label}
    </RouterNavLink>
  );
}
