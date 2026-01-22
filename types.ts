export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
  theme: 'light' | 'dark';
  size: 'full' | 'half' | 'bento-large' | 'bento-small';
  category: 'iPhone' | 'Mac' | 'iPad' | 'Watch' | 'Vision' | 'Audio';
  features?: string[];
  colors?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}