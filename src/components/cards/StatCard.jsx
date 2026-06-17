import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ number, suffix = '', label, variant = 'light' }) {
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
      className={`p-6 rounded-2xl text-center transition-all duration-300 ${styles[variant]}`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <div className={`text-3.5xl md:text-4.5xl font-black mb-1.5 font-display tracking-tight ${numberStyles[variant]}`}>
        {number}
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>
      <div className={`text-xs font-bold uppercase tracking-widest ${labelStyles[variant]}`}>
        {label}
      </div>
    </motion.div>
  );
}
