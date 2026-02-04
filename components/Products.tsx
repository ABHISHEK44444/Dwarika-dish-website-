import React from 'react';
import SectionTitle from './SectionTitle';

const productsData = [
  { 
    name: 'SWITCHGEAR', 
    companies: 'Schneider, ABB, C&S & BCH', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/Switchgear-min-1-500x400.jpg' 
  },
  { 
    name: 'WIRES AND CABLES', 
    companies: 'Polycab & Finolex', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/Cable-min-500x400.png' 
  },
  { 
    name: 'GI STRIP', 
    companies: 'Hot Dipped Galvanized', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMer1n-yzkJBLocS851fGgUr9x-P19tl9-g&s' 
  },
  { 
    name: 'ALUMINIUM STRIP', 
    companies: 'EC Grade / Commercial', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlQB0y8GyqjT4jwE9cdeKkfwIk-23qC0R4A&s' 
  },
  { 
    name: 'COPPER STRIP', 
    companies: 'Bare / Tinned Copper', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ASAHG3_A5LxfVJOV_O0joutCQZhfUdETjg&s' 
  },
  { 
    name: 'PIT COVER', 
    companies: 'FRP / Polyplastic / CI', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbL0ROGcPzWPIRVUhkpTbvU-B8OP8JuHqdMg&s' 
  },
  { 
    name: 'LIMIT SWITCHES', 
    companies: 'BCH, ESSEN, Schneider', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/Limit-Switch-1-min-500x400.jpg' 
  },
  { 
    name: 'CABLE GLANDS AND THIMBLES', 
    companies: 'Comet, PVC glands', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/cable-Gland-min-500x400.png' 
  },
  { 
    name: 'CHANGEOVERS', 
    companies: 'Socomec & Standard (Havells)', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2022/02/Original-500x400.jpg' 
  },
  { 
    name: 'PROXIMITY SENSORS AND GLASS RELAYS', 
    companies: 'Schneider & Omron', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/proximity-sensor-min-500x400.png' 
  },
  { 
    name: 'FERRULE MACHINE AND ACCESSORIES', 
    companies: 'MAX, CANON and Brother', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/ferrule-machine-min-500x400.jpg' 
  },
  { 
    name: 'TERMINAL BLOCKS', 
    companies: 'Connectwell and Phoenix', 
    image: 'https://mundhrabrothers.com/wp-content/uploads/2020/12/Trrminate-Block-min-500x400.png' 
  },
];

const ProductCard: React.FC<{ product: typeof productsData[0] }> = ({ product }) => (
    <div className="text-left group flex flex-col h-full transition-all duration-300">
      <div className="bg-white p-2 border border-slate-200 mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto object-cover aspect-[5/4] transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="px-1 flex-grow">
        <h3 className="text-[15px] font-bold text-slate-800 mb-2 uppercase tracking-tight leading-tight">{product.name}</h3>
        <div className="w-10 h-[3px] bg-amber-400 mb-3"></div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-bold">Companies :</span> {product.companies}
        </p>
      </div>
    </div>
);

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-slate-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto bg-slate-900 text-white font-bold py-4 px-10 rounded-md hover:bg-slate-800 transition-all duration-300 shadow-lg hover:-translate-y-1">
            DOWNLOAD COMPLETE BROCHURE
          </button>
          <button className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-10 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:-translate-y-1">
            VIEW PRICE-LIST
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
