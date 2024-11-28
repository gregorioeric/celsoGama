-- ------------------------------------------------------------------
-- Este comando coloca o banco de dados que você deseja em uso.
-- ------------------------------------------------------------------
USE login_register_system;
USE `caetano_sara`;
USE `carol_gabi_melissa`;
USE `gabriel_felipe`;
USE `julia_felipe_thyago`;
USE `juliana_matheus`;
USE `laura_mariaclara_balestre`;
USE `masrcos_igor_rafael`;

-- ------------------------------------------------------------------
-- Este comando Cria a tabela.
-- ------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_users(
admin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
admin_name VARCHAR(100) NOT NULL,
admin_email VARCHAR(100) NOT NULL,
admin_password VARCHAR(255) NOT NULL,
admin_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------
-- Este comando seleciona todos os registros cadastrados na tabela.
-- ------------------------------------------------------------------
SELECT * FROM admin_users;

-- ------------------------------------------------------------------
-- Este comando grava registros na tabela.
-- ------------------------------------------------------------------
INSERT INTO admin_users(admin_name, admin_email, admin_password)
VALUES('Eric Gregorio', 'gregorio.eric@gmail.com', 'FR$5tghy6');

-- ------------------------------------------------------------------
-- Este comando deleta um registro especifico da tabela.
-- ------------------------------------------------------------------
DELETE FROM admin_users WHERE admin_id = 1;










DROP TABLE pages;
DROP TABLE position;
-- -----------------------------------------------------
-- Table `caetano_sara`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `julia_felipe_thyago`.`position` (
  `position_id` INT NOT NULL AUTO_INCREMENT,
  `position_name` VARCHAR(100) NOT NULL,
  `position_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`position_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `caetano_sara`.`pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pages` (
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
    REFERENCES `position` (`position_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE user_images(
user_image_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_image_name VARCHAR(255) NOT NULL,
user_image_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

