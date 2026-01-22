import React from 'react';
import ProductHero from '../components/ProductHero';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const fullWidthProducts = PRODUCTS.filter(p => p.size === 'full');
  const gridProducts = PRODUCTS.filter(p => p.size === 'half');

  return (
    <>
      <div className="bg-zinc-50 py-3 text-center border-b border-zinc-200">
        <p className="text-xs md:text-sm text-zinc-700 px-4">
          Get $200–$650 in credit when you trade in iPhone 12 or higher. 
          <a href="#" className="text-blue-600 hover:underline ml-1 font-medium">Shop iPhone <span className="text-[10px]">→</span></a>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {fullWidthProducts.map(product => (
          <ProductHero key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 pb-3 mt-3">
        {gridProducts.map(product => (
          <ProductHero key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;