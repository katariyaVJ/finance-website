import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  UploadCloud, 
  ShieldCheck, 
  FileText, 
  Award, 
  ThumbsUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "Upload Documents",
    icon: UploadCloud,
    activeStatus: "Uploading client files...",
    completedStatus: "Files Received Successfully",
    pendingStatus: "Waiting for files"
  },
  {
    title: "Verify & Review",
    icon: ShieldCheck,
    activeStatus: "CA Verification in Progress...",
    completedStatus: "Documents CA-Verified",
    pendingStatus: "Queueing for review"
  },
  {
    title: "Government Processing",
    icon: FileText,
    activeStatus: "Government Submission & Portal Processing...",
    completedStatus: "Government Approved",
    pendingStatus: "Ready for submission"
  },
  {
    title: "Certificate Generated",
    icon: Award,
    activeStatus: "Digital Signature & Approval Processing...",
    completedStatus: "Certificate Ready",
    pendingStatus: "Awaiting approval"
  },
  {
    title: "Delivered Successfully",
    icon: ThumbsUp,
    activeStatus: "Dispatching via WhatsApp & Email...",
    completedStatus: "Sent Successfully",
    pendingStatus: "Ready for delivery"
  }
];

export default function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 14 }
    }
  };

  return (
    <section className="relative bg-[#fafbf9] text-text-dark pt-24 pb-[100px] md:pt-28 md:pb-[100px] min-h-[85vh] lg:min-h-[calc(100vh-80px)] lg:max-h-[820px] flex items-center overflow-hidden">
      
      {/* Background radial accent glow & tech grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-primary-light/40 rounded-full blur-[130px]" />
        <div className="absolute left-[-10%] bottom-0 h-96 w-96 bg-gold/5 rounded-full blur-[100px]" />
        
        {/* Fine coordinate tech dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Original Copywriting & Actions (6 cols) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-7 text-left z-10 lg:-mt-[15px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Original Professional Badge */}
            <motion.div 
              variants={itemVariants} 
              className="self-start flex items-center space-x-2 bg-[#E8F5E9] border border-[#2E7D32]/10 px-4 py-1.5 rounded-full"
            >
              <span className="h-2 w-2 rounded-full bg-[#2E7D32]"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1b4a25]">
                YOUR ONE-STOP BUSINESS SOLUTION
              </span>
            </motion.div>

            {/* Headline structured exactly like the uploaded reference image, with line-height and capsule styling */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black text-text-dark leading-[1.55] tracking-tight font-display"
            >
              Everything Your <br />
              <span className="relative inline-block my-4">
                <span className="relative inline-block bg-gradient-to-r from-[#E8F5E9] via-[#DCFCE7] to-[#DCFCE7]/60 text-[#1b4a25] px-6 py-2 rounded-2xl shadow-sm border border-[#C8E6C9] select-none">
                  Business
                </span>
              </span> <br />
              Need, <br />
              <span className="relative inline-block text-[#1b4a25] mt-2">
                All in One Place.
                {/* Underline brush SVG */}
                <svg className="absolute left-0 bottom-[-10px] w-full h-[10px] text-[#1b4a25] opacity-90" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                  <path d="M 2 8 C 30 4.5, 70 4.5, 98 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            {/* Original Authoritative Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl font-medium"
            >
              We specialize in GST, Income Tax, loans, legal advisory, revenue solutions, and government services—helping individuals and businesses across India with reliable, end-to-end support.
            </motion.p>

            {/* Buttons: Both Green with white hover sweep, vertical padding py-2.5 */}
            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  to="/contact"
                  className="relative overflow-hidden group/btn bg-primary text-white border-2 border-primary px-7 py-2.5 text-base font-extrabold rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10 hover:border-primary"
                >
                  <span className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
                  <span className="relative z-10 flex items-center group-hover/btn:text-primary transition-colors duration-300">
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="relative overflow-hidden group/btn bg-primary text-white border-2 border-primary px-7 py-2.5 text-base font-extrabold rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10 hover:border-primary"
                >
                  <span className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
                  <span className="relative z-10 flex items-center group-hover/btn:text-primary transition-colors duration-300">
                    Explore Services
                    <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Vertical Roadmap Timeline (6 cols - Aligned Right) */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end items-center pt-10 lg:pt-0">
            
            <div className="relative w-full max-w-[480px] px-6 py-5 md:px-8 md:py-6 bg-white border border-border/80 rounded-[2.5rem] shadow-2xl overflow-hidden">
              {/* Background Tech Mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

              {/* Header Bar */}
              <div className="relative z-10 flex justify-between items-center pb-4 mb-6 border-b border-border/60">
                <span className="text-[11px] sm:text-xs md:text-[13px] font-black text-text-muted uppercase tracking-widest font-sans">
                  LIVE WORKFLOW MONITOR
                </span>
                <span className="text-[10px] sm:text-[11px] md:text-xs font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded border border-primary/10 uppercase tracking-wider font-sans">
                  System Active
                </span>
              </div>

              {/* Timeline List (Unified alignment container with space-y-5 for 20px gap) */}
              <div className="relative z-10 space-y-5">
                
                {/* Vertical Progress Line (Centered exactly at left-[24px] and runs center-to-center behind nodes) */}
                <div className="absolute left-[24px] top-6 bottom-6 w-[3px] bg-slate-200/80 rounded-full z-0">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-gold rounded-full"
                    initial={{ height: "0%" }}
                    animate={{ 
                      height: `${activeStep === steps.length ? 100 : (activeStep / (steps.length - 1)) * 100}%` 
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  {/* Glowing travelling dot */}
                  {activeStep < steps.length && (
                    <motion.div 
                      className="absolute left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-gold border-2 border-white rounded-full shadow-[0_0_10px_#D4AF37]"
                      animate={{ 
                        top: `${(activeStep / (steps.length - 1)) * 100}%` 
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </div>

                {/* Step rows (Added pl-20 for generous horizontal gap between icon and card content) */}
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx === activeStep;
                  const isCompleted = idx < activeStep;
                  
                  let statusText = step.pendingStatus;
                  if (isActive) statusText = step.activeStatus;
                  if (isCompleted || activeStep === steps.length) statusText = step.completedStatus;

                  return (
                    <div key={idx} className="relative flex items-center min-h-[76px] pl-20">
                      
                      {/* Timeline circle node containing the icon - Centered on the progress line at left-[24px] */}
                      <div className={`absolute left-[24px] -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center border-4 transition-all duration-300 z-20 ${
                        isActive 
                          ? "bg-gold border-gold text-[#1A1A1A] shadow-lg scale-110 ring-4 ring-gold/15" 
                          : isCompleted || activeStep === steps.length
                            ? "bg-primary border-primary text-white shadow-sm"
                            : "bg-white border-slate-200 text-slate-400"
                      }`}>
                        <Icon className="w-5 h-5 stroke-[2.5]" />
                      </div>

                      {/* Card Content (Offset to the right of the node with plenty of horizontal space) */}
                      <motion.div
                        className={`w-full flex items-center justify-between py-3 px-5 rounded-2xl border shadow-sm transition-all duration-300 ${
                          isActive 
                            ? "bg-white border-primary shadow-md scale-[1.01] ring-1 ring-primary/10" 
                            : isCompleted || activeStep === steps.length
                              ? "bg-[#fafbf9]/80 border-primary/10 opacity-95"
                              : "bg-white/40 border-border/40 opacity-55"
                        }`}
                        animate={{ scale: isActive ? 1.01 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Info text details */}
                        <div className="flex-grow text-left">
                          <div className="text-[16px] font-black text-text-dark leading-tight">{step.title}</div>
                          <div className={`text-[12.5px] font-bold mt-1.5 leading-none transition-colors ${
                            isActive 
                              ? "text-primary" 
                              : isCompleted || activeStep === steps.length
                                ? "text-primary/75"
                                : "text-text-muted"
                          }`}>
                            {statusText}
                          </div>
                        </div>

                        {/* Live flashing indicator for active stage */}
                        {isActive && (
                          <div className="relative flex h-2.5 w-2.5 ml-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
