import { ProductDAO } from "../../infra/repository/ProductDAO";


export default class GetCheckoutCart {
    constructor(readonly productDAO: ProductDAO, ) {
    }

    async execute(input: Input) {
        const checkoutCart = await this.productDAO.getProductByName(input.name);
        return checkoutCart;
    }
}

type Input = {
    name: string;
}