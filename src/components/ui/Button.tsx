import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-xl font-medium transition-colors',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-white text-gray-900 hover:bg-gray-50': variant === 'secondary',
          'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50': variant === 'outline',
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-3 text-base': size === 'md',
          'px-6 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}