import pgp from "pg-promise";

export interface CheckoutCartDAO {
    listProduct(): Promise<any[]>;
    newProduct(product: any): Promise<void>;
}

export class  CheckoutCartDAODatabase implements CheckoutCartDAO {
	async newProduct(product: any): Promise<void> {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		// await connection.query("INSERT INTO wolfs_pdv.product (product_id, name, description, price) VALUES ($1, $2, $3, $4)", [product.product_id, product.name, product.description, product.price]);
		await connection.$pool.end();
	}

	async listProduct(): Promise<any[]> {
		console.log("connection")
		// const connection = pgp()("postgres://postgres:123456@db:5432/app");
		// console.log("connection", connection)
		// // const [acc] = await connection.query("select * from wolfs_pdv.product");
		// const [acc] = await connection.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'wolfs_pdv';");
		// await connection.$pool.end();
		return [];
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
	// 	const connection = pgp()("postgres://postgres:123456@db:5432/app");
	// 	await connection.query("insert into cccat16.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver) values ($1, $2, $3, $4, $5, $6, $7)", [account.accountId, account.name, account.email, account.cpf, account.carPlate, !!account.isPassenger, !!account.isDriver]);
	// 	await connection.$pool.end();
	// }
}
