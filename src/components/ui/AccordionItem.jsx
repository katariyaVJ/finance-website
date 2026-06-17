import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`border border-border/80 rounded-2xl p-5 cursor-pointer select-none transition-all duration-300 bg-white shadow-card hover:shadow-hover hover:border-primary/50 ${
        isOpen ? 'border-primary/60 ring-2 ring-primary-light/50' : ''
      }`}
    >
      <div className="flex items-center justify-between w-full text-left">
        <span className={`font-extrabold text-sm sm:text-base leading-snug pr-4 transition-colors duration-300 ${
          isOpen ? 'text-primary' : 'text-text-dark'
        }`}>
          {question}
        </span>
        <div className={`p-1.5 rounded-lg transition-all duration-300 flex-shrink-0 ${
          isOpen ? 'bg-primary-light text-primary' : 'bg-bg-page text-text-muted'
        }`}>
          <ChevronDown className={`h-4.5 w-4.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-xs sm:text-sm text-text-muted leading-relaxed font-medium border-t border-border/40 mt-4 animate-fade-in">
              <div className="flex items-center space-x-1.5 text-xs text-primary font-bold mb-2.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Expert CA Verified Answer</span>
              </div>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-text-muted font-normal">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
