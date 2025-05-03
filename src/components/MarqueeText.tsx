
import React, { useEffect, useRef } from 'react';

interface MarqueeTextProps {
  text: string;
  speed?: 'slow' | 'medium' | 'fast';
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ text, speed = 'medium' }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Get animation duration based on speed
  const getDuration = () => {
    switch(speed) {
      case 'slow': return '20s';
      case 'fast': return '10s';
      default: return '15s';
    }
  };

  useEffect(() => {
    // Pause animation when not visible in viewport for better performance
    if (!marqueeRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const marquee = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          marquee.style.animationPlayState = 'running';
        } else {
          marquee.style.animationPlayState = 'paused';
        }
      });
    });
    
    observer.observe(marqueeRef.current);
    
    return () => {
      if (marqueeRef.current) observer.unobserve(marqueeRef.current);
    };
  }, []);

  return (
    <div 
      className="bg-retro-yellow text-black py-1 overflow-hidden border-y-2 border-black my-8"
      role="marquee"
      aria-live="off"
      aria-label={text}
    >
      <div 
        ref={marqueeRef}
        className="whitespace-nowrap mono-text font-bold inline-block"
        style={{ animation: `marquee ${getDuration()} linear infinite` }}
      >
        {Array(5).fill(text).map((item, index) => (
          <span key={index} className="mx-4">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
