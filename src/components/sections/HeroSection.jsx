import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative bg-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      
      {/* Background SVG Grid & Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="absolute right-0 top-0 h-[600px] w-[600px] text-primary-light" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="90" cy="10" r="40" className="opacity-30" />
        </svg>
        <div className="absolute left-10 bottom-10 h-72 w-72 bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="self-start">
              <Badge label="All India Online Services Available" color="green" />
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-text-dark leading-[1.15] tracking-tight font-display"
            >
              Welcome to HK Finance <br className="hidden sm:inline" />
              <span className="text-primary relative inline-block text-3xl sm:text-4xl lg:text-5xl mt-2 font-black">
                Your One-Stop Solution for Business Compliance
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed max-w-xl"
            >
              From GST filing and company incorporation to government licenses and tax audits, we manage your compliance end-to-end so you can focus on scaling your business.
            </motion.p>

            {/* Core Compliance Offerings List */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 pb-4 max-w-xl text-left"
            >
              {[
                "GST & Income Tax",
                "Accounting & Compliance",
                "Company Registration",
                "Licenses & Certifications",
                "Legal & Revenue Documentation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm md:text-base font-bold text-text-dark">
                  <span className="text-primary text-base">➥</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button 
                label="Explore Services" 
                variant="primary" 
                size="lg" 
                href="/services" 
                icon={ArrowRight} 
              />
              <Button 
                label="Book Free Call" 
                variant="gold" 
                size="lg" 
                href="/contact" 
              />
            </motion.div>

            {/* Trust Bar */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 mt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs md:text-sm font-semibold text-text-muted"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                <span>5000+ Clients</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                <span>80+ Services</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                <span>3 Branches</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                <span>All India Online</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Visual / Illustration) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Visual SVG Graphic with Green Gradients */}
            <motion.div
              className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-gradient-to-tr from-primary to-[#2d773c] shadow-2xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Geometric Grid inside */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <svg className="w-4/5 h-4/5 text-white/10" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,15 90,85 10,85" className="opacity-20" />
                <circle cx="50" cy="55" r="25" fill="#C9960C" className="opacity-30 mix-blend-overlay" />
              </svg>
              
              {/* Centered Graphic Symbol */}
              <div className="absolute flex flex-col items-center justify-center text-white">
                <Shield className="h-16 w-16 text-gold mb-3 stroke-[1.5]" />
                <span className="text-xl font-bold tracking-widest uppercase">HK FINANCE</span>
                <span className="text-xs text-primary-light uppercase tracking-widest mt-1 opacity-80">100% Compliant</span>
              </div>
            </motion.div>

            {/* Overlapping Floating Status Cards */}
            {/* Floating Card 1 */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white border border-border p-4 rounded-xl shadow-card flex items-center space-x-3 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="p-2 bg-primary-light text-primary rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-text-muted leading-none">GST Return</div>
                <div className="text-sm font-bold text-text-dark mt-1">Filing Done ✓</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              className="absolute bottom-6 -right-4 bg-white border border-border p-4 rounded-xl shadow-card flex items-center space-x-3 z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="p-2 bg-primary-light text-primary rounded-lg">
                <Sparkles className="h-5 w-5 text-[#C9960C]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-text-muted leading-none">Company Registration</div>
                <div className="text-sm font-bold text-text-dark mt-1">Pvt Ltd Active ✓</div>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              className="absolute -bottom-6 left-6 bg-white border border-border p-4 rounded-xl shadow-card flex items-center space-x-3 z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
            >
              <div className="p-2 bg-primary-light text-primary rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-text-muted leading-none">ITR Assured</div>
                <div className="text-sm font-bold text-text-dark mt-1">ITR-4 Lodged ✓</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
