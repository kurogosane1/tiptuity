CREATE DATABASE IF NOT EXISTS tips_db;

-- we are telling the system to use burger_db
USE burger_db;

CREATE TABLE IF NOT EXISTS employees
(
    employee_id INT(30)AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(60),
    employee_address VARCHAR(90),
    date_joined DATE
);

-- this the tips table to show the collected amount--
CREATE TABLE IF NOT EXISTS tips 
(
	tip_id INT(30)AUTO_INCREMENT NOT NULL PRIMARY KEY,
	employee_id SMALLINT UNSIGNED NOT NULL REFERENCES `employees`(`employee_id`),
	tip_amount INT(30) NOT NULL,
	tip_fees INT(30) NOT NULL,
	tip_final INT(30) NOT NULL	
);


CREATE TABLE IF NOT EXISTS user {
    username VARCHAR(10) NOT NULL PRIMARY KEY,
    password = VARCHAR(30) NOT NULL
};


