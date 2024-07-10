import create from 'zustand';

type Product = {
    product_id: string;
    name: string;
    price: number;
    quantity: number;
};

type ProductState = {
    products: Product[];
    total: number;
};

type ProductActions = {
    addProduct: (product: Product) => void;
    countTotal: () => void;
    plusTotalWithProduct: (product: string) => void;
    minusTotalWithProduct: (product: string) => void;
};

type MenuCheckoutStore = {
    states: ProductState;
    actions: ProductActions;
};

export const useCartStore = create<MenuCheckoutStore>((set) => ({
    states: {
        products: [],
        total: 0
    },
    actions: {
        // addProduct: (product: Product) =>
        //     set((state) => {
        //         const findProduct = state.states.products.find((p) => p.product_id === product.product_id);
        //         console.log('findProduct',findProduct);
        //         if (!findProduct) {
        //             return {
        //                 ...state,
        //                 states: {
        //                     ...state.states,
        //                     products: [...state.states.products, product]
        //                 }
        //             };
        //         }
        //         const newProducts = state.states.products.map((product) => {
        //             if (product.product_id === product.product_id) {
        //                 return {
        //                     ...product,
        //                     quantity: product.quantity + 1,
        //                 };
        //             }
        //             return product;
        //         });
        //         const findNewProduct = newProducts.find((p) => p.product_id === product.product_id);
        //         if (!findNewProduct) return state;
        //         return {
        //             ...state,
        //             states: {
        //                 ...state.states,
        //                 products: newProducts
        //             }
        //         };
        //     }),
        addProduct: (product: Product) =>
        set((state) => {
          const findProduct = state.states.products.find((p) => p.product_id === product.product_id);
            console.log("Product Vindo no AddProduct", product)
          if (findProduct) {
            // Se o produto já existe na lista, incrementa a quantidade
            const newProducts = state.states.products.map((p) => {
              if (p.product_id === product.product_id) {
                return {
                  ...p,
                  quantity: p.quantity + 1
                };
              }
              return p;
            });
            console.log("newProducts", newProducts)
            return {
              ...state,
              states: {
                ...state.states,
                products: newProducts
              }
            };
          } else {
            const newProductList = [...state.states.products, { ...product, quantity: 1 }];
            console.log("newProductList", newProductList);
            return {
              ...state,
              states: {
                ...state.states,
                products: newProductList
              }
            };
          }
        }),      
        countTotal: () =>
            set((state) => {
                const total = state.states.products.reduce((acc, product) => {
                    return acc + (product.price * product.quantity);
                }, 0);

                return {
                    ...state,
                    states: {
                        ...state.states,
                        total: total,
                    }
                };
            }),
        plusTotalWithProduct: (id: string) =>
            set((state) => {
                const findProduct = state.states.products.find((p) => p.product_id === id);
                if (!findProduct) return state;
                const newProducts = state.states.products.map((product) => {
                    if (product.product_id === id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        };
                    }
                    return product;
                });
                return {
                    ...state,
                    states: {
                        ...state.states,
                        products: newProducts
                    }
                };
            }),
        minusTotalWithProduct: (id: string) =>
            set((state) => {
                const findProduct = state.states.products.find((p) => p.product_id === id);
                if (!findProduct) return state;
                let newTotal = state.states.total - findProduct.price;
                let newProducts = [...state.states.products];
                const index = newProducts.findIndex((p) => p.product_id === id);
                if (newProducts[index].quantity === 0) {
                    newProducts.splice(index, 1);
                } else {
                    newProducts[index] = {
                        ...newProducts[index],
                        quantity: newProducts[index].quantity - 1
                    };
                }
                return {
                    ...state,
                    states: {
                        ...state.states,
                        total: newTotal,
                        products: newProducts
                    }
                };
            }),

    }
}));

