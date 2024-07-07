import React, { useState } from 'react';

export const MenuContext = React.createContext<{
  isOpen: boolean;
  toggleMenu: () => void;
}>({
  isOpen: false,
  toggleMenu: () => {}
});

type MenuContextType = {
  children: React.ReactNode;
};

const MenuProvider = ({ children }: MenuContextType) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log("MenuProvider -> isOpen", isOpen)
  const toggleMenu = () => {
    console.log("MenuProvider -> toggleMenu -> isOpen", isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export default MenuProvider;
