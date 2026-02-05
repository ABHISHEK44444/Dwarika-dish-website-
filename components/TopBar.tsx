import React from 'react';
import { LocationIcon, PhoneIcon } from './icons';

const TopBar: React.FC = () => {
    return (
        <div className="bg-white text-slate-600 text-[11px] sm:text-xs md:text-sm border-b border-slate-100">
            <div className="container mx-auto px-4 py-5 md:py-2 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                {/* Address Section */}
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3 text-center md:text-left">
                    <div className="p-2 bg-blue-50 rounded-full md:bg-transparent transition-colors duration-300">
                        <LocationIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
                    </div>
                    <div className="text-slate-800 font-semibold leading-relaxed max-w-[280px] md:max-w-none">
                        Plot No 8, Mauja Manghatai, Icon City, 
                        <span className="md:inline block font-medium text-slate-600"> Manghatai, Agra, UP-283105</span>
                    </div>
                </div>
                
                {/* Contact Section */}
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3 text-center md:text-left">
                    <div className="p-2 bg-blue-50 rounded-full md:bg-transparent transition-colors duration-300">
                        <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <a href="tel:+917018284011" className="hover:text-blue-600 transition-colors duration-300 text-slate-900 font-bold tracking-tight text-sm md:text-base">
                            +91-7018284011
                        </a>
                        <a href="mailto:info@dwarikadheesh.com" className="hover:text-blue-600 transition-colors duration-300 text-slate-500 font-normal">
                            info@dwarikadheesh.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
