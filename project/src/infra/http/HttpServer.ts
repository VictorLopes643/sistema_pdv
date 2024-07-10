import express from "express";


export default interface HttpServer {
	register (method: string, url: string, callback: Function): void;
    listen(port: number): void
}

export class ExpressAdapter implements HttpServer {
    private app: any

    constructor() {
        this.app = express()
        this.app.use(express.json())   
    }

	register(method: string, url: string, callback: Function): void {
		this.app[method](url.replace(/\{|\}/g, ""), async function (req: any, res: any) {
			try {
				const output = await callback(req.params, req.body);
				res.json(output);
			} catch (error: any) {
				res.status(422).json({
					message: error.message
				});
			}
		});
	}

	listen(port: number): void {
		this.app.listen(port);
	}
}