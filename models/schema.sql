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
	tip_id INT(30)PRIMARY KEY AUTO_INCREMENT NOT NULL,
	employee_id INT(30) UNSIGNED NOT NULL REFERENCES employees(employee_id),
	tip_amount FLOAT(5,2) NOT NULL,
	tip_fees FLOAT(5,2) NOT NULL,
	tip_final FLOAT(5,2) NOT NULL	
);

CREATE TABLE IF NOT EXISTS combinedTips AS (SELECT employees.employee_id, tips.tip_id, employees.first_name, employees.last_name, tips.tip_amount, tips.tip_fees, tips.tip_final FROM employees INNER JOIN tips ON employees.employee_id = tips.employee_id);



CREATE TABLE IF NOT EXISTS user {
    username VARCHAR(10) NOT NULL PRIMARY KEY,
    password = VARCHAR(30) NOT NULL
};

UPDATE combinedTips
ON employees.employee_id, tips.tip_id,tips.tip_amount, tips.tip_fees, tips.tip_final
LEFT JOIN tips 
WHERE combinedTips.tip_id = tips.tip_id
