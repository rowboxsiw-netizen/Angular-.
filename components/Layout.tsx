import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GeminiConcierge from './GeminiConcierge';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex-1 pt-12">
        {children}
      </div>
      <Footer />
      <GeminiConcierge />
    </div>
  );
};

export default Layout;