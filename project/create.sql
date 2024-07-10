-- Criação do esquema se não existir
DO $$
BEGIN
    IF NOT EXISTS(
        SELECT schema_name
        FROM information_schema.schemata
        WHERE schema_name = 'keycloak_schema'
    ) THEN
        EXECUTE 'CREATE SCHEMA keycloak_schema';
    END IF;
      IF NOT EXISTS(
        SELECT schema_name
        FROM information_schema.schemata
        WHERE schema_name = 'wolfs_pdv'
    ) THEN
        EXECUTE 'CREATE SCHEMA wolfs_pdv';
    END IF;
END
$$;

-- Drop do esquema anterior, se existir
DROP SCHEMA IF EXISTS wolfs_pdv CASCADE;

-- Criação do esquema principal
CREATE SCHEMA wolfs_pdv;

-- Tabelas
CREATE TABLE wolfs_pdv.product (
    product_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL
);

-- CREATE TABLE wolfs_pdv.cart (
--     cart_id UUID PRIMARY KEY,
--     item_id UUID NOT NULL
-- );

-- CREATE TABLE wolfs_pdv.itemsCard (
--     item_id UUID PRIMARY KEY,
--     cart_id UUID NOT NULL,
--     product_id UUID NOT NULL,
--     quantity INT NOT NULL
-- );

CREATE TABLE wolfs_pdv.store (
    store_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

-- CREATE TABLE wolfs_pdv.accesspoint (
--     access_point_id UUID PRIMARY KEY,
--     store_id UUID NOT NULL,
--     name TEXT NOT NULL,
--     description TEXT,
--     FOREIGN KEY (store_id) REFERENCES wolfs_pdv.store(store_id)
-- );

-- -- Inserções de dados
-- INSERT INTO wolfs_pdv.accesspoint (access_point_id, store_id, name, description)
-- VALUES (
--     'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
--     'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
--     'Access Point 1',
--     'Description 1'
-- );

-- INSERT INTO wolfs_pdv.cart (cart_id, item_id)
-- VALUES (
--     'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
--     '990cba1c-6e5e-49dc-be41-9d2c665bde5f'
-- );

INSERT INTO wolfs_pdv.product (product_id, name, description, price)
VALUES
('990cba1c-6e5e-49dc-be41-9d2c665bde5f', 'Product 1', 'Description 1', 100),
('4963a081-49a8-4025-9a88-2f94a2af7e3f', 'Product 2', 'Description 2', 200),
('7bdac0bc-7f62-4ba0-86f0-e7996000be38', 'Product 3', 'Description 3', 300),
('ec6274ae-c17d-405a-85ae-c19cc37c00c6', 'Product 4', 'Description 4', 400),
('8da29846-1444-4061-bf14-4ff7a843d0dc', 'Product 5', 'Description 5', 500);
