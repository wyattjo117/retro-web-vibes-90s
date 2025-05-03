
import React, { useState, useEffect } from 'react';

interface TrailDot {
  x: number;
  y: number;
  size: number;
  id: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const addDot = () => {
      const newDot: TrailDot = {
        x: mousePos.x,
        y: mousePos.y,
        size: Math.random() * 15 + 5,
        id: counter,
      };
      
      setCounter(prev => prev + 1);
      setTrail(prev => [...prev, newDot]);
      
      setTimeout(() => {
        setTrail(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 800);
    };

    const interval = setInterval(addDot, 100);
    return () => clearInterval(interval);
  }, [mousePos, counter]);

  return (
    <>
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
