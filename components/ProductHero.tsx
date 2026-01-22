
import React from 'react';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';

interface ProductHeroProps {
  product: Product;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const isDark = product.theme === 'dark';
  const isFull = product.size === 'full';

  return (
    <section className={`relative overflow-hidden ${isFull ? 'h-[92vh] mb-3' : 'h-[580px]'} ${isDark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-black'} flex flex-col items-center text-center pt-16 group`}>
      <div className="z-10 px-4 max-w-2xl animate-fade-up">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 ${product.id === 'iphone-16-pro' ? 'tracking-tight' : ''}`}>
          {product.name}
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-normal mb-4">
          {product.tagline}
        </h3>
        <p className="text-zinc-500 text-lg md:text-xl font-light mb-6">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Learn more
          </button>
          <button className="text-blue-600 hover:underline flex items-center group/btn font-medium">
            Buy <ChevronRight size={18} className="mt-0.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className={`mt-auto w-full transition-transform duration-700 group-hover:scale-[1.02] ${isFull ? 'h-3/5' : 'h-1/2'}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ProductHero;
