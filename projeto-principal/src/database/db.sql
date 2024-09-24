DROP DATABASE IF EXISTS login_register_system;

CREATE DATABASE IF NOT EXISTS login_register_system;

USE login_register_system;

CREATE TABLE users (
  user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(120) NOT NULL,
  user_email VARCHAR(120) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_data DATETIME NOT NULL
);

CREATE TABLE admin_users (
  admin_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  admin_name VARCHAR(120) NOT NULL,
  admin_email VARCHAR(120) NOT NULL,
  admin_password VARCHAR(255) NOT NULL,
  admin_data DATETIME NOT NULL
);

CREATE TABLE user_images(
user_image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_image_name VARCHAR(255) NOT NULL,
user_image_date DATETIME NOT NULL
);