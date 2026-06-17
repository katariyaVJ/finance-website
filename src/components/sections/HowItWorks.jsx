import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, FileUp, ClipboardCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function HowItWorks() {
  const steps = [
    {
      icon: CalendarRange,
      step: '01',
      title: 'Book Consultation',
      desc: 'Call us or submit the contact form. An expert contacts you within 24 hours to analyze your business needs.'
    },
    {
      icon: FileUp,
      step: '02',
      title: 'Share Documents',
      desc: 'Provide your details and upload the required documents securely via email or WhatsApp.'
    },
    {
      icon: ClipboardCheck,
      step: '03',
      title: 'We Handle the Rest',
      desc: 'Our professionals prepare drafts, make filings, and deliver your registration or filing receipts directly.'
    }
  ];

  return (
    <section className="bg-bg-page py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Process"
          title="Get Compliant in 3 Simple Steps"
          subtitle="Our digital workflow makes business compliance and tax filings completely hassle-free."
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative mt-12 md:mt-20">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1.5px] bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Icon Node */}
                  <div className="relative flex items-center justify-center h-20 w-20 bg-white border border-border rounded-full shadow-card group-hover:border-primary group-hover:shadow-hover transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    
                    {/* Step Number Tag */}
                    <span className="absolute -top-1.5 -right-1.5 h-6 w-6 bg-gold text-dark font-extrabold text-[11px] rounded-full flex items-center justify-center shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mt-6 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
