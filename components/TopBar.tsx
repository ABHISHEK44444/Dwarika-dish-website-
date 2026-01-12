
import React from 'react';
import { LocationIcon, PhoneIcon } from './icons';

const TopBar: React.FC = () => {
    return (
        <div className="bg-white text-slate-600 text-xs sm:text-sm border-b border-slate-200">
            <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                {/* Address */}
                <div className="flex items-center gap-3 text-center md:text-left">
                    <LocationIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div className="text-slate-700">
                        Plot No 8, Mauja Manghatai, Icon City, <span className="block sm:inline">Manghatai, Agra, Uttar Pradesh-283105</span>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="flex items-center gap-3">
                     <PhoneIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                     <div>
                        <a href="tel:+917018284011" className="block hover:text-blue-600 transition-colors duration-300 text-slate-700 font-medium">+91-7018284011</a>
                        <a href="mailto:info@dwarikadheesh.com" className="block hover:text-blue-600 transition-colors duration-300 text-slate-500">info@dwarikadheesh.com</a>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
