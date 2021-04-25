const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/:id', (req, res) =>{
    const{id} = req.params;
        mysqlConnection.query('SELECT * FROM Producto WHERE id = ?',[id], (err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
});
router.get('/', (req, res) =>{
    const{id} = req.params;
        mysqlConnection.query('SELECT * FROM Producto',(err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
});

router.post('/',async(req, res)=>{
    const {codigo, nombre, precio, cantidad, estado} = req.body;
    var newLink = [
        [codigo,
        nombre,
        precio,
        cantidad,
        estado]
    ];
    var sql = ('INSERT INTO Producto(codigo, nombre, precio, cantidad, estado) VALUES ?');
    await mysqlConnection.query(sql,[newLink],function (err, result){
        if(err){
            //(res.json(rows);
            throw(err);
        }
        console.log(result.affectedRows);
    });
});

module.exports = router;