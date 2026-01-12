import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import DistributorsPage from './pages/DistributorsPage';
import RecognitionPage from './pages/RecognitionPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-700 font-sans flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <ScrollToTop />
      <main className="flex-grow min-h-[600px] bg-slate-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/distributors" element={<DistributorsPage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all route to redirect back home if any path is missing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;