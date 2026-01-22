import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GeminiConcierge from './GeminiConcierge';
import CartDrawer from './CartDrawer';
import { CartProvider } from '../context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-blue-500 selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 mt-12">
          {children}
        </main>
        <Footer />
        <GeminiConcierge />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Layout;