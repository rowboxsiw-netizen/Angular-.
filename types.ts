
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
  theme: 'light' | 'dark';
  size: 'full' | 'half';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
