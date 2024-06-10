import pgp from "pg-promise";
import Product from "../../domain/entity/Product";
export interface ProductDAO {
    listProduct(): Promise<any[]>;
    newProduct(product: Product): Promise<void>;
	getProductByName(name: string): Promise<Product | undefined>;
}

export class  ProductDAODatabase implements ProductDAO {
	async getProductByName(name: string) {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		const [product] = await connection.query("select * from wolfs_pdv.product where name = $1", [name]);
		await connection.$pool.end();
		if (!product) return;
		return Product.restore(product.product_id, product.name, product.description, product.price);
	}
	async newProduct(product: Product): Promise<void> {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		await connection.query("INSERT INTO wolfs_pdv.product (product_id, name, description, price) VALUES ($1, $2, $3, $4)", [product.product_id, product.name, product.description, product.price]);
		await connection.$pool.end();

	}

	async listProduct(): Promise<Product[]> {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		const products = await connection.query("select * from wolfs_pdv.product");
		await connection.$pool.end();
		return products;
	}
	
	
	
	// async getAccountByEmail (email: string) {
	// 	const connection = pgp()("postgres://postgres:123456@db:5432/app");
	// 	const [acc] = await connection.query("select * from cccat16.account where email = $1", [email]);
	// 	await connection.$pool.end();
	// 	return acc;
	// }
	
	// async getAccountById (accountId: string) {
		// const connection = pgp()("postgres://postgres:123456@db:5432/app");
		// const [acc] = await connection.query("select * from cccat16.account where account_id = $1", [accountId]);
		// await connection.$pool.end();
		// return acc;
	// }
	
	// async saveAccount (account: any) {
		// const connection = pgp()("postgres://postgres:123456@db:5432/app");
		// await connection.query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [account.accountId, account.name, account.email, account.cpf, account.carPlate, !!account.isPassenger, !!account.isDriver]);
		// await connection.$pool.end();
	// }
}


export class ProductDAOInMemory implements ProductDAO {
	private products: any[] = [];
	async getProductByName(name: string): Promise<any> {
		return this.products.find((product) => product.name === name);
	}
	async newProduct(product: any): Promise<void> {
		this.products.push(product);
	}
	async listProduct(): Promise<any[]> {
		return this.products;
	}
}