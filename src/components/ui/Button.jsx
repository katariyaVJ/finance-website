import React, { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Button component — supports Link (internal), <a> (external), and <button> variants.
 * Wrapped in React.memo to prevent unnecessary re-renders from parent state changes.
 */
const Button = memo(function Button({
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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-[#1a4724] active:bg-[#153a1d] shadow-sm',
    gold: 'bg-gold text-dark hover:bg-gold-hover active:bg-[#916a08] shadow-sm font-semibold',
    outline: 'border border-primary text-white bg-primary hover:bg-gold hover:border-gold hover:text-[#1A1A1A] active:bg-gold-hover transition-all duration-500',
    ghost: 'text-text-muted hover:text-primary hover:bg-primary-light/40 bg-transparent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-semibold',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base'
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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {content}
        </a>
      );
    }
    // Internal link: no unnecessary motion.div wrapper
    return (
      <Link to={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
});

export default Button;
