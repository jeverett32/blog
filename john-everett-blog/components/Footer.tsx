import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20 pb-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
             <div className="font-masthead text-3xl mb-6">The John Everett</div>
             <nav className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-[Plus Jakarta Sans] font-bold uppercase tracking-widest text-gray-500">
                <a href="#" className="hover:text-black">Home</a>
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Portfolio</a>
                <a href="#" className="hover:text-black">Contact</a>
             </nav>
             <p className="text-gray-400 text-xs font-serif italic">
                 © {new Date().getFullYear()} John Everett. All rights reserved. 
                 <br className="sm:hidden"/> 
                 Built with React, Tailwind & Typography.
             </p>
        </div>
    </footer>
  );
};

export default Footer;