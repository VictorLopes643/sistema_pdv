drop schema wolfs_pdv cascade;

create schema wolfs_pdv;

create table wolfs_pdv.product (
	product_id uuid primary key,
	name text not null,
	description text not null,
	price int not null
);

create table wolfs_pdv.cart (
    cart_id uuid primary key,
    product_id uuid not null,
    quantity int not null
);



insert into wolfs_pdv.product (product_id, name, description, price) values
('990cba1c-6e5e-49dc-be41-9d2c665bde5f', 'Product 1', 'Description 1', 100),
('4963a081-49a8-4025-9a88-2f94a2af7e3f', 'Product 2', 'Description 2', 200),
('7bdac0bc-7f62-4ba0-86f0-e7996000be38', 'Product 3', 'Description 3', 300),
('ec6274ae-c17d-405a-85ae-c19cc37c00c6', 'Product 4', 'Description 4', 400),
('8da29846-1444-4061-bf14-4ff7a843d0dc', 'Product 5', 'Description 5', 500)


create table wolfs_pdv.store (
    store_id uuid primary key,
    name text not null,
    description text not null
);