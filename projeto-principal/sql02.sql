-- DROP TABLE post_reclamacoes;
-- DROP TABLE users;

SELECT * FROM post_reclamacoes;
SELECT * FROM users;
-- -----------------------------------------------------
-- Table `login_register_system`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(120) NOT NULL,
  `user_cpf` VARCHAR(20) NOT NULL,
  `user_cep` VARCHAR(15) NOT NULL,
  `user_telefone` VARCHAR(15) NOT NULL,
  `user_email` VARCHAR(120) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_img_profile` VARCHAR(255),
  `user_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `login_register_system`.`post_reclamacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_reclamacoes` (
  `post_reclamacoes_id` INT NOT NULL AUTO_INCREMENT,
  `post_reclamacoes_title` VARCHAR(200) NOT NULL,
  `post_reclamacoes_bairro` VARCHAR(100) NOT NULL,
  `post_reclamacoes_cidade` VARCHAR(100) NOT NULL,
  `post_reclamacoes_uf` VARCHAR(30) NOT NULL,
  `post_reclamacoes_content` LONGTEXT NOT NULL,
  `post_reclamacoes_slug` VARCHAR(255) NOT NULL,
  `post_reclamacoes_img` VARCHAR(255),
  `post_reclamacoes_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_user_id` INT NOT NULL,
  PRIMARY KEY (`post_reclamacoes_id`),
  INDEX `fk_post_reclamacoes_users_idx` (`users_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_reclamacoes_users`
    FOREIGN KEY (`users_user_id`)
    REFERENCES `users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS user_images(
user_image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_image_name VARCHAR(255) NOT NULL,
user_image_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_users(
admin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
admin_name VARCHAR(100) NOT NULL,
admin_email VARCHAR(100) NOT NULL,
admin_password VARCHAR(255) NOT NULL,
admin_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `position` (
  `position_id` INT NOT NULL AUTO_INCREMENT,
  `position_name` VARCHAR(100) NOT NULL,
  `position_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`position_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pages` (
  `page_id` INT NOT NULL AUTO_INCREMENT,
  `page_title` VARCHAR(180) NOT NULL,
  `page_status` TINYINT(0) NOT NULL,
  `page_content` TEXT NOT NULL,
  `page_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `position_position_id` INT NOT NULL,
  PRIMARY KEY (`page_id`),
  INDEX `fk_pages_position_idx` (`position_position_id` ASC) VISIBLE,
  CONSTRAINT `fk_pages_position`
    FOREIGN KEY (`position_position_id`)
    REFERENCES `position` (`position_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- ALTER TABLE post_reclamacoes ADD post_reclamacoes_img VARCHAR(255);
-- ALTER TABLE users ADD user_img_profile VARCHAR(255);
