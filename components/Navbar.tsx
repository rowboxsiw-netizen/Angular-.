import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'glass h-12 border-b border-zinc-200' : 'bg-transparent h-12'}`}>
      <div className="max-w-[1024px] mx-auto h-full px-4 flex items-center justify-between">
        <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity z-[110]">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.3051 8.3051 0 0 1 -1.0921 2.2614c-.6816.9922-1.3864 1.9772-2.4959 1.9772s-1.4647-.6486-2.7312-.6486c-1.2523 0-1.6493.6277-2.7161.6695a10.05 10.05 0 0 1 -2.3174-1.221c-1.4939-1.0718-2.6146-2.698-2.6146-4.739a5.2155 5.2155 0 0 1 1.0185-3.1165 4.3989 4.3989 0 0 1 3.3917-1.6112c1.0264 0 1.9366.67 2.6015.67s1.4286-.5573 2.5937-.6816a4.57 4.57 0 0 1 3.3523 1.781zm-3.6923-4.102a3.4682 3.4682 0 0 0 .8172-2.378 3.42 3.42 0 0 0 -2.25 1.157 3.1764 3.1764 0 0 0 -.8524 2.3087 2.6842 2.6842 0 0 0 2.2852-1.0877z" fill="currentColor"/>
          </svg>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[12px] font-normal opacity-80">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link to={item.label === 'Store' ? '/store' : '#'} className="hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 opacity-80 z-[110]">
          <Search size={16} className="cursor-pointer hover:opacity-100 hidden sm:block" />
          <ShoppingBag size={16} className="cursor-pointer hover:opacity-100" />
          <button 
            className="md:hidden cursor-pointer hover:opacity-100" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fully Scoped to Prevent Clashing */}
      <div className={`fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="pt-20 px-10 flex flex-col h-full">
          <ul className="flex flex-col gap-8 text-2xl font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.label === 'Store' ? '/store' : '/'} 
                  className="hover:text-zinc-500 block w-full transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;