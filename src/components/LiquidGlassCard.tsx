import React from 'react';
import { cn } from '../utils/cn';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <div
      className={cn(
        // Base glass effect
        'backdrop-blur-xl bg-white/10',
        // Borders with gradient
        'border border-white/20',
        // Rounded corners
        'rounded-3xl',
        // Shadow effects
        'shadow-2xl shadow-black/20',
        // Hover effects
        hover &&
          'hover:bg-white/15 hover:border-white/30 hover:shadow-3xl hover:shadow-black/30',
        // Transition
        'transition-all duration-500 ease-out',
        // Transform on hover
        hover && 'hover:scale-[1.02] hover:-translate-y-1',
        // Additional glass styling
        'relative overflow-hidden',
        // Custom class
        className
      )}
    >
      {/* Gradient overlay for more glass effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl' />

      {/* Subtle inner shadow */}
      <div className='absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none' />

      {/* Content */}
      <div className='relative z-10'>{children}</div>

      {/* Animated light reflection */}
      <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none'>
        <div className='absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 animate-[slide_3s_ease-in-out_infinite] rounded-3xl' />
      </div>
    </div>
  );
};

export default LiquidGlassCard;
