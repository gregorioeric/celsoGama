DROP DATABASE IF EXISTS login_register_system;

CREATE DATABASE IF NOT EXISTS login_register_system;

USE login_register_system;

CREATE TABLE users (
  user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(120) NOT NULL,
  user_email VARCHAR(120) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_users (
  admin_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  admin_name VARCHAR(120) NOT NULL,
  admin_email VARCHAR(120) NOT NULL,
  admin_password VARCHAR(255) NOT NULL,
  admin_data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_images(
user_image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_image_name VARCHAR(255) NOT NULL,
user_image_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



-- CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `login_register_system`.`position` (
  `position_id` INT NOT NULL AUTO_INCREMENT,
  `position_name` VARCHAR(100) NOT NULL,
  `position_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`position_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `login_register_system`.`pages` (
  `page_id` INT NOT NULL AUTO_INCREMENT,
  `page_title` VARCHAR(180) NOT NULL,
  `page_status` TINYINT(0) NOT NULL,
  `page_content` LONGTEXT NOT NULL,
  `page_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `position_position_id` INT NOT NULL,
  PRIMARY KEY (`page_id`),
  INDEX `fk_pages_position_idx` (`position_position_id` ASC) VISIBLE,
  CONSTRAINT `fk_pages_position`
    FOREIGN KEY (`position_position_id`)
    REFERENCES `login_register_system`.`position` (`position_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

ALTER TABLE users ADD user_cep VARCHAR(15);
ALTER TABLE users ADD user_genero VARCHAR(80);
ALTER TABLE users ADD user_idade INT(2);
ALTER TABLE users ADD user_escolaridade VARCHAR(15);
ALTER TABLE users ADD user_curso_interesse VARCHAR(15);