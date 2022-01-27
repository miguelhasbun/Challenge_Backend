create procedure taskAddOrEdit(
	IN _id INT,
    IN _descripcion VARCHAR(45)
)
BEGIN
	IF _id= 0 THEN
		INSERT INTO tareas (descripcion)
        VALUES (_descripcion);
        SET _id= LAST_INSERT_ID();
	ELSE
		UPDATE tareas
        SET
			descripcion= _descripcion
            WHERE id= _id;
	END IF;
    
    SELECT _id as id;
END