
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{children}</h2>
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;
