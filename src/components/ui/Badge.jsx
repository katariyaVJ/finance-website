import React from 'react';

export default function Badge({ label, color = 'green', className = '' }) {
  const colors = {
    green: 'bg-primary-light text-primary',
    gold: 'bg-[#FBF0D5] text-[#7A4D00]',
    gray: 'bg-[#F0F0EF] text-text-muted',
    white: 'bg-white text-primary border border-border'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${colors[color]} ${className}`}>
      {label}
    </span>
  );
}
