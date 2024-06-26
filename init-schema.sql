DO $$
BEGIN
    IF NOT EXISTS(
        SELECT schema_name
        FROM information_schema.schemata
        WHERE schema_name = 'keycloak_schema'
    ) THEN
        EXECUTE 'CREATE SCHEMA keycloak_schema';
    END IF;
END
$$;