import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BentoGridProps {
  products: Product[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4">
      {products.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.1 }}
          className={`relative h-[550px] md:h-[600px] overflow-hidden rounded-[2.5rem] group ${
            product.theme === 'dark' ? 'bg-black text-white' : 'bg-[#f5f5f7] text-zinc-900'
          }`}
        >
          <div className="absolute top-12 left-0 right-0 z-10 text-center px-6">
            <h4 className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">{product.category}</h4>
            <h3 className="text-3xl md:text-4xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg md:text-xl font-normal opacity-90 max-w-sm mx-auto mb-6">
              {product.tagline}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Learn more
              </Link>
              <Link to="/store" className="text-blue-600 hover:underline flex items-center gap-1 font-medium text-sm">
                Buy <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          
          <div className="absolute inset-0 w-full h-full pt-48 flex items-end">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;