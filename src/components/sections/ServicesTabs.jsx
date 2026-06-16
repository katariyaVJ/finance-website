import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { servicesData } from '../../data/services';

export default function ServicesTabs() {
  const tabs = [
    { label: 'GST & Taxation', categoryId: 'gst-taxation' },
    { label: 'Income Tax', categoryId: 'income-tax' },
    { label: 'Registration', categoryId: 'registration' },
    { label: 'Licenses', categoryId: 'government-licenses' },
    { label: 'Accounting', categoryId: 'accounting' }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].categoryId);

  // Filter services based on active tab category
  const filteredServices = servicesData
    .filter((s) => s.category === activeTab)
    .slice(0, 6); // show up to 6 popular services

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Most Requested"
          title="Popular Services"
          subtitle="Explore our most frequently requested business tax, licensing, and compliance services."
          align="center"
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.categoryId;
            return (
              <button
                key={tab.categoryId}
                onClick={() => setActiveTab(tab.categoryId)}
                className={`relative px-5 py-2.5 text-sm font-bold rounded-md transition-all duration-300 outline-none
                  ${isActive ? 'text-primary bg-primary-light' : 'text-text-muted hover:text-primary hover:bg-primary-light/30'}`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-12 max-w-5xl mx-auto min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredServices.map((service) => (
                <div
                  key={service.slug}
                  className="flex justify-between items-center p-5 bg-bg-page border border-border rounded-lg shadow-card hover:border-primary transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-text-dark text-sm md:text-base leading-snug">
                        {service.name}
                      </h4>
                      <p className="text-xs text-text-muted mt-0.5 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-primary hover:text-gold flex items-center space-x-0.5 pl-4 flex-shrink-0 group"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
