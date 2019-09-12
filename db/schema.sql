--Create burgers_db--
CREATE DATABASE burgers_db;
--Switch to or use burgers_db--
USE burgers_db;
--Create burgers table with following fields: id, burger_name, devoured--
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN
)
