
import React, { useState, useEffect } from 'react';
import CursorTrail from '@/components/CursorTrail';
import RetroPattern from '@/components/RetroPattern';
import RetroHeader from '@/components/RetroHeader';
import LoginForm from '@/components/LoginForm';
import RetroFooter from '@/components/RetroFooter';
import MarqueeText from '@/components/MarqueeText';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for retro feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="pixel-text text-xl mb-4">Loading...</div>
        <div className="w-64 h-4 bg-gray-200 rounded overflow-hidden">
          <div 
            className="h-full bg-retro-purple transition-all" 
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="mt-2 mono-text text-sm animate-pulse">Please wait...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Toaster position="top-center" />
      <CursorTrail />
      <RetroPattern />
      
      <div className="container mx-auto px-4 py-12">
        <RetroHeader 
          title="WELCOME TO THE WEB" 
          subtitle="A Nostalgic Journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="retro-text text-3xl text-retro-teal">Welcome to the 90's</h2>
              <p className="mono-text">
                Experience the golden era of the internet with our retro-inspired web design. 
                Back when websites had personality, visitor counters, and those cool 
                "under construction" GIFs.
              </p>
              <div className="flex gap-4">
                <button className="retro-button">
                  Explore
                </button>
                <button className="bg-white text-retro-purple font-bold py-2 px-4 border-2 border-black hover:bg-gray-100">
                  About
                </button>
              </div>
              
              <div className="border-2 border-dashed border-retro-pink p-4 bg-white">
                <p className="mono-text text-sm">
                  <span className="text-retro-purple font-bold">&lt;NEW&gt;</span> Just launched! 
                  Check out our cool features and join the nostalgia trip.
                  <span className="text-retro-purple font-bold">&lt;/NEW&gt;</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <LoginForm />
          </div>
        </div>

        <MarqueeText text="⚡ WELCOME TO THE AMAZING WORLD OF THE WEB ⚡ UNDER CONSTRUCTION ⚡ PLEASE SIGN IN ⚡" />
        
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['FAST', 'SECURE', 'RETRO'].map((item, i) => (
            <div key={i} className="retro-card p-6 text-center">
              <h3 className="retro-text text-2xl mb-3 text-retro-purple">{item}</h3>
              <p className="mono-text text-sm">
                Experience the {item.toLowerCase()} features of our platform. 
                Just like the good old days, but better!
              </p>
            </div>
          ))}
        </div>

        <RetroFooter />
      </div>
    </div>
  );
};

export default Index;
