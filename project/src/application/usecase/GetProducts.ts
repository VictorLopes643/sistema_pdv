import { ProductDAO } from "../../infra/repository/ProductDAO"




export default class GetProducts {
    constructor(readonly productDAO: ProductDAO) {
    }

    async execute() {
        const products = await this.productDAO.listProduct()
        if (!products) throw new Error("Products not found")
        return products
    }
}