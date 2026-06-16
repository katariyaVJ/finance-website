import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-border bg-white last:border-b-0 overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 px-6 text-left hover:bg-primary-light/10 transition-colors"
      >
        <span className="font-semibold text-text-dark text-base md:text-lg pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="text-primary flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-6 px-6 text-text-muted text-sm md:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
