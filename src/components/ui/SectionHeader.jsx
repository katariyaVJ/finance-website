import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center justify-center mx-auto'
  };

  return (
    <div className={`flex flex-col space-y-2 mb-12 max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark leading-tight font-display">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-text-muted leading-relaxed max-w-[560px] ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
