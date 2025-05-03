
import React from 'react';

interface RetroHeaderProps {
  title: string;
  subtitle?: string;
  glowEffect?: boolean;
}

const RetroHeader: React.FC<RetroHeaderProps> = ({ title, subtitle, glowEffect = true }) => {
  return (
    <div className="text-center mb-12 relative" role="banner">
      <div className="hidden md:block absolute -top-3 left-0 right-0 h-1 zigzag opacity-70"></div>
      
      <h1 
        className={`pixel-text text-4xl md:text-6xl font-bold text-retro-purple mb-4 ${
          glowEffect ? 'text-shadow animate-bounce-slow' : ''
        }`}
        aria-label={title}
      >
        <span className="sr-only">Title: </span>
        {title.split('').map((char, i) => (
          <span 
            key={i} 
            className="inline-block hover:scale-110 hover:text-retro-pink transition-all duration-200"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
      
      {subtitle && (
        <p className="retro-text text-2xl md:text-3xl text-retro-teal" aria-live="polite">
          <span className="sr-only">Subtitle: </span>
          {subtitle}
          <span className="inline-block ml-1 animate-blink">_</span>
        </p>
      )}
      
      <div className="max-w-sm mx-auto my-6 h-2 bg-gradient-to-r from-retro-pink via-retro-purple to-retro-teal"></div>
    </div>
  );
};

export default RetroHeader;
