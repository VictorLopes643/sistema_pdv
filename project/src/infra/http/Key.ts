import KeycloakConnect from 'keycloak-connect';
import session from 'express-session';

export const MemoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
  realm: 'pdv',
  'bearer-only': true,
  'auth-server-url': 'http://localhost:8080/',
  'ssl-required': 'external',
  resource: 'nodejs',
  'confidential-port': 0
  };

const keycloakMeu = new KeycloakConnect({},config);
// const keycloakMeu = new KeycloakConnect({store: MemoryStore},config);

export default keycloakMeu;
