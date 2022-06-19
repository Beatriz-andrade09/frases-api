/**
 * db.config 
 * 
 * @author Beatriz Santos Andrade
 * @version 1.0.0
 */

'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'frase'
});

dbConn.connect(function(err){
    if(err) 
        throw err
});

module.exports = dbConn;