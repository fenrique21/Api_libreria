const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) =>{
    const{id} = req.params;
        mysqlConnection.query('SELECT * FROM Factura', (err, rows, fields) =>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err)
            }
        });
});

module.exports = router;