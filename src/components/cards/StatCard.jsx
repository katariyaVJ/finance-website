import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ number, suffix = '', label, icon: Icon, variant = 'light' }) {
  const styles = {
    light: 'bg-white border border-border/80 shadow-card text-text-dark hover:border-primary/50',
    dark: 'bg-transparent border border-white/10 text-white hover:bg-white/5 hover:border-white/20'
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
    <motion.div
      className={`p-6 md:p-8 rounded-2xl text-center transition-all duration-300 ${styles[variant]} flex flex-col items-center justify-center`}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {Icon && (
        <div className="mb-2.5 p-2 bg-white/5 rounded-xl text-gold group-hover:scale-110 transition-transform">
          <Icon className="h-6.5 w-6.5 stroke-[1.5]" />
        </div>
      )}
      <div className={`text-3xl sm:text-4xl lg:text-[44px] font-black mb-1.5 font-display tracking-tight leading-none ${numberStyles[variant]}`}>
        {number}
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>
      <div className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${labelStyles[variant]}`}>
        {label}
      </div>
    </motion.div>
  );
}
