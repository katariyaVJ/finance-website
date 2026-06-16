import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  external = false
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-[#1a4724] active:bg-[#153a1d] shadow-sm',
    gold: 'bg-gold text-dark hover:bg-gold-hover active:bg-[#916a08] shadow-sm font-semibold',
    outline: 'border border-primary text-primary bg-transparent hover:bg-primary-light active:bg-[#d5ecd8]',
    ghost: 'text-text-muted hover:text-primary hover:bg-primary-light/40 bg-transparent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-semibold',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  };

  const motionProps = {
    whileHover: disabled ? {} : { y: -2, scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08)' },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 }
  };

  const content = (
    <>
      {Icon && <Icon className={`mr-2 ${size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />}
      {label}
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link to={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
