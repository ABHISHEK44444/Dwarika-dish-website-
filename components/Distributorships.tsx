import React from 'react';
import SectionTitle from './SectionTitle';

const distributorsData = [
  { 
    name: 'Schneider', 
    products: 'Low Voltage switchgears, Limit switches, Proximity Sensor, Meter, CT', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2022/02/schneider-min.jpg' 
  },
  { 
    name: 'Omron', 
    products: 'Proximity Sensors and Glass relays', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2022/02/omron-min.jpg' 
  },
  { 
    name: 'Phoenix', 
    products: 'Terminal Blocks, Relay Card.', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2022/02/phoenix-contact-logo-11.jpg' 
  },
  
  { 
    name: 'Fenner', 
    products: 'Fenner V Belt, Electric Motors', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/fenner-min-500x500.png' 
  },
  { 
    name: 'Finolex', 
    products: 'Wires.', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/finlox-min-500x500.png' 
  },
  { 
    name: 'ABB', 
    products: 'Low Voltage Switchgears.', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/ABB-min-500x500.png' 
  },
  { 
    name: 'C&S', 
    products: 'Low Voltage Switchgears.', 
    logo: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/cs-min-500x500.png' 
  },
];

const DistributorCard: React.FC<{ distributor: typeof distributorsData[0] }> = ({ distributor }) => (
    <div className="text-left group flex flex-col h-full">
      <div className="bg-white p-2 border border-slate-200 mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
        <img 
          src={distributor.logo} 
          alt={`${distributor.name} logo`} 
          className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="px-1 flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">{distributor.name}</h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-bold">Products :</span> {distributor.products}
        </p>
      </div>
    </div>
);

const Distributorships: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Distributorships</h2>
                  <div className="w-20 h-1 bg-slate-200 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {distributorsData.map((distributor, index) => (
                        <DistributorCard key={index} distributor={distributor} />
                    ))}
                </div>
                
                 <div className="mt-20 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
                    <button className="w-full sm:w-auto bg-slate-900 text-white font-bold py-4 px-10 rounded-md hover:bg-slate-800 transition-all duration-300 shadow-lg hover:-translate-y-1">
                      ALL DISTRIBUTORSHIPS
                    </button>
                    <button className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-10 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:-translate-y-1">
                      VIEW PRICE-LIST
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Distributorships;
