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
      className={`p-4 rounded-xl text-center ${styles[variant]} flex flex-col items-center justify-center`}
    >
      {Icon && (
        <div className="mb-2 p-2 bg-white/5 rounded-xl text-gold">
          <Icon className="h-6 w-6 stroke-[1.5]" />
        </div>
      )}
      <div className={`text-3xl sm:text-4xl lg:text-[38px] font-black mb-1.5 font-display tracking-tight leading-none ${numberStyles[variant]}`}>
        {number}
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>
      <div className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${labelStyles[variant]}`}>
        {label}
      </div>
    </div>
  );
}

