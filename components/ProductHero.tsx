import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';

interface ProductHeroProps {
  product: Product;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const isDark = product.theme === 'dark';

  return (
    <section className={`relative min-h-[90vh] overflow-hidden flex flex-col items-center text-center justify-between group ${
      isDark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-black'
    }`}>
      {/* Content */}
      <div className="z-10 px-6 pt-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
            {product.name}
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-6 opacity-90">
            {product.tagline}
          </h3>
          <p className={`text-lg md:text-xl font-normal mb-8 max-w-xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {product.description}
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20">
              Learn more
            </button>
            <button className="text-blue-600 hover:underline flex items-center group/btn font-semibold text-lg">
              Buy <ChevronRight size={20} className="mt-0.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Visual Asset */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full max-h-[500px] mt-8 overflow-hidden pointer-events-none"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[4s]"
        />
      </motion.div>

      {/* Background visual flair for dark mode */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(60,60,60,0.5),transparent_60%)]"></div>
      )}
    </section>
  );
};

export default ProductHero;