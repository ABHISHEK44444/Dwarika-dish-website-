import React from 'react';
import { Link } from 'react-router-dom';
import { LocationIcon, PhoneIcon, EmailIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './icons';
import Logo from './Logo';

const Footer: React.FC = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Distributorship', href: '/distributors' },
        { name: 'Contact Us', href: '/contact' },
    ];
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center sm:text-left">
                    {/* About */}
                    <div>
                        <div className="flex items-center mb-6 justify-center sm:justify-start">
                            <Logo className="h-14 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-sm mb-4">
                            We deal in all kinds of industrial components and building materials. Dwarikadheesh is your premier source for quality and reliability.
                        </p>
                        <Link to="/about" className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">Read More »</Link>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 sm:mb-6 tracking-wider">QUICK LINKS</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.href} className="hover:text-blue-400 transition-colors duration-300 text-sm">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 sm:mb-6 tracking-wider">GET IN TOUCH</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-4 justify-center sm:justify-start text-left">
                                <LocationIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <span>Plot No 8, Mauja Manghatai, Icon City, Manghatai, Agra, Uttar Pradesh-283105</span>
                            </li>
                            <li className="flex items-start gap-4 justify-center sm:justify-start">
                                <PhoneIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <a href="tel:+917018284011" className="hover:text-blue-400 transition-colors duration-300 text-slate-100 font-medium">+91-7018284011</a>
                            </li>
                             <li className="flex items-start gap-4 justify-center sm:justify-start">
                                <EmailIcon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <a href="mailto:info@dwarikadheesh.com" className="hover:text-blue-400 transition-colors duration-300 text-slate-100">info@dwarikadheesh.com</a>
                            </li>
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 sm:mb-6 tracking-wider">FOLLOW US</h3>
                        <p className="text-sm mb-4">Connect with us on social media for the latest updates and industry news.</p>
                        <div className="flex items-center gap-4 justify-center sm:justify-start">
                            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                                <TwitterIcon className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                                <LinkedInIcon className="w-6 h-6" />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950/50 py-4 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center text-sm text-slate-400">
                    <p>Copyright © {year} DWARIKADHEESH MATERIALS. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;