import React from 'react';
import { Apple } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-zinc-500 py-12 md:py-20 px-6 font-medium" role="contentinfo">
      <div className="max-w-[1024px] mx-auto text-[11px] md:text-[12px]">
        {/* Footnotes */}
        <div className="space-y-4 mb-10 border-b border-zinc-300 pb-10 leading-relaxed text-zinc-400">
          <p>1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit.</p>
          <p>2. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update this fall.</p>
          <p>3. Subscription required for Apple TV+. New subscribers only. Monthly fee after trial expires.</p>
        </div>
        
        {/* Sitemap Path */}
        <div className="flex items-center gap-2 mb-10 text-zinc-800">
          <Apple size={16} /> <span className="opacity-40">/</span> <span>Apple Store Online</span>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 mb-12">
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-zinc-800 mb-3">Shop and Learn</h5>
              <ul className="space-y-2 hover:children:underline">
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Vision</a></li>
                <li><a href="#">AirPods</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-zinc-800 mb-3">Apple Wallet</h5>
              <ul className="space-y-2">
                <li><a href="#">Wallet</a></li>
                <li><a href="#">Apple Card</a></li>
                <li><a href="#">Apple Pay</a></li>
                <li><a href="#">Apple Cash</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-zinc-800 mb-3">Account</h5>
              <ul className="space-y-2">
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-zinc-800 mb-3">Entertainment</h5>
              <ul className="space-y-2">
                <li><a href="#">Apple One</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Fitness+</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-zinc-800 mb-3">Apple Values</h5>
              <ul className="space-y-2">
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Environment</a></li>
                <li><a href="#">Inclusion and Diversity</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-zinc-300 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-zinc-800">
              <a href="#" className="hover:underline pr-3 border-r border-zinc-300 leading-none">Privacy Policy</a>
              <a href="#" className="hover:underline pr-3 border-r border-zinc-300 leading-none">Terms of Use</a>
              <a href="#" className="hover:underline pr-3 border-r border-zinc-300 leading-none">Sales and Refunds</a>
              <a href="#" className="hover:underline">Legal</a>
            </div>
          </div>
          <div className="text-zinc-800">United States</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;