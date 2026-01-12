import React from 'react';
import { ProductAvailabilityIcon, DistributorshipIcon, ComponentsIcon, BestPriceIcon } from './icons';

const featuresData = [
  {
    icon: <ProductAvailabilityIcon className="w-10 h-10 text-amber-500" />,
    title: 'READY STOCK AVAILABILITY',
    description: 'Our massive inventory ensures that your projects never stall. At Dwarikadheesh, we maintain a robust stock of all essential electrical and civil components.',
  },
  {
    icon: <DistributorshipIcon className="w-10 h-10 text-amber-500" />,
    title: 'PREMIUM PARTNERSHIPS',
    description: 'We hold authorized distributorships for over 25+ global brands, bringing world-class quality directly to the heart of Uttar Pradesh.',
  },
  {
    icon: <ComponentsIcon className="w-10 h-10 text-amber-500" />,
    title: 'END-TO-END SOLUTIONS',
    description: 'From Power Contactors and Thermal Overload Relays to MCCBs and Distribution Networks—we provide every component required for industrial excellence.',
  },
  {
    icon: <BestPriceIcon className="w-10 h-10 text-amber-500" />,
    title: 'SYNDICATE PRICING',
    description: 'Leveraging our syndicate network, we offer the most competitive pricing in the region without compromising on the certified quality of our materials.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuresData.map((feature, index) => (
                <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left group">
                    <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                    </div>
                    <h3 className="text-sm font-extrabold mb-4 tracking-widest text-amber-400">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;