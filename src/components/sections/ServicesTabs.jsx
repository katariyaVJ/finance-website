import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Plus, FileSpreadsheet, Receipt, Building, Store, Calculator } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { servicesData } from '../../data/services';

// Local assets import
import gstReturnImg from '../../assets/gst-return.jpg';
import incomeTaxImg from '../../assets/income-tax.jpg';
import pvtLtdImg from '../../assets/pvt-ltd.jpg';
import gumastaImg from '../../assets/gumasta.jpg';
import bookkeepingImg from '../../assets/bookkeeping.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 70, 
      damping: 15 
    } 
  }
};

// Computed once at module load — no need to recompute on every render
const SELECTED_SLUGS = [
  { slug: 'gst-return-filing',    icon: 'FileSpreadsheet', image: gstReturnImg  },
  { slug: 'income-tax-services',  icon: 'Receipt',         image: incomeTaxImg  },
  { slug: 'pvt-ltd-registration', icon: 'Building',        image: pvtLtdImg     },
  { slug: 'gumasta-license',      icon: 'Store',           image: gumastaImg    },
  { slug: 'bookkeeping-services', icon: 'Calculator',      image: bookkeepingImg}
];

export default function ServicesTabs() {

  const HOMEPAGE_SERVICES = useMemo(() => {
    if (!servicesData || !Array.isArray(servicesData)) return [];
    return SELECTED_SLUGS
      .map(cfg => {
        const data = servicesData.find(s => s.slug === cfg.slug);
        if (!data) return null;
        return { ...data, iconName: cfg.icon, image: cfg.image };
      })
      .filter(Boolean);
  }, [servicesData]);

  const [expandedServiceSlug, setExpandedServiceSlug] = useState(null);
  const [activeServiceSlug, setActiveServiceSlug] = useState(HOMEPAGE_SERVICES[0]?.slug);

  const activeService = HOMEPAGE_SERVICES.find(s => s.slug === activeServiceSlug) || HOMEPAGE_SERVICES[0];

  const ICON_MAP = { FileSpreadsheet, Receipt, Building, Store, Calculator };
  const IconComponent = ICON_MAP[activeService?.iconName] || Calculator;

  if (!activeService) return null;

  return (
    <section className="bg-white py-[50px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Most Requested"
          title="Popular Services"
          subtitle="Explore our most frequently requested business tax, licensing, and compliance services."
          align="left"
        />

        {/* Content (Split Showcase on Desktop, Accordion on Mobile) */}
        <div className="mt-12 max-w-7xl mx-auto min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              
              {/* 1. Desktop Layout (Split Screen Showcase) */}
              <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch">
                
                {/* Left Column: Capsule List (5 columns, 30px gap) */}
                <div className="col-span-5 flex flex-col gap-[30px]">
                  {HOMEPAGE_SERVICES.map((service, index) => {
                    const displayNum = String(index + 1).padStart(2, '0');
                    const isActive = activeService.slug === service.slug;

                    return (
                      <motion.div
                        key={service.slug}
                        variants={rowVariants}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveServiceSlug(service.slug)}
                          className={`w-full group flex items-center justify-between py-5 px-8 rounded-full border transition-all duration-500 gap-4 text-left outline-none shadow-sm
                            ${isActive 
                              ? 'bg-primary border-primary text-white hover:scale-[1.02]' 
                              : 'bg-white border-primary/30 text-text-dark hover:border-primary/60 hover:bg-[#F9FBF9] hover:scale-[1.02]'}`}
                        >
                          <div className="flex items-center gap-5 flex-1">
                            <span className={`text-[19px] font-extrabold transition-colors duration-500 font-display
                              ${isActive ? 'text-gold' : 'text-primary/40 group-hover:text-primary'}`}>
                              {displayNum}
                            </span>
                            <h3 className={`font-bold text-[19px] transition-all duration-500
                              ${isActive ? 'text-white' : 'text-text-dark group-hover:text-primary'}`}>
                              {service.name}
                            </h3>
                          </div>
                          
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0
                            ${isActive 
                              ? 'bg-gold text-text-dark' 
                              : 'border border-border text-text-muted/70 group-hover:bg-primary group-hover:text-white group-hover:border-primary'}`}>
                            {isActive ? (
                              <ArrowRight className="h-4 w-4" />
                            ) : (
                              <ArrowUpRight className="h-4 w-4" />
                            )}
                          </div>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Column: Detail Card (7 columns, matching height with background image) */}
                <div className="col-span-7 flex flex-col relative h-full">
                  <div className="relative border border-primary/10 rounded-3xl shadow-xl flex-1 overflow-hidden w-full h-full min-h-[480px] group/showcase">
                    <AnimatePresence mode="wait">
                      {activeService && (
                        <motion.div
                          key={activeService.slug}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                          className="absolute inset-0 w-full h-full flex flex-col justify-end"
                        >
                          {/* Background Showcase Image (smoothly zooms in on hover) */}
                          <img 
                            src={activeService.image} 
                            alt={activeService.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out scale-100 group-hover/showcase:scale-108"
                          />
                          
                          {/* Dark Vignette Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                          {/* Glassmorphic Detail Panel Overlay (centered, wider, stable layout with group/glass) */}
                          <div className="relative z-10 mx-auto mb-[40px] max-w-[550px] w-full p-6 md:p-8 bg-dark/50 backdrop-blur-md border border-white/10 rounded-3xl text-left shadow-lg transition-all duration-500 hover:scale-[1.03] cursor-pointer group/glass">
                            {/* Gold Icon Box (bg/color changes on card hover) */}
                            <div className="w-11 h-11 bg-gold text-text-dark rounded-xl flex items-center justify-center mb-4 shadow-sm transition-all duration-500 group-hover/glass:bg-primary group-hover/glass:text-white">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            
                            <h2 className="text-[23px] font-bold text-white leading-tight font-display">
                              {activeService.name}
                            </h2>
                            
                            <p className="text-[16px] text-gray-300 mt-2 leading-relaxed font-sans">
                              {activeService.description}
                            </p>

                            <div className="pt-4">
                              <Link
                                to={`/services/${activeService.slug}`}
                                className="text-[16px] font-extrabold text-gold hover:text-white transition-colors duration-300 flex items-center gap-1.5 max-w-fit group/btn"
                              >
                                <span>Get Started</span>
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
              
              {/* 2. Mobile/Tablet Layout (Accordion rows, 30px gap) */}
              <div className="lg:hidden flex flex-col gap-[30px]">
                {HOMEPAGE_SERVICES.map((service, index) => {
                  const displayNum = String(index + 1).padStart(2, '0');
                  const isExpanded = expandedServiceSlug === service.slug;
                  return (
                    <div
                      key={service.slug}
                      className="flex flex-col"
                    >
                      {/* Row Header (Capsule Button) */}
                      <button
                        onClick={() => setExpandedServiceSlug(isExpanded ? null : service.slug)}
                        className={`w-full group flex items-center justify-between py-5 px-8 rounded-full border transition-all duration-500 gap-4 text-left outline-none shadow-sm
                          ${isExpanded 
                            ? 'bg-primary border-primary text-white' 
                            : 'bg-white border-primary/30 text-text-dark'}`}
                      >
                        {/* Left: Index Number & Text Info */}
                        <div className="flex items-center gap-5 flex-1">
                          {/* Index Number */}
                          <span className={`text-[19px] font-extrabold transition-colors duration-500 font-display
                            ${isExpanded ? 'text-gold' : 'text-primary/40'}`}>
                            {displayNum}
                          </span>
                          <h3 className={`font-bold text-[19px] transition-all duration-500
                            ${isExpanded ? 'text-white' : 'text-text-dark'}`}>
                            {service.name}
                          </h3>
                        </div>

                        {/* Right: Expand Indicator */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0
                          ${isExpanded 
                            ? 'bg-gold text-text-dark rotate-45' 
                            : 'border border-border text-text-muted/70'}`}>
                          <Plus className="h-4 w-4" />
                        </div>
                      </button>

                      {/* Accordion Expandable Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 mx-4 p-6 bg-primary-light/40 border border-primary-light rounded-2xl flex flex-col gap-4 text-left">
                              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                                {service.fullDescription || service.description}
                              </p>
                              <div className="pt-2">
                                <Link
                                  to={`/services/${service.slug}`}
                                  className="px-6 py-2.5 bg-gold hover:bg-gold-hover text-text-dark text-center font-extrabold text-xs rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 max-w-fit"
                                >
                                  <span>Get Started</span>
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
