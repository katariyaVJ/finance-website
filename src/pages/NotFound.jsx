import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-page flex flex-col items-center justify-center p-4 relative overflow-hidden text-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#21592d02_1px,transparent_1px),linear-gradient(to_bottom,#21592d02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute right-0 top-0 h-[350px] w-[350px] bg-primary-light/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 h-[350px] w-[350px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Minimal Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Large 404 Display */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-[130px] font-black text-primary font-display leading-none tracking-tight"
        >
          404
        </motion.h1>

        {/* Minimal Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base md:text-lg font-extrabold text-text-dark mt-3 mb-8 uppercase tracking-widest"
        >
          Page not found
        </motion.p>

        {/* Centered Home Button with Consult Now Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            to="/"
            className="relative overflow-hidden group/btn bg-gold text-[#1A1A1A] font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md inline-flex items-center justify-center transition-all duration-500 z-10"
          >
            <span className="absolute inset-0 bg-primary transform -skew-x-12 -translate-x-[115%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out -z-10" />
            <span className="relative z-10 flex items-center group-hover/btn:text-white transition-colors duration-300">
              <Home className="h-4 w-4 mr-2 transition-transform duration-300" />
              Return to Home
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


