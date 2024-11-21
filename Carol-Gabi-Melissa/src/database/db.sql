ALTER TABLE books ADD book_slug VARCHAR(255);
ALTER TABLE books MODIFY COLUMN book_slug VARCHAR(255) AFTER book_desc;

-- -----------------------------------------------------
-- Table `alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `alunos` (
  `aluno_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_name` VARCHAR(120) NOT NULL,
  `aluno_email` VARCHAR(120) NOT NULL,
  `aluno_serie` VARCHAR(10) NOT NULL,
  `aluno_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aluno_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `books` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `book_image` VARCHAR(255) NOT NULL,
  `book_name` VARCHAR(120) NOT NULL,
  `book_autor` VARCHAR(100) NOT NULL,
  `book_categoria` VARCHAR(100) NOT NULL,
  `book_desc` TEXT NOT NULL,
  `book_slug` VARCHAR(255),
  `book_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`book_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loan` (
  `loan_id` INT NOT NULL AUTO_INCREMENT,
  `books_book_id` INT NOT NULL,
  `alunos_aluno_id` INT NOT NULL,
  `loan_date_atual` DATE NOT NULL,
  `loan_date_entrega` DATE NOT NULL,
  `loan_date_register` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`loan_id`),
  INDEX `fk_loan_books_idx` (`books_book_id` ASC) VISIBLE,
  INDEX `fk_loan_alunos1_idx` (`alunos_aluno_id` ASC) VISIBLE,
  CONSTRAINT `fk_loan_books`
    FOREIGN KEY (`books_book_id`)
    REFERENCES `books` (`book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_loan_alunos1`
    FOREIGN KEY (`alunos_aluno_id`)
    REFERENCES `alunos` (`aluno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;