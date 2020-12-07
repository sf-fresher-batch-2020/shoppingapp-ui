###Creating Database 
create database shopping_app_db;

###Using Created Database 
use shopping_app_db;

###Creating Users Table 
CREATE TABLE `users` ( 
`username` varchar(50) NOT NULL,`
email` varchar(30) NOT NULL,  
`password` varchar(20) NOT NULL,  
`id` bigint NOT NULL AUTO_INCREMENT,  
`role` varchar(10) DEFAULT NULL,  
PRIMARY KEY (`id`),  
UNIQUE KEY `email` (`email`)
);

###Inserting values into users table 
insert into users(username,email,password) values("kalyani", "kalyani@gmail.com", "123");
insert into users(username,email,password) values("k", "k@a.com", "abc");

###Selecting all values from users table 
select * from users;

###Selecting particular user from users table using where clause 
select * from users where username="k";


-------------------------------------------------------------------------------------------
###creating products table 
CREATE TABLE `products` ( 
`product_id` int NOT NULL AUTO_INCREMENT,  
`product_name` varchar(50) NOT NULL,  
`product_price` int NOT NULL,  
`product_description` text,  
`category` varchar(20) DEFAULT NULL, 
`productrange` varchar(20) DEFAULT NULL,  
`image_url` varchar(300) DEFAULT NULL,  
PRIMARY KEY (`product_id`)
);


###Inserting values into products table 
INSERT INTO `products` VALUES (1,'silk thread bangles',130,'Handmade bangles','bangles','medium','assets/image/img1.jpg');
INSERT INTO `products` VALUES (2,'silk thread bangles',121,'Handmade bangles','bangles','medium','assets/image/img2.jpg');
INSERT INTO `products` VALUES (3,'silk thread bangles',250,'Handmade bangles','bangles','high','assets/image/img3.jpg');
INSERT INTO `products` VALUES (4,'silk thread bracelet',60,'Handmade bangles','bracelets','low','assets/image/img4.jpg');

###Selecting all products from proucts table 
select * from products;


------------------------------------------------------------------------------------------------------------------------------

###creating orders table 
CREATE TABLE `orders` (  
`id` bigint NOT NULL AUTO_INCREMENT,  
`user_id` bigint NOT NULL,  
`total_amount` int NOT NULL,  
`order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,  
`status` varchar(100) NOT NULL,  
PRIMARY KEY (`id`),  
KEY `user_id` (`user_id`),  
CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

###Inserting values into orders table 
insert into orders(user_id,total_amount,status) values (1,450,"success");

###Selecting all order details 
select * from orders;

-------------------------------------------------------------------------------------
###creating order_items table
CREATE TABLE `order_items` (  
`id` bigint NOT NULL AUTO_INCREMENT,  
`order_id` bigint NOT NULL,  
`product_id` int NOT NULL,  
`price` varchar(20) DEFAULT NULL,  
`quantity` int DEFAULT NULL,  
`status` varchar(20) DEFAULT 'ORDERED',  
PRIMARY KEY (`id`),  
KEY `product_id` (`product_id`),  
KEY `order_id` (`order_id`),  
CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),  
CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ;


###Selecting all ordered items details
select * from order_items;
