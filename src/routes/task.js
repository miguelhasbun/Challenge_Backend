const express = require('express');
const router= express.Router();

const mysqlConnection= require('../database');


//ruta por defecto
router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM tareas', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//ruta para buscar con un id especifico

router.get('/:id', (req, res)=>{
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM tareas WHERE id=?', [id], (err,
        rows, fields)=>{
            if (!err){
                res.json(rows[0]);
            }else{
                console.log(err);
            }
        });
});

//ruta para insertar elementos

router.post('/', (req, res) => {
    const {id, descripcion} = req.body;
    console.log(id, descripcion);
    const query = `
      SET @id = ?;
      SET @descripcion = ?;
      CALL taskAddOrEdit(@id, @descripcion);
    `;
    mysqlConnection.query(query, [id, descripcion], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tarea guardada'});
      } else {
        console.log(err);
      }
    });
  
  });

router.put('/:id', (req, res)=>{
    const {descripcion}= req.body;
    const {id}= req.params;
    const query = `
    SET @id = ?;
    SET @descripcion = ?;
    CALL taskAddOrEdit(@id, @descripcion);
  `;
  mysqlConnection.query(query, [id, descripcion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Tarea modificada'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM tareas WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tarea eliminada'});
      } else {
        console.log(err);
      }
    });
  });


module.exports= router;