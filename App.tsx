import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        {/* Support for other pages could be added here */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;