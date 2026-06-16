import React from 'react';
import { motion } from 'framer-motion';

export default function StatsStrip() {
  const stats = [
    { number: '5000+', label: 'Clients Served' },
    { number: '80+', label: 'Services Offered' },
    { number: '3', label: 'Branch Locations' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <section className="bg-primary text-white py-8 md:py-10 relative overflow-hidden">
      {/* Subtle decorative background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-0 divide-x-0 lg:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-display">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm font-medium text-primary-light uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
