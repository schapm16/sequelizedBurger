DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR (40),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY(id)
);