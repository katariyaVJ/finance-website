import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useInView, animate } from 'framer-motion';

const STATS = [
  { number: 200, suffix: '+', label: 'Projects Completed' },
  { number: 100, suffix: '+', label: 'Satisfied Clients' },
  { number: 4,   suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' }
];

function CountUp({ to, duration = 2.5 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        }
      });
      return () => controls.stop();
    }
  }, [to, inView, duration]);

  return <span ref={nodeRef}>0</span>;
}

export default function StatsStrip() {

  return (
    <section className="bg-primary py-[50px] relative overflow-hidden border-y border-border/10">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing backdrop elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] top-[10%] w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text & Stats Grid */}
          <div className="lg:col-span-8 flex flex-col text-left">
            <p className="text-[17px] text-primary-light font-medium leading-relaxed font-sans w-full mb-14">
              With years of experience in business compliance, tax filings, and company registrations, we take pride in delivering high-quality solutions that empower businesses and enhance corporate reliability. Our commitment to innovation and excellence is reflected in the numbers.
            </p>

            {/* Stats Row - 40px gaps with vertical dividers */}
            <div className="flex flex-row items-center justify-start w-full overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
              {STATS.map((stat, i) => {
                // Determine exact 40px spacing and dividers
                let borderClass = i !== 3 ? "border-r border-white/30 pr-[40px]" : "";
                let padClass = i !== 0 ? "pl-[40px]" : "";

                return (
                  <div key={i} className={`flex flex-col text-left shrink-0 ${borderClass} ${padClass}`}>
                    <div className="text-[28px] lg:text-[32px] font-extrabold text-white font-display leading-none whitespace-nowrap">
                      <CountUp to={stat.number} />
                      <span className="text-gold">{stat.suffix}</span>
                    </div>
                    <div className="text-[13px] lg:text-[15px] text-primary-light/90 mt-2.5 font-semibold font-sans leading-snug whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Rotating Circle CTA */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <Link
              to="/contact"
              className="relative flex items-center justify-center w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full cursor-pointer overflow-visible"
            >
              {/* Layer 1 & 2: Outer rotating SVG ring. The center is completely transparent, acting as Layer 2 to show the section's true background (grid/glow) */}
              <div className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite] flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  {/* Gold Ring (Layer 1) - Transparent center */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#DFB12A" strokeWidth="16" />

                  {/* Text Path */}
                  <path
                    id="textPath-circle"
                    d="M 50,50 m -38.5,0 a 38.5,38.5 0 1,1 77,0 a 38.5,38.5 0 1,1 -77,0"
                    fill="none"
                  />
                  <text fill="#21592D" className="text-[7.2px] font-black uppercase tracking-[2px] font-sans">
                    <textPath href="#textPath-circle" startOffset="0%">
                      Get Started Today • Get Started Today • Get Started Today •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Layer 3: Center Arrow Circle (spins slower at 50s). Uses Layer 1 colors: bg-gold and text-primary */}
              <div className="absolute w-[36%] h-[36%] rounded-full bg-gold flex items-center justify-center shadow-lg z-10 animate-[spin_50s_linear_infinite]">
                <ArrowUpRight className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
