
import React from 'react';

interface SubSectionTitleProps {
  children: React.ReactNode;
}

const SubSectionTitle: React.FC<SubSectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-slate-800 tracking-widest">{children}</h3>
      <div className="mt-2 w-16 h-1 bg-amber-400 rounded"></div>
    </div>
  );
};

export default SubSectionTitle;
