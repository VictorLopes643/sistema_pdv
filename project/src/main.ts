import session from 'express-session'
import express from 'express';
import KeycloakConnect from 'keycloak-connect';
import axios from 'axios';

const app = express();
const port = 3000;
var memoryStore = new session.MemoryStore();

// axios.get('http://host.docker.internal:8080/auth/realms/free/.well-known/openid-configuration').then((response) => {
//   console.log(response.data);
// }
// ).catch((error) => {
//   console.error(error);
// });
var keycloak = new KeycloakConnect({ store: memoryStore});
app.use(
  session({
    secret: '123456',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
    cookie: {
        maxAge: 60000
    }
  })
)

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}));
app.get('/public', (req, res) => {
  res.json({message: 'public'});
});
app.get('/', keycloak.protect(), (req, res) => {
  res.json({message: 'admin'});
});
app.get('/private', keycloak.protect(), (req, res) => {
  res.json({message: 'admin'});
});
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});