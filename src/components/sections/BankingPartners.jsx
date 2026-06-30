import React from 'react';
import { motion } from 'framer-motion';

export default function BankingPartners() {
  const partners = [
    {
      name: 'ICICI Bank',
      logo: (
        <img
          src="/images/banks/icici.svg"
          alt="ICICI Bank"
          className="h-10 md:h-12 w-auto object-contain max-w-[140px] md:max-w-[180px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'Axis Bank',
      logo: (
        <img
          src="/images/banks/axis.svg"
          alt="Axis Bank"
          className="h-9 md:h-11 w-auto object-contain max-w-[130px] md:max-w-[170px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'State Bank of India',
      logo: (
        <img
          src="/images/banks/sbi.svg"
          alt="State Bank of India"
          className="h-9 md:h-11 w-auto object-contain max-w-[150px] md:max-w-[190px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'HDFC Bank',
      logo: (
        <img
          src="/images/banks/hdfc.svg"
          alt="HDFC Bank"
          className="h-9 md:h-11 w-auto object-contain max-w-[140px] md:max-w-[180px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'Bank of Baroda',
      logo: (
        <img
          src="/images/banks/baroda.svg"
          alt="Bank of Baroda"
          className="h-10 md:h-12 w-auto object-contain max-w-[150px] md:max-w-[190px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'Union Bank of India',
      logo: (
        <img
          src="/images/banks/union.svg"
          alt="Union Bank of India"
          className="h-10 md:h-12 w-auto object-contain max-w-[150px] md:max-w-[190px]"
          loading="lazy"
        />
      )
    },
    {
      name: 'Kotak Mahindra Bank',
      logo: (
        <img
          src="/images/banks/kotak.svg"
          alt="Kotak Mahindra Bank"
          className="h-10 md:h-12 w-auto object-contain max-w-[130px] md:max-w-[170px]"
          loading="lazy"
        />
      )
    }
  ];

  // Duplicate the array to create a seamless loop effect
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="bg-white py-[60px] overflow-hidden border-b border-border/40 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block aligned to Left */}
        <div className="text-left mb-10">
          <span className="text-[14px] font-bold text-primary uppercase tracking-widest block mb-2 font-sans">
            HK FINANCE
          </span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-text-dark font-display tracking-tight leading-tight">
            Our Banking Partners
          </h2>
        </div>

        {/* Continuous Marquee Slider */}
        <div className="relative w-full overflow-hidden border border-border/80 rounded-2xl bg-white shadow-card py-6 md:py-10">

          {/* Fading Gradients for smooth entrance/exit */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25 // Adjust this value to make it slower or faster
            }}
          >
            {marqueePartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-[220px] md:w-[280px] border-r border-border/70 last:border-r-0 hover:bg-primary-light/5 transition-colors duration-300 h-24 md:h-32"
              >
                <div className="transform hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
