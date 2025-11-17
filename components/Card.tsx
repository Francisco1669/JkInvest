import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white',
    elevated: 'bg-white shadow-xl',
    bordered: 'bg-white border-2 border-gray-100',
  };

  return (
    <div className={`rounded-xl p-8 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
