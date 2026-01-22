import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Plus, Apple, Cpu, Battery, Camera, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (!found) {
      navigate('/');
      return;
    }
    setProduct(found);
    if (found.colors) setSelectedColor(found.colors[0]);
  }, [id, navigate]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  if (!product) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Top Bar for Detail Page */}
      <div className="sticky top-12 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200 py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-sm text-zinc-500 font-medium">{product.priceFormatted}</span>
            <button 
              onClick={() => addToCart(product, selectedColor)}
              className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero Visual */}
      <section className="pt-24 pb-12 px-6 flex flex-col items-center text-center">
        <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">New</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">{product.name}</h1>
          <p className="text-2xl md:text-3xl text-zinc-500 font-medium mb-12">{product.tagline}</p>
        </motion.div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-6xl h-[400px] md:h-[600px] overflow-hidden rounded-[3rem] bg-zinc-50 p-8 flex items-center justify-center"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Dynamic Feature Showcase */}
      <section className="py-32 px-6 bg-zinc-950 text-white rounded-[4rem] mx-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Designed for Apple Intelligence.
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Personal, private, and powerful. It’s the next generation of how you interact with your most personal device. Built with privacy from the ground up.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <Cpu className="text-purple-400" size={32} />
                  <h4 className="font-bold">Pro chip</h4>
                  <p className="text-zinc-500 text-sm">Our fastest ever.</p>
                </div>
                <div className="space-y-2">
                  <Battery className="text-green-400" size={32} />
                  <h4 className="font-bold">All-day life</h4>
                  <p className="text-zinc-500 text-sm">Up to 33 hours.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full absolute inset-0 blur-3xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800" 
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl"
                alt="Intelligence feature"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tech Specs.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              { icon: Cpu, label: 'Processor', value: 'A18 Pro chip with 6-core GPU' },
              { icon: Camera, label: 'Camera', value: '48MP Fusion and 5x Telephoto' },
              { icon: Battery, label: 'Battery', value: 'Up to 33 hours video playback' },
              { icon: ShieldCheck, label: 'Safety', value: 'Crash Detection & SOS via Satellite' }
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start pb-8 border-b border-zinc-100"
              >
                <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <spec.icon size={24} className="text-zinc-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">{spec.label}</h4>
                  <p className="text-lg font-semibold text-zinc-900">{spec.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;