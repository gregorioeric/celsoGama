CREATE TABLE books(
book_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
book_image VARCHAR(255) NOT NULL,
book_name VARCHAR(180) NOT NULL,
book_autor VARCHAR(255) NOT NULL,
book_categoria VARCHAR(255) NOT NULL,
book_desc TEXT NOt NULL,
book_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);