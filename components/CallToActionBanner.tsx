import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
          Reliable Supply Chains for <span className="text-blue-400">Critical Infrastructure</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
          Whether you need precision switchgear or heavy-duty industrial cables, the Dwarikadheesh Syndicate ensures your projects meet the highest standards of safety and efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:-translate-y-1">
            Get Technical Consultation
          </Link>
          <a href="tel:+917018284011" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-10 rounded-full transition-all">
            Call Sales Department
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;