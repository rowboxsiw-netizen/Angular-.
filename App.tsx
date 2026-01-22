
import React from 'react';
import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import GeminiConcierge from './components/GeminiConcierge';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const fullWidthProducts = PRODUCTS.filter(p => p.size === 'full');
  const gridProducts = PRODUCTS.filter(p => p.size === 'half');

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Promotion Bar */}
      <div className="bg-zinc-50 pt-12 pb-3 text-center border-b border-zinc-200">
        <p className="text-xs md:text-sm text-zinc-700">
          Get $200–$650 in credit when you trade in iPhone 12 or higher. 
          <a href="#" className="text-blue-600 hover:underline ml-1">Shop iPhone <span className="text-[10px]">→</span></a>
        </p>
      </div>

      {/* Main Product Showcase */}
      <div className="flex flex-col gap-3">
        {fullWidthProducts.map(product => (
          <ProductHero key={product.id} product={product} />
        ))}
      </div>

      {/* Secondary Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 pb-3">
        {gridProducts.map(product => (
          <ProductHero key={product.id} product={product} />
        ))}
      </div>

      {/* Footer (Minimal Apple Style) */}
      <footer className="bg-[#f5f5f7] text-zinc-500 py-16 px-4">
        <div className="max-w-[1000px] mx-auto text-[12px]">
          <div className="space-y-4 mb-8 border-b border-zinc-300 pb-8">
            <p>1. Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit.</p>
            <p>2. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update this fall.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="space-y-2">
              <h5 className="font-bold text-zinc-800">Shop and Learn</h5>
              <ul className="space-y-1">
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-zinc-800">Apple Wallet</h5>
              <ul className="space-y-1">
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-zinc-800">Account</h5>
              <ul className="space-y-1">
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-zinc-800">Apple Values</h5>
              <ul className="space-y-1">
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-300 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </footer>

      <GeminiConcierge />
    </main>
  );
};

export default App;
