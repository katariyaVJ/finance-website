import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`border border-border/80 rounded-2xl p-5 cursor-pointer select-none transition-all duration-300 bg-white shadow-card hover:shadow-hover hover:border-primary/50 ${
        isOpen ? 'border-primary/60 ring-2 ring-primary-light/50' : ''
      }`}
    >
      <div className="flex items-center justify-between w-full text-left">
        <span className={`font-bold text-[14.5px] sm:text-[15.5px] leading-snug pr-4 transition-colors duration-300 ${
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
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-3 text-sm text-text-muted leading-relaxed font-normal border-t border-border/30 mt-3">
              <p className="whitespace-pre-line text-[14px] leading-relaxed text-text-muted font-normal">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
