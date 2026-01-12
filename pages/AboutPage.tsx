import React from 'react';
import AboutUs from '../components/AboutUs';
import Recognition from '../components/Recognition';
import CallToActionBanner from '../components/CallToActionBanner';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Our Company</h1>
        <p className="text-blue-300 text-lg max-w-2xl mx-auto px-4">Building trust through quality materials and exceptional service since inception.</p>
      </div>
      <AboutUs />
      <Recognition />
      <CallToActionBanner />
    </div>
  );
};

export default AboutPage;