// components/CenteredContainer.tsx

import React, { HTMLAttributes, ReactNode } from 'react';

interface CenteredContainerProps {
  children: ReactNode;
  className?: string // Tipo para aceitar classes do Tailwind CSS

}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center items-center w-screen bg-red-500">
      <div className={`w-full max-w-screen-2xl px-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default CenteredContainer;
