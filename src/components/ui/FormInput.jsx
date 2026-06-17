import React from 'react';

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  required = false,
  helpText,
  name,
  value,
  onChange,
  error,
  rows = 4,
  className = ''
}) {
  const isTextarea = type === 'textarea';
  
  const inputBaseStyle = `w-full px-4 py-3 bg-white border rounded-xl text-sm text-text-dark placeholder:text-gray-mid transition-all duration-200 outline-none
    ${error 
      ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
      : 'border-border/85 focus:border-primary focus:ring-4 focus:ring-primary-light'
    }`;

  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-text-dark uppercase tracking-wider">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={inputBaseStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputBaseStyle}
        />
      )}

      {error ? (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      ) : helpText ? (
        <p className="text-xs text-text-muted mt-1">{helpText}</p>
      ) : null}
    </div>
  );
}
