import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Users, Zap, Coins, Globe, HeartHandshake } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'CA, CS & Advocates Team',
      desc: 'Professional & experienced team of Chartered Accountants, Company Secretaries, and Advocates on staff.'
    },
    {
      icon: Zap,
      title: 'Quick Processing & Fast Service',
      desc: 'Fast & reliable service with quick processing for all your business compliance needs.'
    },
    {
      icon: Coins,
      title: 'Transparent & Affordable Pricing',
      desc: 'Affordable pricing with transparent quotes, absolutely zero hidden charges, and clear packages.'
    },
    {
      icon: Globe,
      title: 'All India Online Services',
      desc: 'Seamless online & offline services available for businesses all across India.'
    },
    {
      icon: HeartHandshake,
      title: 'End-to-End Business Support',
      desc: 'Complete end-to-end business support from documents checking to final registration and licensing.'
    },
    {
      icon: Shield,
      title: 'Expert Consultation',
      desc: 'Get expert compliance and tax consultation with experienced corporate legal advisors.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text List */}
          <div className="lg:col-span-7 text-left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Your Trusted Compliance Partner"
              subtitle="HK Finance simplifies Indian corporate and taxation law so you can manage your operations with full peace of mind."
              align="left"
              className="mb-8"
            />

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div 
                    key={i} 
                    className="flex space-x-3 items-start"
                    variants={itemVariants}
                  >
                    <div className="p-2 bg-primary-light text-primary rounded-lg flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark text-base">{feat.title}</h4>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Visual Graphic */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Panel */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl bg-bg-page border border-border overflow-hidden flex flex-col justify-between p-8 shadow-card">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Core Values</span>
                <Shield className="h-6 w-6 text-primary" />
              </div>

              <div className="space-y-6 my-auto">
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-primary">Zero</div>
                  <div className="text-sm font-semibold text-text-muted mt-1">Hidden Charges Guarantee</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-primary">100%</div>
                  <div className="text-sm font-semibold text-text-muted mt-1">Online & Paperless Delivery</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-extrabold text-primary">24 hr</div>
                  <div className="text-sm font-semibold text-text-muted mt-1">Initial Response SLA</div>
                </div>
              </div>

              {/* Decorative circle details */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-light/50 rounded-full blur-2xl" />
              
              <div className="flex items-center space-x-2 text-xs font-bold text-text-dark uppercase tracking-widest pt-4">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>MCA & GST Registered Firm</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
