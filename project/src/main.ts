// import NewStore from "./application/usecase/NewStore";
// import { ExpressAdapter } from "./infra/http/HttpServer";
// import StoreController from "./infra/http/StoreController";
// import { StoreDAODatabase } from "./infra/repository/StoreDAO";
// import Keycloak from 'keycloak-connect';
import session from 'express-session'
// import express from 'express'
// import keycloakMeu from "./infra/http/Key";
// const httpServer = new ExpressAdapter();
// const newStore = new NewStore(new StoreDAODatabase());
// new StoreController(httpServer, newStore); 

// httpServer.listen(3000);

import express from 'express';
import keycloakMeu, { MemoryStore } from './infra/http/Key';

const app = express();
const port = 3000;
  app.use(session({
    secret: 'mySecret ',
    resave: false,
    saveUninitialized: true,
    store: MemoryStore
  }));
app.use(keycloakMeu.middleware({
  admin: '/',
  logout: '/logout',
}));
app.use(
  session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    store: MemoryStore,
    cookie: {
        maxAge: 60000
    }
  })
)
app.get('/public', (req, res) => {
  res.json({message: 'public'});
});

app.get('/', keycloakMeu.protect(), (req, res) => {
  res.json({message: 'admin'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});