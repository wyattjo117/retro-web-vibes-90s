
import React, { useState, useEffect } from 'react';
import CursorTrail from '@/components/CursorTrail';
import RetroPattern from '@/components/RetroPattern';
import RetroHeader from '@/components/RetroHeader';
import LoginForm from '@/components/LoginForm';
import RetroFooter from '@/components/RetroFooter';
import MarqueeText from '@/components/MarqueeText';
import { Toaster } from '@/components/ui/sonner';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [visualEffects, setVisualEffects] = useState(true);
  const [retroLevel, setRetroLevel] = useState([50]);
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    // Simulate loading for retro feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate visitor count incrementing
    const randomVisitorCount = Math.floor(Math.random() * 10000) + 1000;
    setVisitorCount(randomVisitorCount);
  }, []);

  const handleRetroLevelChange = (value: number[]) => {
    setRetroLevel(value);
    const retroMessages = [
      "Totally radical retro vibes!",
      "Dial-up internet nostalgia activated!",
      "You've unlocked premium GeoCities powers!",
      "Now you're surfing like it's 1999!"
    ];
    
    toast(retroMessages[Math.floor(Math.random() * retroMessages.length)], {
      duration: 3000,
    });
  };
  
  const patternDensity = retroLevel[0] < 30 ? 'low' : retroLevel[0] > 70 ? 'high' : 'medium';

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[url('data:image/svg+xml,%3Csvg width=52 height=26 viewBox=0 0 52 26 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.1%3E%3Cpath d=M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
        <div className="pixel-text text-xl mb-4">Loading</div>
        <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-retro-purple transition-all" 
            style={{ width: `${Math.min((Date.now() % 1500) / 15, 100)}%` }}
          ></div>
        </div>
        <div className="mt-2 mono-text text-sm animate-pulse">Please wait while we initialize your retro experience...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Toaster position="top-center" />
      {visualEffects && <CursorTrail />}
      <RetroPattern density={patternDensity} />
      
      <div className="container mx-auto px-4 py-12">
        <RetroHeader 
          title="WELCOME TO THE WEB" 
          subtitle="A Nostalgic Journey"
          glowEffect={visualEffects}
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
              
              {/* Added visual controls panel */}
              <div className="bg-white border-2 border-black p-4 mt-6 mb-4">
                <h3 className="pixel-text text-lg mb-4 text-retro-purple">RETRO CONTROL PANEL</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="visual-effects" className="mono-text text-sm">
                      Visual Effects
                    </label>
                    <Switch 
                      id="visual-effects"
                      checked={visualEffects}
                      onCheckedChange={setVisualEffects}
                      className="data-[state=checked]:bg-retro-purple"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="retro-level" className="mono-text text-sm">
                      Retro Level: {retroLevel[0]}%
                    </label>
                    <Slider
                      id="retro-level"
                      defaultValue={retroLevel}
                      max={100}
                      step={1}
                      onValueChange={handleRetroLevelChange}
                      className="[&>.absolute]:bg-retro-purple"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  className="retro-button"
                  onClick={() => toast("Exploring the retro web!")}
                >
                  Explore
                </button>
                <button 
                  className="bg-white text-retro-purple font-bold py-2 px-4 border-2 border-black hover:bg-gray-100 active:translate-y-0.5 active:translate-x-0.5 transition-transform"
                  onClick={() => toast("About section coming soon!")}
                >
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

        <MarqueeText 
          text="⚡ WELCOME TO THE AMAZING WORLD OF THE WEB ⚡ UNDER CONSTRUCTION ⚡ PLEASE SIGN IN ⚡" 
          speed="medium"
        />
        
        <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['FAST', 'SECURE', 'RETRO'].map((item, i) => (
            <div 
              key={i} 
              className="retro-card p-6 text-center hover:translate-y-[-5px] transition-transform cursor-pointer"
              onClick={() => toast(`${item} feature activated!`)}
            >
              <div className="bg-retro-yellow h-1 mb-3 w-1/3 mx-auto"></div>
              <h3 className="retro-text text-2xl mb-3 text-retro-purple">{item}</h3>
              <p className="mono-text text-sm">
                Experience the {item.toLowerCase()} features of our platform. 
                Just like the good old days, but better!
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <div className="inline-block bg-black text-white pixel-text px-4 py-2">
            <span className="animate-blink inline-block mr-2">▌</span> 
            Visitors: {String(visitorCount).padStart(6, '0')}
          </div>
        </div>

        <RetroFooter />
      </div>
    </div>
  );
};

export default Index;
