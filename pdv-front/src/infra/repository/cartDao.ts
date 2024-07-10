export interface CartDao {
    getCart(): Promise<any>;
    updateCart(cart: any): Promise<void>;
    }

export class CartDaoInMemory implements CartDao {
    private cart: any[] = [];

    async getCart() {
        return this.cart;
    }

    async updateCart(cart: any) {
        this.cart = cart;
    }
}