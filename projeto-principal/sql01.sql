-- DROP TABLE users;

CREATE SCHEMA IF NOT EXISTS `login_register_system` DEFAULT CHARACTER SET utf8 ;
USE `login_register_system` ;

-- -----------------------------------------------------
-- Table `login_register_system`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
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
CREATE TABLE IF NOT EXISTS `posts` (
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
    REFERENCES `users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `comments` (
  `commnet_id` INT NOT NULL AUTO_INCREMENT,
  `comment_content` LONGTEXT NULL,
  `users_user_id` INT NOT NULL,
  `posts_post_id` INT NOT NULL,
  PRIMARY KEY (`commnet_id`),
  INDEX `fk_comments_users1_idx` (`users_user_id` ASC) VISIBLE,
  INDEX `fk_comments_posts1_idx` (`posts_post_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_user_id`)
    REFERENCES `users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`posts_post_id`)
    REFERENCES `posts` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

ALTER TABLE `comments`
DROP FOREIGN KEY `fk_comments_posts1`;

ALTER TABLE `comments` ADD CONSTRAINT `fk_comments_posts1`
FOREIGN KEY (`posts_post_id`)
REFERENCES `posts` (`post_id`)
ON DELETE CASCADE
ON UPDATE NO ACTION;


SELECT 
    c.commnet_id AS comment_id,
    c.comment_content AS comment_content,
    c.comment_date AS comment_date,
    u.user_id AS user_id,
    u.user_name AS user_name,
    u.user_email AS user_email,
    p.post_id AS post_id,
    p.post_title AS post_title,
    p.post_content AS post_content
FROM 
    comments c
JOIN 
    users u ON c.users_user_id = u.user_id
JOIN 
    posts p ON c.posts_post_id = p.post_id
WHERE 
    p.post_id = 7
ORDER BY 
	c.comment_date DESC;
    
SELECT * FROM posts;
SELECT * FROM users;

ALTER TABLE comments ADD comment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;


SELECT users.user_id,
	users.user_name,
	users.user_email,
	users.user_img_profile,
	posts.post_id,
	posts.post_title,
	posts.post_content,
	posts.post_slug,
	posts.post_date
FROM 
	users
INNER JOIN 
	posts 
ON 
	users.user_id = posts.users_user_id
ORDER BY 
	posts.post_date DESC;