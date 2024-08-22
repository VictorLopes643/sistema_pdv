import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    providers: [
        KeycloakProvider({
          clientId: process.env.KEYCLOAK_ID ?? "nextJs",
          clientSecret: process.env.KEYCLOAK_SECRET ?? "cX1B1al9tP4zSLHuWr3wO5FLNwmhKa9k",
          issuer: process.env.KEYCLOAK_ISSUER ?? "http://host.docker.internal:8081/auth/realms/saas",
        })
    ]
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };