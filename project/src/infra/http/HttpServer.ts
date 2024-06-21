// import express from "express";
// import keycloak, { memoryStore } from "./Key";
// import session from "express-session";


// export default interface HttpServer {
// 	register (method: string, url: string, callback: Function): void;
//     listen(port: number): void
// 	configureProtectMiddleware(protectMiddleware: express.RequestHandler): void;
// }

// export class ExpressAdapter implements HttpServer {
//     private app: any

//     constructor() {
//         this.app = express()
//         // this.app.use(express.json())   
//         this.app.use(keycloak.middleware({})); // Adiciona o middleware do keycloak
// 	// 	this.app.use(
// 	// 		session({
// 	// 			secret: 'admin',
// 	// 			resave: false,
// 	// 			saveUninitialized: true,
// 	// 			store:memoryStore,
// 	// 			cookie: {
// 	// 				maxAge: 60000
// 	// 			}
			
// 	// 		})
// 	// 	)
	
//     }

// 	register(method: string, url: string, callback: Function): void {
// 		this.app[method](url.replace(/\{|\}/g, ""), async (req: any, res: any, next: any) => {
// 			try {
// 				console.log('Sessão Keycloak:', req.kauth); // Verifica o estado da sessão do Keycloak
	
// 				// Verifica se a sessão do Keycloak está definida
// 				if (!req.kauth || !req.kauth.grant) {
// 					throw new Error('Sessão Keycloak não encontrada.');
// 				}
	
// 				await keycloak.protect('realm:pdv')(req, res, next);
	
// 				// Se chegou aqui, a rota está protegida e podemos executar o callback
// 				const output = await callback(req.params, req.body);
// 				res.json(output);
// 			} catch (error: any) {
// 				console.error('Erro ao acessar sessão Keycloak:', error);
// 				res.status(422).json({
// 					message: error.message
// 				});
// 			}
// 		});
// 	}
	

	
// 	listen(port: number): void {
// 		this.app.listen(port);
// 	}

// 	configureProtectMiddleware(protectMiddleware: express.RequestHandler): void {
//         this.app.use(protectMiddleware);
//     }
// }""
import express from "express";
import keycloak, { MemoryStore } from "./Key";
import session from "express-session";

export default interface HttpServer {
    register(method: string, url: string, callback: Function): void;
    listen(port: number): void;
    configureProtectMiddleware(protectMiddleware: express.RequestHandler): void;
}

export class ExpressAdapter implements HttpServer {
    private app: express.Application;

    constructor() {
        this.app = express();

        // Configuração do middleware do Keycloak
        this.app.use(keycloak.middleware({
            // Configuração do keycloak-connect, incluindo a sessão
            // store: MemoryStore
        }));

        // Configuração do middleware de sessão (express-session)
        this.app.use(
            session({
                secret: 'admin',
                resave: false,
                saveUninitialized: true,
                store: MemoryStore,
                cookie: {
                    maxAge: 60000
                }
            })
        );
    }

    register(method: string, url: string, callback: Function): void {
        this.app[method](url.replace(/\{|\}/g, ""), async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                console.log('Sessão Keycloak:', req.kauth); // Verifica o estado da sessão do Keycloak

                // Verifica se a sessão do Keycloak está definida
                if (!req.kauth || !req.kauth.grant) {
                    throw new Error('Sessão Keycloak não encontrada.');
                }

                // Protege a rota usando o middleware do Keycloak
                await keycloak.protect('realm:pdv')(req, res, next);

                // Se chegou aqui, a rota está protegida e podemos executar o callback
                const output = await callback(req.params, req.body);
                res.json(output);
            } catch (error: any) {
                console.error('Erro ao acessar sessão Keycloak:', error);
                res.status(422).json({
                    message: error.message
                });
            }
        });
    }

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Servidor está ouvindo na porta ${port}`);
        });
    }

    configureProtectMiddleware(protectMiddleware: express.RequestHandler): void {
        this.app.use(protectMiddleware);
    }
}
