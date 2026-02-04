import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
    className?: string;
}

/**
 * Logo Component
 * Imports logo from assets folder.
 */
const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <img 
            src={logoImg} 
            alt="Dwarikadheesh Materials and Services Syndicate Logo" 
            className={`${className} object-contain`}
            // Error handling to show a text fallback if the image is missing
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.style.display = 'none';
                const container = target.parentElement;
                if (container) {
                    const fallback = document.createElement('span');
                    fallback.className = "font-black text-slate-900 text-x1 tracking-tight";
                    fallback.innerText = "DWARIKADHEESH";
                    container.appendChild(fallback);
                }
            }}
        />
    );
};

export default Logo;
