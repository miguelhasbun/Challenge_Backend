CREATE DATABASE IF NOT exists challengeTest;

USE challengeTest;

CREATE TABLE tareas (
	id INT (11) NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(45) DEFAULT NULL,
    finalizado bool,
    PRIMARY KEY (id)
);


DESCRIBE tareas;

INSERT INTO tareas VALUES
	(1, 'Trabajar en el challenge', true),
    (2, 'Cocinar', false),
    (3, 'Preparar el stream', true);
    
SELECT * FROM tareas;

DELETE  FROM tareas where id >=1;