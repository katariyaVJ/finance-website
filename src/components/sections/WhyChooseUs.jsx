import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldCheck, Users, Zap, Coins, Globe, HeartHandshake } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'CA, CS & Advocate Led Desk',
      desc: '15+ in-house CAs, CSs, and corporate advocates with 10+ years of regulatory expertise.'
    },
    {
      icon: Zap,
      title: '24-Hour Review SLA',
      desc: 'Initial document review and application file preparation completed within 24 hours.'
    },
    {
      icon: Coins,
      title: 'Zero Hidden Fee Guarantee',
      desc: '100% price transparency. Government fees and professional charges clearly detailed.'
    },
    {
      icon: Globe,
      title: '5,000+ Enterprises Served',
      desc: 'Trusted compliance partner to over 5,000 Pvt Ltd, LLPs, and proprietors across India.'
    },
    {
      icon: HeartHandshake,
      title: '100% Digital Document Vault',
      desc: 'Submit and track files securely through our encrypted portal or secure WhatsApp desk.'
    },
    {
      icon: Shield,
      title: 'All India Liaison Network',
      desc: 'Direct representation desks with MCA, GSTN, Income Tax Dept, and national councils.'
    }
  ];

  const [activeTextIndex, setActiveTextIndex] = React.useState(0);

  React.useEffect(() => {
    // Cycles every 4 seconds
    const interval = setInterval(() => {
      setActiveTextIndex((prev) => (prev === 5 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="bg-white py-[50px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Text List */}
          <div className="lg:col-span-6 text-left">
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
                    <div className="flex-shrink-0 mt-0.5 text-primary">
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-dark text-base">{feat.title}</h3>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Interactive Orbiting Graphic */}
          <div className="lg:col-span-6 flex flex-col items-center justify-between min-h-[580px] py-4 overflow-hidden">
            
            {/* Responsive scale wrapper: shrinks on mobile to prevent overflow */}
            <div className="scale-[0.6] sm:scale-[0.8] lg:scale-100 my-[-80px] sm:my-[-40px] lg:my-0 origin-top transition-transform duration-300">
            {/* The Orbiting Circle Visual */}
            <div className="relative w-[480px] h-[480px] flex items-center justify-center">
              
              {/* Static Center Circle (Warm beige background, enlarged shield check & text) */}
              <div className="absolute z-10 w-[300px] h-[300px] bg-[#F3ECE3] rounded-full flex flex-col items-center justify-center text-center p-8 select-none">
                <ShieldCheck className="h-20 w-20 text-primary mb-4 stroke-[1.5]" />
                <span className="text-[20px] font-black text-text-dark leading-tight max-w-[220px]">
                  Your Trusted Compliance Partner
                </span>
              </div>

              {/* Orbit Circular Path (r = 200px, centered at 240px) */}
              <svg className="absolute w-[480px] h-[480px] text-primary/30">
                <circle cx="240" cy="240" r="200" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>



              {/* Orbiting Icons (Continuous rotation around center) */}
              <motion.div 
                className="absolute w-[480px] h-[480px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              >
                {[
                  { icon: Users, angle: 270, index: 0 },
                  { icon: Zap, angle: 330, index: 1 },
                  { icon: Coins, angle: 30, index: 2 },
                  { icon: Globe, angle: 90, index: 3 },
                  { icon: HeartHandshake, angle: 150, index: 4 },
                  { icon: Shield, angle: 210, index: 5 }
                ].map((item) => {
                  const Icon = item.icon;
                  const rad = (item.angle * Math.PI) / 180;
                  const x = 240 + 200 * Math.cos(rad);
                  const y = 240 + 200 * Math.sin(rad);

                  return (
                    <div 
                      key={item.index}
                      className="absolute"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                        className="w-14 h-14 rounded-full flex items-center justify-center bg-primary text-white border-2 border-primary/20 hover:scale-110 hover:border-primary transition-all duration-300 cursor-pointer shadow-md"
                      >
                        <Icon className="h-7 w-7 stroke-[1.5]" />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

            </div>

            </div> {/* End responsive scale wrapper */}
            <div className="w-full max-w-[420px] text-center min-h-[110px] mt-6 flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTextIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-2"
                >
                  <h4 className="text-[20px] font-extrabold text-primary">
                    {features[activeTextIndex].title}
                  </h4>
                  <p className="text-[15px] text-text-muted leading-relaxed max-w-[380px]">
                    {features[activeTextIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
