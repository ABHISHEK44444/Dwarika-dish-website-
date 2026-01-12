
import React from 'react';
import SectionTitle from './SectionTitle';

const certificatesData = [
    { name: 'ISO 9001:2015', image: 'https://picsum.photos/seed/cert1/300/400' },
    { name: 'Quality Assured Supplier', image: 'https://picsum.photos/seed/cert2/300/400' },
    { name: 'Industry Excellence Award', image: 'https://picsum.photos/seed/cert3/300/400' },
];

const Certificates: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Certificates & Accreditations</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center p-4">
                    <img src={cert.image} alt={cert.name} className="w-full h-auto object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-bold text-slate-800">{cert.name}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
