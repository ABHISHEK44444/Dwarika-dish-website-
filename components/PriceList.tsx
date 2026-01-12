
import React from 'react';
import SectionTitle from './SectionTitle';

const PriceList: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Price List</SectionTitle>
        <div className="text-center text-slate-600 max-w-2xl mx-auto">
          <p className="mb-8">Our latest price list is available for download. Please contact us for a detailed quote for your specific needs, as prices may vary based on quantity and specifications.</p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:-translate-y-1">
            Download Price List
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
