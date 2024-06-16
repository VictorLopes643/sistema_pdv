import pgp from "pg-promise";
import Store from "../../domain/entity/Store";
export interface StoreDAO {
    newStore(store: Store): Promise<void>;
	getStoreByName(storeName: string): Promise<Store | undefined>;
}

export class  StoreDAODatabase implements StoreDAO {
	async newStore(store: Store) {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		await connection.query("insert into wolfs_pdv.store (store_id, name, description) values ($1, $2, $3)", [store.store_id, store.getName(), store.getDescription()]);
		await connection.$pool.end();
	}
	async getStoreByName (storeName: string) {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		const [store] = await connection.query("select * from wolfs_pdv.store where name = $1", [storeName]);	
		await connection.$pool.end();
		if(!store) return;
		return Store.restore(store.store_id, store.name,store.description)
		 
	}
}

export class ProductDAOInMemory implements StoreDAO {
	private store: any[] = [];
	getStoreByName(storeName: string): Promise<Store> {
		return this.store.find((storeName) => storeName.name === storeName)
	}
	newStore(store: any): Promise<void> {
		return store.push(store);
	}

}