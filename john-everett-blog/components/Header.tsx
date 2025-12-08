import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <header className="flex flex-col w-full border-b-4 border-black mb-8 bg-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center py-1 px-4 sm:px-8 border-b border-gray-200 text-[11px] font-[Plus Jakarta Sans] uppercase tracking-widest text-gray-500">
        <div className="flex items-center gap-4">
           <span className="font-bold text-gray-900">{currentDate}</span>
           <span>Today's Paper</span>
        </div>
        <div className="flex items-center gap-4">
            <a href="https://johnreverett.com" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
            <a href="https://github.com/jeverett32" className="hover:text-[#D4AF37] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/johneverett32" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Masthead */}
      <div className="py-6 sm:py-10 flex flex-col items-center justify-center relative">
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 md:hidden">
            <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        
        <a href="/" className="text-4xl sm:text-6xl md:text-8xl font-masthead font-black tracking-tight text-black text-center px-4 leading-none">
          The John Everett
        </a>
        <div className="mt-2 flex items-center gap-3">
             <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
             <span className="font-serif italic text-sm sm:text-lg text-gray-500">Engineering & Analytics</span>
             <div className="h-px w-8 sm:w-16 bg-gray-300"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-gray-200 py-3 hidden md:block sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <ul className="flex justify-center items-center gap-8 lg:gap-12 text-xs font-[Plus Jakarta Sans] font-bold uppercase tracking-widest text-gray-700">
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Software</li>
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Data Science</li>
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Systems</li>
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Design</li>
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Case Studies</li>
            <li className="cursor-pointer hover:text-[#D4AF37] transition-colors">Opinions</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;