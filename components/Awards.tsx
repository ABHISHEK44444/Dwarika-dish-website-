
import React from 'react';
import SectionTitle from './SectionTitle';

const awardsData = [
    { name: 'Best Supplier 2023', presentedBy: 'National Industry Association', image: 'https://picsum.photos/seed/award1/400/300' },
    { name: 'Customer Service Excellence', presentedBy: 'Regional Business Council', image: 'https://picsum.photos/seed/award2/400/300' },
    { name: 'Top Distributor Award', presentedBy: 'BuildRight Cement', image: 'https://picsum.photos/seed/award3/400/300' },
];

const Awards: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Awards</SectionTitle>
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Awards;
