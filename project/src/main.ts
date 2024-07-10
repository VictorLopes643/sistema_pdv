// import session from 'express-session'
// import express from 'express';
// import KeycloakConnect from 'keycloak-connect';
// import axios from 'axios';

import GetProducts from "./application/usecase/GetProducts";
import NewStore from "./application/usecase/NewStore";
import { ExpressAdapter } from "./infra/http/HttpServer";
import ProductController from "./infra/http/ProductController";
import StoreController from "./infra/http/StoreController";
import { ProductDAODatabase } from "./infra/repository/ProductDAO";
import { StoreDAODatabase } from "./infra/repository/StoreDAO";

// const app = express();
// const port = 3000;
// var memoryStore = new session.MemoryStore();

// var keycloak = new KeycloakConnect({ store: memoryStore});
// app.use(
//   session({
//     secret: '123456',
//     resave: false,
//     saveUninitialized: true,
//     store: memoryStore,
//     cookie: {
//         maxAge: 60000
//     }
//   })
// )

// app.use(keycloak.middleware({
//   logout: '/logout',
//   admin: '/'
// }));
// app.get('/public', (req, res) => {
//   res.json({message: 'public'});
// });
// app.get('/', keycloak.protect(), (req, res) => {
//   res.json({message: 'admin'});
// });
// app.get('/private', keycloak.protect(), (req, res) => {
//   res.json({message: 'admin'});
// });
// app.listen(port, () => {
//   console.log(`Listening on port ${port}.`);
// });


const httpServer = new ExpressAdapter();
const newStore = new NewStore(new StoreDAODatabase());
const getProducts = new GetProducts(new ProductDAODatabase());
new StoreController(httpServer, newStore); 
new ProductController(httpServer, getProducts);
httpServer.listen(3001);