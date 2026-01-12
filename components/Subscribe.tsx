
import React from 'react';
import { LocationIcon, PhoneIcon } from './icons';

const Subscribe: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Subscribe for Updated Price list</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                And get regular updates about the materials and services industry.
            </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-lg shadow-lg">
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Get In Touch Directly</h3>
              <div className="flex items-start gap-4">
                  <LocationIcon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-slate-600">Plot No 8, Mauja Manghatai, Icon City, Manghatai, Agra, Uttar Pradesh-283105</p>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                  <PhoneIcon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+917018284011" className="text-slate-600 hover:text-blue-600">+91-7018284011</a>
                  </div>
              </div>
          </div>

          {/* Right Side: Subscription Form */}
          <form className="bg-white p-6 rounded-lg shadow-inner space-y-4">
            <div>
              <label htmlFor="sub-name" className="sr-only">Name</label>
              <input type="text" id="sub-name" placeholder="Name" className="w-full bg-slate-100 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="sub-phone" className="sr-only">Phone</label>
              <input type="tel" id="sub-phone" placeholder="Phone" className="w-full bg-slate-100 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="sub-email" className="sr-only">Email</label>
              <input type="email" id="sub-email" placeholder="Email" className="w-full bg-slate-100 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="sub-company" className="sr-only">Company</label>
              <input type="text" id="sub-company" placeholder="Company" className="w-full bg-slate-100 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-md transition-transform duration-300 hover:-translate-y-1 text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
