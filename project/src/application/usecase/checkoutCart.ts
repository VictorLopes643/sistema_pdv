import { CheckoutCartDAO } from "../../infra/repository/checkoutCartDAO"



export default class CheckoutCart {

	constructor (readonly productDAO: CheckoutCartDAO) {
	}


    async execute (input: Input) {
        const product = {
            name: input.name,
            description: input.description,
            price: input.price
        }
        const checkoutCartDao = await this.productDAO.newProduct(product)
        // const checkoutCart = await checkoutCartDao.newProduct()
        // return checkoutCart.id
    }

}

type Input = {
    name: string;
    description: string;
    price: number;
}

