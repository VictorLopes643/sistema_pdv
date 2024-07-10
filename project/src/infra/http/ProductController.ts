
import HttpServer from "./HttpServer";


export default class ProductController {

	constructor (readonly httpServer: HttpServer, readonly product: any) {
		// httpServer.register("post", "/store",  async function (params: any, body: any) {
		// 	const output = await store.execute(body);
		// 	return output;
		// });

        // httpServer.register("get", "/store/:{nameStore}", async function (params: any, body: any) {
		// 	const input = {
		// 		nameStore: params.nameStore
		// 	};
		// 	return input;
		// });
        httpServer.register("get", "/products", async function (params: any, body: any) {
			const products = await product.execute()
			return products
        });
	}
}