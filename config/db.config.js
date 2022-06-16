'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'frase'
});

dbConn.connect(function(err){
    if(err) {
        throw err
    } else {
        console.log("Conectado com sucesso!");
   }
});

module.exports = dbConn;