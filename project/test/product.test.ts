import { ProductDAODatabase } from "../src/infra/repository/ProductDAO";
import NewProduct from "../src/application/usecase/newProduct";
import { faker } from '@faker-js/faker';


test.only("Deve criar um produto", async function () {
    const inputProduct = {
        // name:  faker.commerce.product(),
        name:  "Coca Cola",
        description: faker.commerce.productDescription(),
        price: Number( faker.commerce.price({ min: 1, max: 1000, dec: 2 }))
    }
    const productRepository = await new ProductDAODatabase()
    await new NewProduct(productRepository).execute(inputProduct);
    const product = await productRepository.getProductByName(inputProduct.name);
    expect(product?.name).toEqual(inputProduct.name);
    expect(product?.description).toEqual(inputProduct?.description);
    expect(product?.price).toEqual(inputProduct?.price);
});



test("Deve listar os produtos", async function () {
    const productRepository = await new ProductDAODatabase()
    const productsList = await productRepository.listProduct();
    expect(productsList).toBeDefined();
});

