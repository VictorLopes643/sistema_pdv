import create from 'zustand';

type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductState = {
    products: Product[];
    total: number;
};

type ProductActions = {
    addProduct: (product: Product) => void;
    calcTotal: () => void;
};

type MenuCheckoutStore = {
    states: ProductState;
    actions: ProductActions;
};

export const useProductStore = create<MenuCheckoutStore>((set) => ({
    states: {
        products: [],
        total: 0
    },
    actions: {
        addProduct: (product: Product) =>
            set((state) => ({
                states: {
                    ...state.states,
                    products: [...state.states.products, product]
                }
            })),
        calcTotal: () => {
            let total = 0;
            set((state) => {
                state.states.products.forEach((product) => {
                    total += product.price;
                });
                return {
                    states: {
                        ...state.states,
                        total: total
                    }
                };
            });
        }
    }
}));
