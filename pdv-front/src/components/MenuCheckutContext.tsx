'use client'
import { CartDaoInMemory } from '@/infra/repository/cartDao';
import React, { useCallback, useEffect, useState } from 'react';

export const MenuCheckoutContext = React.createContext<{
  isOpen: boolean;
  toggleMenu: () => void;
}>({
  isOpen: false,
  toggleMenu: () => { },
});

type MenuContextType = {
  children: React.ReactNode;
};

const MenuProvider = ({ children }: MenuContextType) => {
  const [isOpen, setIsOpen] = useState(true);
  // const [items, setItems] = useState<any[]>([]); 
  const [items, setItems] = useState([]);
  console.log("MenuProvider -> isOpen", isOpen)
  const toggleMenu = () => {
    console.log("MenuProvider -> toggleMenu -> isOpen", isOpen)
    setIsOpen(!isOpen);
  };
  const cartDao = new CartDaoInMemory();
  // const getItems = useCallback(async () => {
  //   try {
  //     const cartItems: any = await cartDao.getCart();
  //     if (cartItems === undefined) {
  //       return [];
  //     }
  //     setItems(cartItems);
  //     return cartItems;
  //   } catch (error) {
  //     console.error('Erro ao obter itens do carrinho:', error);
  //     return [];
  //   }  
  // }, [cartDao]);

  // useEffect(() => {
  //   getItems();
  // }, [getItems]);


  return (
    <MenuCheckoutContext.Provider
      value={{
        isOpen,
        toggleMenu
      }}
    >
      {children}
    </MenuCheckoutContext.Provider>
  );
};

export const useMenuCheckout = () => {
  const context = React.useContext(MenuCheckoutContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export default MenuProvider;
