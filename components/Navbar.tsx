
import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass h-12 shadow-sm' : 'bg-transparent h-12'}`}>
      <div className="max-w-[1000px] mx-auto h-full px-4 flex items-center justify-between">
        {/* Apple Logo SVG */}
        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.3051 8.3051 0 0 1 -1.0921 2.2614c-.6816.9922-1.3864 1.9772-2.4959 1.9772s-1.4647-.6486-2.7312-.6486c-1.2523 0-1.6493.6277-2.7161.6695a10.05 10.05 0 0 1 -2.3174-1.221c-1.4939-1.0718-2.6146-2.698-2.6146-4.739a5.2155 5.2155 0 0 1 1.0185-3.1165 4.3989 4.3989 0 0 1 3.3917-1.6112c1.0264 0 1.9366.67 2.6015.67s1.4286-.5573 2.5937-.6816a4.57 4.57 0 0 1 3.3523 1.781zm-3.6923-4.102a3.4682 3.4682 0 0 0 .8172-2.378 3.42 3.42 0 0 0 -2.25 1.157 3.1764 3.1764 0 0 0 -.8524 2.3087 2.6842 2.6842 0 0 0 2.2852-1.0877z" fill="currentColor"/>
          </svg>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-[12px] font-normal opacity-80">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:opacity-100 transition-opacity">{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 opacity-80">
          <Search size={16} className="cursor-pointer hover:opacity-100" />
          <ShoppingBag size={16} className="cursor-pointer hover:opacity-100" />
          <Menu 
            size={18} 
            className="md:hidden cursor-pointer hover:opacity-100" 
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-end">
            <X size={24} className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="mt-8 flex flex-col gap-6 text-2xl font-semibold px-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-zinc-500" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
