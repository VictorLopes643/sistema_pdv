'use client'
import create from 'zustand';
type MenuCheckoutState = {
    isOpen: boolean;
};

type MenuCheckoutActions = {
    toggleMenu: () => void;
};

type MenuCheckoutStore = {
    states: MenuCheckoutState;
    actions: MenuCheckoutActions;
};

export const useMenuCheckoutStore = create<MenuCheckoutStore>((set) => ({
    states: {
        isOpen: true
    },
    actions: {
        toggleMenu: () => {
            console.log("Toggling menu");
            set((state) => ({
                states: {
                    ...state.states,
                    isOpen: !state.states.isOpen,
                },
            }));
        }
    }
}))
