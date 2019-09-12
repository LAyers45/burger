--Drop Database if it exists--
DROP DATABASE IF EXISTS burgers_db;
--Create burgers_db--
CREATE DATABASE burgers_db;
--Switch to or use burgers_db--
USE burgers_db;
--Create burgers table with following fields: id, burger_name, devoured--
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
