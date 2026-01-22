export type Category = 'iPhone' | 'Mac' | 'iPad' | 'Watch' | 'Vision' | 'Audio' | 'TV & Home';

export interface TechSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  image: string;
  alignment: 'left' | 'right' | 'center';
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  priceFormatted: string;
  theme: 'light' | 'dark';
  size: 'full' | 'half' | 'bento-large' | 'bento-small';
  category: Category;
  features?: string[];
  colors?: string[];
  highlights?: FeatureHighlight[];
  specs?: TechSpec[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
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