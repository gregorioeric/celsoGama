
USE login_register_system;

DROP TABLE users;

CREATE TABLE users(
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(100) NOT NULL,
user_cpf VARCHAR(20) NOT NULL,
user_cep VARCHAR(15) NOT NULL,
user_telefone VARCHAR(15) NOT NULL,
user_email VARCHAR(100) NOT NULL,
user_password VARCHAR(255) NOT NULL,
user_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;
SELECT * FROM pages;

ALTER TABLE user_images MODIFY COLUMN user_image_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users ADD user_genero VARCHAR(80);
ALTER TABLE users ADD user_idade INT(2);
ALTER TABLE users ADD user_escolaridade VARCHAR(15);
ALTER TABLE users ADD user_curso_interesse VARCHAR(15);





























