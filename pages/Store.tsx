import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Apple } from 'lucide-react';

const Store: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'iPhone', 'Mac', 'iPad', 'Watch', 'Audio'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#f5f5f7] min-h-screen pt-16 pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 leading-tight mb-4">
              Store. <span className="text-zinc-400">The best way to buy the products you love.</span>
            </h1>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-sm font-bold flex items-center justify-end gap-2 mb-2 text-zinc-800">
              <Apple size={16} /> Need help?
            </p>
            <p className="text-blue-600 text-sm hover:underline cursor-pointer">Ask a Specialist</p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm border ${
                activeCategory === cat 
                ? 'bg-black text-white border-black scale-105' 
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={product.id}
              className="bg-white rounded-[2rem] p-8 group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">{product.category}</span>
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm mb-8 line-clamp-2 h-10">{product.description}</p>
                <div className="h-48 mb-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-zinc-100 pt-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">Starting from</span>
                  <span className="text-xl font-bold text-zinc-900">{product.price}</span>
                </div>
                <button className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 group-hover:scale-110">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center bg-white rounded-[3rem] border border-dashed border-zinc-200">
            <h3 className="text-2xl font-semibold text-zinc-400">No products found in this category.</h3>
            <button onClick={() => setActiveCategory('All')} className="mt-4 text-blue-600 hover:underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;