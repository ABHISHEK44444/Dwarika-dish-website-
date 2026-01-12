import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Distributorships from '../components/Distributorships';
import CallToActionBanner from '../components/CallToActionBanner';
import Subscribe from '../components/Subscribe';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <Products />
      <Distributorships />
      <CallToActionBanner />
      <Subscribe />
    </div>
  );
};

export default HomePage;