import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle2, ArrowRight, Activity, Building2, UserCheck, Check } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

import { Link } from 'react-router-dom';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const dashboardItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative bg-white pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden">
      
      {/* Premium Background Graphics & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary-light/40 rounded-full blur-3xl" />
        <div className="absolute left-[-10%] bottom-0 h-96 w-96 bg-gold/5 rounded-full blur-3xl" />
        
        {/* Fine Architectural Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.5px,transparent_0.5px),linear-gradient(to_bottom,#e2e8f0_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Premium Copywriting (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Professional Active Badge */}
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              animate="visible"
              className="self-start flex items-center space-x-2 bg-primary-light/80 border border-primary/10 px-3 py-1.5 rounded-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                YOUR ONLY BUSINESS COMPLIANCE PARTNER
              </span>
            </motion.div>

            {/* Asymmetric Elegant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-text-dark leading-[1.1] tracking-tight font-display">
              Simplifying Business Compliance. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-[#368648] to-gold bg-clip-text text-transparent">
                Empowering Growth.
              </span>
            </h1>

            {/* Authoritative Description */}
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl font-medium"
            >
              Get expert company incorporation, GST return filings, income tax audits, and legal drafting managed directly by our in-house qualified Chartered Accountants, CS, and corporate advocates.
            </motion.p>

            {/* Main Action Call to Actions - Single Dominant CTA */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="pt-2"
            >
              <div className="flex flex-wrap gap-6 items-center">
                <Button 
                  label="Book Free Consultation" 
                  variant="gold" 
                  size="lg" 
                  href="/contact" 
                  className="shadow-md hover:scale-[1.03] transition-transform duration-200"
                />
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-gold transition-colors group"
                >
                  <span>Explore 80+ Services</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="pt-6 mt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-bold text-text-muted border-t border-border/40"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span>100+ Clients Served</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span>80+ Services</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                <span>All India Services</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dashboard Visualization (5 cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center pt-6 lg:pt-0">
            
            {/* Glowing Backdrop Blob behind Dashboard */}
            <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0" />

            {/* Interactive Operations Dashboard Card */}
            <motion.div
              className="relative w-full max-w-[430px] bg-white border border-border/80 p-5 rounded-[2rem] shadow-hover z-10 overflow-hidden flex flex-col space-y-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Card Top Header */}
              <div className="flex justify-between items-center pb-3 border-b border-border/40">
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-widest font-extrabold text-text-muted">HK Finance Portal</div>
                  <h3 className="text-sm font-black text-text-dark mt-0.5">Filing & Operations Hub</h3>
                </div>
                <div className="px-2.5 py-1 bg-primary-light text-primary rounded-xl flex items-center space-x-1.5 text-[10px] font-extrabold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                  </span>
                  <span>LIVE STATUS</span>
                </div>
              </div>

              {/* Operations Pipeline List */}
              <div className="space-y-4">
                
                {/* Item 1 */}
                <motion.div 
                  className="space-y-1.5 text-left"
                  variants={dashboardItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between text-xs font-bold text-text-dark">
                    <span className="flex items-center space-x-1.5">
                      <Building2 className="h-3.5 w-3.5 text-primary" />
                      <span>Company Incorporation (Pvt Ltd)</span>
                    </span>
                    <span className="text-primary font-black">100% Done</span>
                  </div>
                  <div className="w-full bg-bg-page h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-full" />
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div 
                  className="space-y-1.5 text-left"
                  variants={dashboardItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.35 }}
                >
                  <div className="flex justify-between text-xs font-bold text-text-dark">
                    <span className="flex items-center space-x-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#e5a013]" />
                      <span>GST Return Filing (Q1 2026)</span>
                    </span>
                    <span className="text-[#e5a013] font-black">95% Matching</span>
                  </div>
                  <div className="w-full bg-bg-page h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-[#e5a013] h-full rounded-full w-[95%]" />
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div 
                  className="space-y-1.5 text-left"
                  variants={dashboardItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex justify-between text-xs font-bold text-text-dark">
                    <span className="flex items-center space-x-1.5">
                      <Shield className="h-3.5 w-3.5 text-primary" />
                      <span>Trademark Protection Filing</span>
                    </span>
                    <span className="text-primary font-black">100% Done</span>
                  </div>
                  <div className="w-full bg-bg-page h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-full" />
                  </div>
                </motion.div>

              </div>

              {/* Verified Badge Row */}
              <div className="pt-2 flex justify-between items-center text-xs border-t border-border/40 text-left font-bold text-text-muted">
                <span className="flex items-center">
                  <UserCheck className="h-4 w-4 text-gold mr-1.5 stroke-[2.5]" />
                  <span>Verified CA Review Desk</span>
                </span>
                <span className="text-gold font-extrabold uppercase tracking-widest text-[9px] bg-gold/5 px-2 py-0.5 rounded-full border border-gold/10">Authorized</span>
              </div>
            </motion.div>

            {/* Overlapping Floating Branch Badge */}
            <motion.div
              className="absolute -bottom-4 -left-6 bg-white border border-border/80 p-3.5 rounded-2xl shadow-card flex items-center space-x-3 z-20 text-left"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="p-2.5 bg-primary-light text-primary rounded-xl">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-wider">Surat HO Desk</div>
                <div className="text-xs font-black text-text-dark mt-0.5 flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] mr-1.5 inline-block animate-pulse" />
                  Ahmedabad · Vadodara · Ankleshwar
                </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Status 2 */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white border border-border/80 p-3.5 rounded-2xl shadow-card flex items-center space-x-3 z-20 text-left"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="p-2.5 bg-primary-light text-primary rounded-xl">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-wider">100% Digital Execution</div>
                <div className="text-xs font-black text-text-dark mt-0.5">Secure Document Upload</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
