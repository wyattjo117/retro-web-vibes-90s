
import React from 'react';

const RetroFooter: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 text-center">
      <div className="max-w-md mx-auto">
        <p className="mono-text text-sm mb-2">
          Best viewed with Netscape Navigator or Internet Explorer 6.0
        </p>
        <p className="mono-text text-xs">
          © {year} • Made with 
          <span className="text-red-500 mx-1">♥</span> 
          and 
          <span className="text-retro-purple mx-1">Lovable AI</span>
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="px-2 py-1 bg-black text-white text-xs mono-text">HTML 4.0</div>
          <div className="px-2 py-1 bg-black text-white text-xs mono-text">CSS 1.0</div>
          <div className="px-2 py-1 bg-black text-white text-xs mono-text">JAVASCRIPT</div>
        </div>
        <div className="mt-4">
          <div className="text-xs mono-text">
            <span className="animate-blink inline-block">▌</span> Visitors: 000001
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;
