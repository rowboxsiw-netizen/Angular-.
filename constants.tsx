import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Store', href: '/store' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'Vision', href: '/vision' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV & Home', href: '/tv-home' },
  { label: 'Support', href: '/support' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    tagline: 'Hello, Apple Intelligence.',
    description: 'Built for Apple Intelligence. Professional performance and pro camera system.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1600',
    price: 999,
    priceFormatted: 'From $999',
    theme: 'dark',
    size: 'full',
    category: 'iPhone',
    features: ['A18 Pro chip', 'Grade 5 Titanium', '4K 120 fps Dolby Vision'],
    colors: ['#3b3b3b', '#e3e3e3', '#d4af37'],
    highlights: [
      {
        title: "Apple Intelligence",
        description: "The first AI system designed to be personal and private.",
        image: "https://images.unsplash.com/photo-1556656793-062ff987b50c?auto=format&fit=crop&q=80&w=800",
        alignment: "left"
      }
    ]
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro',
    tagline: 'Mind-blowing. Head-turning.',
    description: 'The most advanced chips ever built for a personal computer.',
    image: 'https://images.unsplash.com/photo-1517336714460-4c5040097471?auto=format&fit=crop&q=80&w=1600',
    price: 1599,
    priceFormatted: 'From $1,599',
    theme: 'dark',
    size: 'full',
    category: 'Mac',
    features: ['M3, M3 Pro, M3 Max', 'Up to 22h battery', 'Liquid Retina XDR']
  },
  {
    id: 'apple-watch-10',
    name: 'Apple Watch Series 10',
    tagline: 'Thinner. Smarter. Bigger.',
    description: 'A milestone in every sense. The largest display ever on an Apple Watch.',
    image: 'https://images.unsplash.com/photo-1434493907317-a46b53b81882?auto=format&fit=crop&q=80&w=800',
    price: 399,
    priceFormatted: 'From $399',
    theme: 'light',
    size: 'half',
    category: 'Watch'
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro',
    tagline: 'Thinpossible.',
    description: 'M4 chip. Ultra Retina XDR display. Incredible speed in a impossibly thin design.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    price: 999,
    priceFormatted: 'From $999',
    theme: 'dark',
    size: 'half',
    category: 'iPad'
  }
];