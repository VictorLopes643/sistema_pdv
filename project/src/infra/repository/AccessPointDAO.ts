import pgp from "pg-promise";
import Store from "../../domain/entity/Store";
import AccessPoint from "../../domain/entity/AccessPoint";
export interface accessPointDAO {
    newAccesPoint(store: AccessPoint): Promise<void>;
	getAccessPointByName(name: string): Promise<AccessPoint | undefined>;
	getAccesPointByStoreId(id: string): Promise<AccessPoint | undefined>;
}

export class  AccessPointDAODatabase implements accessPointDAO {
	async newAccesPoint(accessPoint: AccessPoint) {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		await connection.query("insert into wolfs_pdv.AccessPoint (access_point_id, store_id, name) values ($1, $2, $3)", [accessPoint.accessPoint_id, accessPoint.getStoreId(), accessPoint.getName()]);
		await connection.$pool.end();
	}
	async getAccessPointByName (name: string) {
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		const [accessPoint] = await connection.query("select * from wolfs_pdv.AccessPoint where name = $1", [name]);	
		await connection.$pool.end();
		if(!accessPoint) return;
		return AccessPoint.restore(accessPoint.store_id, accessPoint.name,accessPoint.description)
	}
	async getAccesPointByStoreId (storeId: string) {
		console.log("storeId", storeId)
		const connection = pgp()("postgres://postgres:123456@db:5432/app");
		const accessPoint = await connection.query("select * from wolfs_pdv.AccessPoint where store_id = $1", [storeId]);	
		await connection.$pool.end();
		if(!accessPoint) return;
		const accessPoints = accessPoint.map((accessPoint: any) => AccessPoint.restore(accessPoint.access_point_id, accessPoint.store_id,accessPoint.name))
		return accessPoints
	}
}

