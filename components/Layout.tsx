import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GeminiConcierge from './GeminiConcierge';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 mt-12 overflow-hidden">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-[300]">
        <GeminiConcierge />
      </div>
    </div>
  );
};

export default Layout;