
import React from 'react';

interface RetroPatternProps {
  className?: string;
}

const RetroPattern: React.FC<RetroPatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {/* Memphis-style patterns */}
      <div className="absolute top-[10%] left-[5%] w-8 h-8 rounded-full bg-retro-yellow opacity-50 animate-float"></div>
      <div className="absolute top-[20%] right-[15%] w-12 h-12 bg-retro-cyan opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-[30%] left-[25%] w-10 h-10 rounded-sm bg-retro-pink opacity-50 animate-bounce-slow"></div>
      <div className="absolute top-[40%] right-[30%] w-8 h-24 rounded-md bg-retro-purple opacity-20 animate-pulse"></div>
      
      {/* Squiggly lines */}
      <div className="absolute top-[10%] right-[10%] w-36 zigzag"></div>
      <div className="absolute bottom-[15%] left-[5%] w-36 zigzag"></div>
    </div>
  );
};

export default RetroPattern;
