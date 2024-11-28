-- DROP TABLE users;

CREATE SCHEMA IF NOT EXISTS `login_register_system` DEFAULT CHARACTER SET utf8 ;
USE `login_register_system` ;

-- -----------------------------------------------------
-- Table `login_register_system`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `login_register_system`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(120) NOT NULL,
  `user_email` VARCHAR(120) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_img_profile` VARCHAR(255) NULL,
  `user_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `login_register_system`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `login_register_system`.`posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `post_title` VARCHAR(255) NOT NULL,
  `post_content` LONGTEXT NOT NULL,
  `post_slug` VARCHAR(255) NOT NULL,
  `post_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_user_id` INT NOT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_posts_users1_idx` (`users_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users1`
    FOREIGN KEY (`users_user_id`)
    REFERENCES `login_register_system`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
