import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GeminiConcierge from './GeminiConcierge';

interface LayoutProps {
  children: React.ReactNode;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 mt-12">
        {children}
      </main>
      <Footer />
      <GeminiConcierge />
    </div>
  );
};

export default Layout;