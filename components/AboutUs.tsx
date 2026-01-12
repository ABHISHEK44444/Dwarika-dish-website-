import React from 'react';
import { TrustIcon, CustomersIcon, TeamIcon, BrandsIcon, CheckCircleIcon } from './icons';
import SubSectionTitle from './SubSectionTitle';

const whyChooseUsData = [
  {
    icon: <TrustIcon className="w-8 h-8 text-cyan-500" />,
    title: 'PROVEN RELIABILITY',
    description: 'We have built a reputation for trust and reliability, ensuring you get the best products and services every time.',
  },
  {
    icon: <CustomersIcon className="w-8 h-8 text-cyan-500" />,
    title: '3000+ HAPPY CUSTOMERS',
    description: 'We have more than 3000+ happy customers. Our focus is on your satisfaction & we help you to choose what exactly you need.',
  },
  {
    icon: <TeamIcon className="w-8 h-8 text-cyan-500" />,
    title: 'EXPERT TEAM',
    description: "Our knowledgeable team is always ready to assist you with your specific requirements and provide expert advice.",
  },
  {
    icon: <BrandsIcon className="w-8 h-8 text-cyan-500" />,
    title: 'QUALITY BRANDS',
    description: 'We are associated with leading brands in the industry to bring you a wide selection of high-quality materials.',
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: About Us */}
          <div className="order-2 lg:order-1">
            <SubSectionTitle>ABOUT US</SubSectionTitle>
            <div className="relative mb-8 group">
                <img src="https://picsum.photos/seed/industrial-materials/800/600" alt="Industrial materials supplier warehouse" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
                {/* Badge removed as requested */}
            </div>
            <p className="mb-4 text-slate-600 leading-relaxed">
              Welcome to <span className="font-bold text-slate-800">DWARIKADHEESH MATERIALS AND SERVICES SYNDICCATE</span>, your trusted source for high-quality industrial solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We offer a wide range of products including Civil, Mechanical, Electrical, steel, aluminum, and copper, with fast and reliable delivery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-8 text-slate-700 font-medium">
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm">High-Quality Materials</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm">Wide Range of Products</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm">Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm">Trusted & Certified</span>
                </div>
            </div>
            <button className="bg-slate-900 text-white font-bold py-4 px-10 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:-translate-y-1">
                DOWNLOAD CORPORATE PROFILE
            </button>
          </div>
          {/* Right Side: Why Choose Us */}
          <div className="order-1 lg:order-2 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
            <SubSectionTitle>WHY CHOOSE US</SubSectionTitle>
            <div className="space-y-10">
              {whyChooseUsData.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-white shadow-md p-4 rounded-2xl text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 mb-2 tracking-widest uppercase">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;