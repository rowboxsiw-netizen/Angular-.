import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/mac" element={<Store />} />
        <Route path="/iphone" element={<Store />} />
        <Route path="/ipad" element={<Store />} />
        <Route path="/watch" element={<Store />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;