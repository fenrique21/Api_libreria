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

module.exports = router;