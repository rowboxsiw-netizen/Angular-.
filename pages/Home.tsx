import React from 'react';
import ProductHero from '../components/ProductHero';
import BentoGrid from '../components/BentoGrid';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fullWidthProducts = PRODUCTS.filter(p => p.size === 'full');
  const bentoProducts = PRODUCTS.filter(p => p.size === 'half');

  return (
    <div className="bg-white">
      {/* Dynamic Promo Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-zinc-50 py-4 text-center border-b border-zinc-200 sticky top-12 z-40"
      >
        <p className="text-[12px] md:text-sm text-zinc-700 font-normal px-4">
          iPhone 16 Pro is here. <span className="font-semibold">Built for Apple Intelligence.</span> 
          <a href="/store" className="text-blue-600 hover:underline ml-2">Buy now →</a>
        </p>
      </motion.div>

      {/* Hero Section */}
      <div className="flex flex-col gap-4">
        {fullWidthProducts.map((product, idx) => (
          <ProductHero key={product.id} product={product} />
        ))}
      </div>

      {/* Feature Section Title */}
      <div className="py-16 md:py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Technology that moves you.
        </motion.h2>
        <p className="text-xl md:text-2xl text-zinc-500 font-medium">
          Explore the latest innovations in spatial computing, professional photography, and silicon excellence.
        </p>
      </div>

      {/* Bento Layout Grid */}
      <BentoGrid products={bentoProducts} />

      {/* Bottom Showcase */}
      <section className="bg-black py-24 px-4 text-white text-center mt-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">AirPods Max</h2>
          <p className="text-2xl text-zinc-400 mb-12">The ultimate listening experience. Now in fresh colors.</p>
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200" 
            alt="AirPods Max" 
            className="w-full h-[400px] object-contain rounded-3xl mb-12"
          />
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-zinc-200 transition-all">
            Shop Audio
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;