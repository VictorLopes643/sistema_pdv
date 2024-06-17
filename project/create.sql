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
    item_id uuid not null,
);

create table wolfs_pdv.itemsCard (
    item_id uuid primary key,
    cart_id uuid not null,
    product_id uuid not null,
    quantity int not null
);

create table wolfs_pdv.store (
    store_id uuid primary key,
    name text not null,
    description text not null
);


create table wolfs_pdv.AccessPoint (
    access_point_id uuid primary key,
    store_id uuid not null,
    name text not null,
    description text,  -- Adicionei um campo opcional de descrição para ilustrar
    foreign key (store_id) references wolfs_pdv.store(store_id)  -- Chave estrangeira referenciando a tabela store
);

insert into wolfs_pdv.AccessPoint (access_point_id, store_id, name, description)
values (
    'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
    'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
    'Access Point 1',
    'Description 1'
);

insert into wolfs_pdv.cart (cart_id, product_id, quantity)
values (
    'f1b3b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b',
    '990cba1c-6e5e-49dc-be41-9d2c665bde5f',
    1
);





insert into wolfs_pdv.product (product_id, name, description, price) values
('990cba1c-6e5e-49dc-be41-9d2c665bde5f', 'Product 1', 'Description 1', 100),
('4963a081-49a8-4025-9a88-2f94a2af7e3f', 'Product 2', 'Description 2', 200),
('7bdac0bc-7f62-4ba0-86f0-e7996000be38', 'Product 3', 'Description 3', 300),
('ec6274ae-c17d-405a-85ae-c19cc37c00c6', 'Product 4', 'Description 4', 400),
('8da29846-1444-4061-bf14-4ff7a843d0dc', 'Product 5', 'Description 5', 500)
