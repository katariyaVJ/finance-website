import React from 'react';
import StatCard from '../cards/StatCard';

export default function StatsStrip() {
  const stats = [
    { number: '5000', suffix: '+', label: 'Clients Served' },
    { number: '80', suffix: '+', label: 'Services Offered' },
    { number: '3', suffix: '', label: 'Branch Locations' },
    { number: '10', suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section className="bg-primary py-12 relative overflow-hidden">
      {/* Subtle decorative background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
