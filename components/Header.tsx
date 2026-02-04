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
        <header className="sticky top-0 left-0 right-0 z-50 h-[90px] bg-white/95 backdrop-blur-sm border-b border-slate-200">
            <nav className="container mx-auto px-4 h-full flex justify-between items-center">
                <Link to="/" className="flex items-center">
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
                                    className="font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 uppercase text-xs tracking-widest"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Nav Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? (
                             <CloseIcon className="w-7 h-7 text-slate-700" />
                        ) : (
                             <MenuIcon className="w-7 h-7 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white shadow-lg border-t border-slate-200">
                        <ul className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        end={link.href === '/'}
                                        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                        className="font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-300 uppercase text-xs tracking-widest"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
