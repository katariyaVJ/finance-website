import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  UploadCloud, 
  ShieldCheck, 
  FileText, 
  Award, 
  CheckCircle2, 
  ThumbsUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "Upload Documents",
    icon: UploadCloud,
    activeStatus: "Uploading client files...",
    completedStatus: "Files Received",
    pendingStatus: "Waiting for files"
  },
  {
    title: "Verify & Review",
    icon: ShieldCheck,
    activeStatus: "CA Review in Progress...",
    completedStatus: "Documents Verified",
    pendingStatus: "Queueing for review"
  },
  {
    title: "Government Processing",
    icon: FileText,
    activeStatus: "Government Review in Progress...",
    completedStatus: "Government Approved",
    pendingStatus: "Ready for submission"
  },
  {
    title: "Certificate Generated",
    icon: Award,
    activeStatus: "Digital Signature Applied...",
    completedStatus: "Certificate Ready",
    pendingStatus: "Awaiting approval"
  },
  {
    title: "Delivered Successfully",
    icon: ThumbsUp,
    activeStatus: "Dispatching via WhatsApp/Email...",
    completedStatus: "Sent Successfully",
    pendingStatus: "Ready for delivery"
  }
];

export default function HeroSectionTest() {
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
    <section className="relative bg-[#fafbf9] text-text-dark pt-20 pb-[100px] md:pb-[100px] min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-t border-border/80">
      
      {/* Background radial accent glow & tech grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-primary-light/40 rounded-full blur-[130px]" />
        <div className="absolute left-[-10%] bottom-0 h-96 w-96 bg-gold/5 rounded-full blur-[100px]" />
        
        {/* Fine coordinate tech dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions (6 cols) */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-7 text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Clean Professional Sub-badge */}
            <motion.div 
              variants={itemVariants} 
              className="self-start flex items-center bg-primary-light/60 border border-primary/10 px-3.5 py-1.5 rounded-xl"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                PROTOTYPE B: LIVE TIMELINE TIMELINE FLOW
              </span>
            </motion.div>

            {/* Asymmetric Elegant Headline with tilted gold/yellow badge */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black text-text-dark leading-[1.35] tracking-tight font-display"
            >
              Upload Documents. <br className="hidden sm:inline" />
              We Handle the{" "}
              <span className="relative inline-block bg-gold text-[#1A1A1A] px-4 py-1.5 rounded-2xl transform -rotate-[3deg] mx-1.5 shadow-lg select-none">
                Rest.
              </span>
            </motion.h1>

            {/* Authoritative Description */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl font-medium"
            >
              Track your filing process live. Securely upload files, and let our CA, CS, and advocate teams review, file, and deliver certified output directly to your email.
            </motion.p>

            {/* Buttons: Both Yellow/Gold with diagonal white hover sweep */}
            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  to="/contact"
                  className="relative overflow-hidden group/btn bg-gold text-[#1A1A1A] border-2 border-gold px-7 py-3.5 text-base font-extrabold rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10"
                >
                  <span className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
                  <span className="relative z-10 flex items-center">
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="relative overflow-hidden group/btn bg-gold text-[#1A1A1A] border-2 border-gold px-7 py-3.5 text-base font-extrabold rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10"
                >
                  <span className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
                  <span className="relative z-10 flex items-center">
                    Explore 80+ Services
                    <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Vertical Timeline (6 cols) */}
          <div className="lg:col-span-6 relative w-full flex justify-center items-center pt-10 lg:pt-0">
            
            <div className="relative w-full max-w-[480px] p-6 md:p-8 bg-white border border-border/80 rounded-[2.5rem] shadow-2xl overflow-hidden">
              {/* Background Tech Mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

              {/* Header Bar */}
              <div className="relative z-10 flex justify-between items-center pb-4 mb-6 border-b border-border/60">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest font-sans">
                  LIVE WORKFLOW MONITOR
                </span>
                <span className="text-[9px] font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded border border-primary/10 uppercase tracking-wider font-sans">
                  System Active
                </span>
              </div>

              {/* Timeline List */}
              <div className="relative z-10 pl-8 space-y-6">
                
                {/* Vertical Progress Line */}
                <div className="absolute left-[15px] top-2 bottom-8 w-[2px] bg-slate-100">
                  <motion.div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-gold rounded-full"
                    initial={{ height: "0%" }}
                    animate={{ 
                      height: `${activeStep === steps.length ? 100 : (activeStep / (steps.length - 1)) * 90}%` 
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  {/* Glowing travelling dot */}
                  {activeStep < steps.length && (
                    <motion.div 
                      className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-gold border-2 border-white rounded-full shadow-[0_0_10px_#D4AF37]"
                      animate={{ 
                        top: `${(activeStep / (steps.length - 1)) * 90}%` 
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </div>

                {/* Step rows */}
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx === activeStep;
                  const isCompleted = idx < activeStep;
                  
                  let statusText = step.pendingStatus;
                  if (isActive) statusText = step.activeStatus;
                  if (isCompleted || activeStep === steps.length) statusText = step.completedStatus;

                  return (
                    <motion.div
                      key={idx}
                      className={`relative flex items-center space-x-4 p-3.5 rounded-2xl border transition-all duration-300 ${
                        isActive 
                          ? "bg-white border-primary shadow-lg scale-[1.02] ring-1 ring-primary/10" 
                          : isCompleted || activeStep === steps.length
                            ? "bg-[#fafbf9]/85 border-primary/10 opacity-95"
                            : "bg-white/40 border-border/40 opacity-50"
                      }`}
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Timeline circle node */}
                      <div className={`absolute -left-[37px] w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                        isActive 
                          ? "bg-primary border-primary text-white" 
                          : isCompleted || activeStep === steps.length
                            ? "bg-primary border-primary text-white"
                            : "bg-white border-border text-text-muted"
                      }`}>
                        {isCompleted || activeStep === steps.length ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <span className="text-[10px] font-black font-sans">{idx + 1}</span>
                        )}
                      </div>

                      {/* Icon Container */}
                      <div className={`p-2.5 rounded-xl border flex-shrink-0 ${
                        isActive 
                          ? "bg-primary-light text-primary border-primary/20" 
                          : isCompleted || activeStep === steps.length
                            ? "bg-primary-light/40 text-primary border-primary/10"
                            : "bg-slate-50 text-text-muted border-border"
                      }`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>

                      {/* Info text details */}
                      <div className="flex-grow text-left">
                        <div className="text-sm font-extrabold text-text-dark leading-tight">{step.title}</div>
                        <div className={`text-[11px] font-semibold mt-0.5 leading-none transition-colors ${
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
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </div>
                      )}
                    </motion.div>
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
