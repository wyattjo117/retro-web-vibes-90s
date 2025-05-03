
import React, { useMemo } from 'react';

interface RetroPatternProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

const RetroPattern: React.FC<RetroPatternProps> = ({ className = '', density = 'medium' }) => {
  // Generate pattern elements based on density
  const patternElements = useMemo(() => {
    const elements = [];
    const count = density === 'low' ? 5 : density === 'medium' ? 8 : 12;
    
    for (let i = 0; i < count; i++) {
      const type = i % 3;
      const size = Math.floor(Math.random() * 16) + 8;
      const positionTop = `${Math.floor(Math.random() * 80) + 10}%`;
      const positionLeft = `${Math.floor(Math.random() * 80) + 10}%`;
      const animationDelay = `${Math.random() * 2}s`;
      
      if (type === 0) {
        elements.push(
          <div 
            key={`circle-${i}`}
            className="absolute rounded-full opacity-50 animate-float"
            style={{
              top: positionTop,
              left: positionLeft,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 2 === 0 ? '#ffd400' : '#ff6ac1',
              animationDelay
            }}
            aria-hidden="true"
          />
        );
      } else if (type === 1) {
        elements.push(
          <div 
            key={`rect-${i}`}
            className="absolute opacity-50 animate-bounce-slow"
            style={{
              top: positionTop,
              left: positionLeft,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 2 === 0 ? '#00fff9' : '#9b87f5',
              animationDelay,
              transform: `rotate(${Math.floor(Math.random() * 45)}deg)`
            }}
            aria-hidden="true"
          />
        );
      } else {
        elements.push(
          <div 
            key={`zigzag-${i}`}
            className="absolute w-36 zigzag"
            style={{
              top: positionTop,
              left: positionLeft,
              opacity: 0.6,
              transform: `rotate(${Math.floor(Math.random() * 360)}deg)`
            }}
            aria-hidden="true"
          />
        );
      }
    }
    
    return elements;
  }, [density]);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {patternElements}
    </div>
  );
};

export default RetroPattern;
