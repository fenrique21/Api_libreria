const mysql = require('mysql2');
const { route } = require('./routes');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fercho.21',
    database: 'libreria',
    connectionLimit: 10
});


mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;

    }else{
        console.log('conexion exitosa');
    }
})
module.exports =  mysqlConnection;