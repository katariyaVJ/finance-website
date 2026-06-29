import React, { memo } from 'react';

const SectionHeader = memo(function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '', eyebrowSize = 'text-[14px]', titleClassName = '', subtitleClassName = '' }) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center justify-center mx-auto'
  };

  return (
    <div className={`flex flex-col space-y-2 mb-[30px] max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className={`${eyebrowSize} font-bold text-primary tracking-widest uppercase`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-[42px] font-extrabold text-text-dark leading-tight font-display ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[18px] text-text-muted leading-relaxed max-w-[560px] ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
});

export default SectionHeader;
