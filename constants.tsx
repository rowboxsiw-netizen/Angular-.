
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Store', href: '#' },
  { label: 'Mac', href: '#' },
  { label: 'iPad', href: '#' },
  { label: 'iPhone', href: '#' },
  { label: 'Watch', href: '#' },
  { label: 'Vision', href: '#' },
  { label: 'AirPods', href: '#' },
  { label: 'TV & Home', href: '#' },
  { label: 'Entertainment', href: '#' },
  { label: 'Support', href: '#' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    tagline: 'Hello, Apple Intelligence.',
    description: 'Built for Apple Intelligence. Professional performance and pro camera system.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1200',
    price: 'From $999 or $41.62/mo. for 24 mo.',
    theme: 'dark',
    size: 'full'
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    tagline: 'All-new Camera Control. A total pro.',
    description: 'More power. More pixels. More possibilities.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1200',
    price: 'From $799 or $33.29/mo. for 24 mo.',
    theme: 'light',
    size: 'full'
  },
  {
    id: 'apple-watch-10',
    name: 'WATCH',
    tagline: 'SERIES 10',
    description: 'Thinner. Smarter. Bigger.',
    image: 'https://images.unsplash.com/photo-1434493907317-a46b53b81882?auto=format&fit=crop&q=80&w=600',
    price: 'From $399',
    theme: 'light',
    size: 'half'
  },
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    tagline: 'Unbelievably thin. Incredibly powerful.',
    description: 'With the M4 chip and OLED display.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    price: 'From $999',
    theme: 'dark',
    size: 'half'
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air',
    tagline: 'Lean. Mean. M3 machine.',
    description: 'Designed to go places.',
    image: 'https://images.unsplash.com/photo-1517336714460-4c5040097471?auto=format&fit=crop&q=80&w=600',
    price: 'From $1099',
    theme: 'light',
    size: 'half'
  },
  {
    id: 'apple-vision-pro',
    name: 'Vision Pro',
    tagline: 'Welcome to the era of spatial computing.',
    description: 'The world\'s first spatial operating system.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=600',
    price: 'From $3499',
    theme: 'dark',
    size: 'half'
  }
];
