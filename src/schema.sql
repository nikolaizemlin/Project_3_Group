
create database recipe;

use recipe;

Drop table if Exists recipe ;


create table recipe(
 ID int NOT NULL AUTO_INCREMENT,
 Type varchar(10) Not Null,
 Name varchar(1000)  NOT NULL,
 Ingredients varchar(250) NOT NULL,
 instructions varchar (1000) NOT NULL,
Primary Key (ID)
);