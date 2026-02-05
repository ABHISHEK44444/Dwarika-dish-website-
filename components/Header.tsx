import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { MenuIcon, CloseIcon } from './icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Distributors', href: '/distributors' },
        { name: 'Recognition', href: '/recognition' },
        { name: 'Contact', href: '/contact' },
    ];

    const activeLinkStyle = {
      color: '#2563eb', // blue-600
    };

    return (
        <header className="sticky top-0 left-0 right-0 z-50 h-[80px] md:h-[95px] bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <nav className="container mx-auto px-4 h-full flex justify-between items-center">
                {/* Logo Area */}
                <Link to="/" className="flex items-center h-full py-3">
                    <Logo className="h-20 w-15" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.href}
                                    end={link.href === '/'}
                                    style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                    className="font-bold text-slate-600 hover:text-blue-600 transition-colors duration-300 uppercase text-[11px] tracking-widest"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        aria-label="Toggle menu"
                        className="p-2 -mr-2 text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? (
                             <CloseIcon className="w-8 h-8 text-blue-600" />
                        ) : (
                             <MenuIcon className="w-8 h-8" />
                        )}
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-2xl border-t border-slate-100 transition-all duration-300">
                        <ul className="flex flex-col items-center gap-1 py-6 px-4">
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full">
                                    <NavLink
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        end={link.href === '/'}
                                        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                        className="flex justify-center w-full py-4 font-bold text-slate-700 hover:text-blue-600 transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-bold">Materials & Services Syndicate</p>
                            <a href="tel:+917018284011" className="bg-blue-600 text-white text-xs font-black py-4 px-10 rounded-full inline-block shadow-lg hover:bg-blue-700 transition-all active:scale-95 uppercase tracking-tighter">
                                CALL NOW +91-7018284011
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
