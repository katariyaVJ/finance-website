import React from 'react';

export default function StatCard({ number, suffix = '', label }) {
  return (
    <div className="p-6 bg-white border border-border rounded-lg shadow-card text-center hover:shadow-hover hover:border-primary transition-all duration-300">
      <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
        {number}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <div className="text-xs md:text-sm text-gray-mid font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
