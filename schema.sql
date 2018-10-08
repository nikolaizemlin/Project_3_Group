create database beer;

use beer;

create table mem (
	MemID INT NOT NULL AUTO_INCREMENT,
    First_Name VARCHAR(50) NULL,
    Last_Name VARCHAR(50) NULL,
    Email VARCHAR(50) NULL,
    MemPassword VARCHAR(50) NULL,
    PRIMARY KEY (MemID)
)


create table blog (
    PostingID INT NOT NULL AUTO_INCREMENT,
	MemBlog TEXT(1000) NULL,
    PRIMARY KEY (PostingID)
    
)

create table recipe (
    recipeID INT NOT NULL AUTO_INCREMENT,
    TypeofBeer VARCHAR(50) NULL,
    Ingredients TEXT(400) NULL,
    Instruction TEXT(400) NULL,
    PRIMARY KEY (recipeID)
)

