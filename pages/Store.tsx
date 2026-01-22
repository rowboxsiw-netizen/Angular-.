import React from 'react';
import { PRODUCTS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Store: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-12">
        Store. <span className="text-zinc-500 italic">The best way to buy the products you love.</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="h-48 overflow-hidden bg-zinc-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{product.price.split(' ')[1]}</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;