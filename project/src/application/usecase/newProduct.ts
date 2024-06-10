import Product from "../../domain/entity/Product";
import { ProductDAO } from "../../infra/repository/ProductDAO";


export default class NewProduct {
    constructor(readonly productDAO: ProductDAO) {

    }
    async execute(input: Input) {
        const productExists = await this.productDAO.getProductByName(input.name);
        if (productExists) {
            throw new Error("Product already exists");
        }
        const product = Product.create(input.name, input.description, input.price)
        await this.productDAO.newProduct(product);
    }
}

type Input = {
    name: string,
    description: string,
    price: number
}