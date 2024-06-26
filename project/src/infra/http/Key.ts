import KeycloakConnect from 'keycloak-connect';
import session from 'express-session';

export const MemoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
  realm: "test",
  "auth-server-url": "http://localhost:8080/auth",
  "ssl-required": "external",
  resource: "node",
  "confidential-port": 0
  };

const keycloakMeu = new KeycloakConnect({});

export default keycloakMeu;
