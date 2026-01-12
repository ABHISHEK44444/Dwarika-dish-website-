
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const certificatesData = [
    { name: 'ISO 9001:2015', image: 'https://picsum.photos/seed/cert1/300/400' },
    { name: 'Quality Assured Supplier', image: 'https://picsum.photos/seed/cert2/300/400' },
    { name: 'Industry Excellence Award', image: 'https://picsum.photos/seed/cert3/300/400' },
];

const awardsData = [
    { name: 'Best Supplier 2023', presentedBy: 'National Industry Association', image: 'https://picsum.photos/seed/award1/400/300' },
    { name: 'Customer Service Excellence', presentedBy: 'Regional Business Council', image: 'https://picsum.photos/seed/award2/400/300' },
    { name: 'Top Distributor Award', presentedBy: 'BuildRight Cement', image: 'https://picsum.photos/seed/award3/400/300' },
];

type View = 'certificates' | 'awards';

const Recognition: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('certificates');

  const tabButtonClasses = (view: View) => 
    `relative px-8 py-4 text-sm font-bold tracking-widest transition-colors duration-300 focus:outline-none ${
      activeView === view
        ? 'text-blue-600'
        : 'text-slate-500 hover:text-slate-800'
    }`;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Recognition</SectionTitle>
        
        <div className="flex justify-center mb-12 border-y border-slate-200">
            <div className="flex items-center">
                <button 
                    onClick={() => setActiveView('certificates')}
                    className={tabButtonClasses('certificates')}
                >
                    CERTIFICATES
                </button>
                <div className="h-6 w-px bg-slate-300"></div>
                <button 
                    onClick={() => setActiveView('awards')}
                    className={tabButtonClasses('awards')}
                >
                    AWARDS
                </button>
            </div>
        </div>

        <div className="min-h-[400px]">
          {activeView === 'certificates' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {certificatesData.map((cert, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center p-4">
                        <img src={cert.image} alt={cert.name} className="w-full h-auto object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-bold text-slate-800">{cert.name}</h3>
                    </div>
                ))}
            </div>
          ) : (
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {awardsData.map((award, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <img src={award.image} alt={award.name} className="w-full h-48 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{award.name}</h3>
                            <p className="text-sm text-slate-600">Presented by: {award.presentedBy}</p>
                        </div>
                    </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Recognition;
