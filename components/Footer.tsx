import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-zinc-500 py-16 px-4">
      <div className="max-w-[1000px] mx-auto text-[12px]">
        <div className="space-y-4 mb-8 border-b border-zinc-300 pb-8 leading-relaxed">
          <p>1. Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device.</p>
          <p>2. Apple Intelligence available in beta on iPhone 16 models with iOS 18 update.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="space-y-4">
            <h5 className="font-bold text-zinc-800">Shop and Learn</h5>
            <ul className="space-y-2">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-zinc-800">Apple Wallet</h5>
            <ul className="space-y-2">
              <li>Wallet</li>
              <li>Apple Card</li>
              <li>Apple Pay</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-zinc-800">Account</h5>
            <ul className="space-y-2">
              <li>Manage Apple ID</li>
              <li>Store Account</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-zinc-800">Apple Values</h5>
            <ul className="space-y-2">
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-300 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;