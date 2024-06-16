import { v4 as uuidv4 } from 'uuid';

export default class Product {

    private constructor (readonly product_id: string, readonly name: string, readonly description: string, readonly price: number){
    }

  static create(name: string, description: string, price: number) {
    const productId = uuidv4()
    return new Product(productId, name, description, price);
  }

  static restore(product_id: string,name: string, description: string, price: number) {
    return new Product(product_id, name, description, price);
  }

}