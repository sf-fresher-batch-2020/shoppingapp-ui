###Creating Database
create database shopping_app_db;

###Using Created Database
use shopping_app_db;

###Creating  Users Table
create table users(
username varchar(50) not null,
email varchar(30) not null unique, 
password varchar(20) not null); 

###Inserting  values into users table
insert into users(username,email,password) values("kalyani", "kalyani@gmail.com", "123");
insert into users(username,email,password) values("k", "k@a.com", "abc");

###Selecting all values from users table
select * from users;

###Selecting particular user from users table  using where clause
select * from users where username="k";

=========================================================================================================

###creating products table
create table products(
product_id integer primary key auto_increment,
product_name varchar(50) not null,
product_price integer(10) not null,
product_description text(500),
product_count integer(5));

###Inserting values into products table
insert into products(product_id,product_name,product_pricw,product_description,product_count) values(1,"silk thread bangles", 130, "Handmade bangles",4);
insert into products(product_id,product_name,product_pricw,product_description,product_count) values(3,"silk thread bangles", 150, "Handmade silk Bangles",3);

###Selecting all products from  proucts table
select * from products; 

=============================================================================================================================================

###Altering table to add a column to users table (edited) 
alter table users add column (id bigint primary key auto_increment);

=============================================================================================================================================

###Creating orders table with foreign key referencing from products table
create table orders(
id bigint primary key auto_increment,
user_id bigint not null,
total_amount int not null,
order_date timestamp not null default current_timestamp,
status varchar(100) not null,
foreign key (user_id) references users(id)); 

###Inserting values into orders table
insert into orders(user_id,total_amount,status) values (1,450,"success");

###Selecting all order details
select * from orders;