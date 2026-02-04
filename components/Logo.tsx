import React from "react";
import logoImg from "../assets/logo.png";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Logo Component
 * - Forced width & height support
 * - Ignores parent size limits
 * - Safe fallback
 */
const Logo: React.FC<LogoProps> = ({
  className,
  width = 250,
  height = 100,
}) => {
  return (
    <div style={{ width, height }}>
      <img
        src={logoImg}
        alt="Dwarikadheesh Materials and Services Syndicate Logo"
        style={{ width: "100%", height: "100%" }}
        className={`object-contain ${className ?? ""}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.style.display = "none";

          const container = target.parentElement;
          if (container) {
            const fallback = document.createElement("span");
            fallback.style.fontWeight = "800px";
            fallback.style.fontSize = "20px";
            fallback.innerText = "DWARIKADHEESH";
            container.appendChild(fallback);
          }
        }}
      />
    </div>
  );
};

export default Logo;
