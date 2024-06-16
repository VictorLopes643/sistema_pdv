import NewStore from "../../application/usecase/NewStore";
import HttpServer from "./HttpServer";


export default class StoreController {

	constructor (readonly httpServer: HttpServer, readonly store: NewStore) {
		httpServer.register("post", "/store", async function (params: any, body: any) {
			const output = await store.execute(body);
			return output;
		});

        httpServer.register("get", "/store/:{nameStore}", async function (params: any, body: any) {
			const input = {
				nameStore: params.nameStore
			};
			return input;
		});
        httpServer.register("get", "/", async function (params: any, body: any) {
            return "ok"
        });
	}
}