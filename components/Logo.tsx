import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    // Authoritative Midnight Slate
    const brandColor = "#0f172a"; 

    return (
        <svg
            className={className}
            viewBox="0 0 480 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Dwarikadheesh Materials and Services Syndicate Logo"
        >
            {/* 
                COMPACT CLASSIC EMBLEM 
                Rescaled to be less dominant and more professional.
            */}
            <g transform="translate(5, 15) scale(0.85)">
                {/* Interlocking Link - Left Segment */}
                <path 
                    d="M35 15C22 15 10 27 10 45C10 63 22 75 35 75H50L42 58H35C30 58 26 54 26 45C26 36 30 32 35 32H45L53 15H35Z" 
                    fill={brandColor} 
                />
                {/* Interlocking Link - Right Segment */}
                <path 
                    d="M60 15L52 32H55C60 32 64 36 64 45C64 54 60 58 55 58H47L55 75H60C73 75 85 63 85 45C85 27 73 15 60 15Z" 
                    fill={brandColor} 
                />
                {/* Minimal Connection Point */}
                <rect x="38" y="42" width="18" height="6" rx="1" fill={brandColor} opacity="0.8" />
            </g>

            {/* REFINED BRAND TYPOGRAPHY */}
            <g transform="translate(95, 12)">
                {/* Main Brand Name */}
                <text 
                    x="0" 
                    y="28" 
                    fontFamily="Inter, 'Segoe UI', Roboto, sans-serif" 
                    fontSize="32" 
                    fontWeight="900" 
                    fill={brandColor}
                    letterSpacing="0.3"
                >
                    DWARIKADHEESH
                </text>

                {/* Services Bar - Sharp and Modern */}
                <rect x="0" y="40" width="340" height="28" fill={brandColor} />
                <text 
                    x="170" 
                    y="60" 
                    fontFamily="Inter, 'Segoe UI', Roboto, sans-serif" 
                    fontSize="16" 
                    fontWeight="800" 
                    fill="#FFFFFF" 
                    textAnchor="middle"
                    letterSpacing="2"
                >
                    MATERIALS & SERVICES
                </text>

                {/* Wide Support Base */}
                <text 
                    x="170" 
                    y="88" 
                    fontFamily="Inter, 'Segoe UI', Roboto, sans-serif" 
                    fontSize="20" 
                    fontWeight="700" 
                    fill={brandColor}
                    textAnchor="middle"
                    letterSpacing="12"
                >
                    SYNDICCATE
                </text>
            </g>
        </svg>
    );
};

export default Logo;