CREATE DATABASE IF NOT exists challenge;

USE challenge;

CREATE TABLE tareas (
	id INT (11) NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tareas VALUES
	(1, 'Trabajar en el challenge'),
    (2, 'Cocinar'),
    (3, 'Preparar el stream');
    
SELECT * FROM tareas;

DELETE  FROM tareas where id >=1;
DESCRIBE tareas;