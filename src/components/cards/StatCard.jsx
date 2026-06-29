import React from 'react';

export default function StatCard({ number, suffix = '', label, icon: Icon, variant = 'light' }) {
  const styles = {
    light: 'bg-white border border-border shadow-card text-text-dark',
    dark: 'bg-transparent border border-white/30 text-white'
  };

  const numberStyles = {
    light: 'text-primary',
    dark: 'text-white'
  };

  const labelStyles = {
    light: 'text-text-muted',
    dark: 'text-primary-light/80'
  };

  return (
    <div
      className={`py-6 px-2 rounded-xl text-center ${styles[variant]} flex flex-col items-center justify-center`}
    >
      {Icon && (
        <div className="mb-2 p-2 bg-white/5 rounded-xl text-gold">
          <Icon className="h-6 w-6 stroke-[1.5]" />
        </div>
      )}
      <div className={`text-3xl sm:text-4xl lg:text-[45px] font-black mb-1.5 font-display tracking-tight leading-[32px] ${numberStyles[variant]}`}>
        {number}
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>
      <div className={`text-xs sm:text-sm lg:text-[15px] font-bold uppercase tracking-widest ${labelStyles[variant]}`}>
        {label}
      </div>
    </div>
  );
}

