'use strict';

var dbConn = require ("../../config/db.config");

var Frase = function (frase) {
    this.fre_texto = frase.fre_texto;
    this.fre_autor = frase.fre_autor;
}

/**
 * Inseri uma nova frase
 * 
 * @param {*} frase
 * @param {*} result 
 * 
 * @author Beatriz Santos Andrade
 * @since 1.0.0
 */
Frase.create = function (frase, result) {
    dbConn.query("INSERT INTO fre_frase set ?", frase,
        function(err, res){
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res.insertId);
            }
        }
    );
}

/**
 * Retorna frase pelo seu código.
 * 
 * @param {*} id
 * @param {*} result 
 * 
 * @author Beatriz Santos Andrade
 * @since 1.0.0
 */
Frase.findById = (id, result) => {
    dbConn.query(
        "SELECT * FROM fre_frase WHERE fre_codigo = ? ", id, 
        function (err, res) {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
}

/**
 * Retorna frases.
 * 
 * @param {*} result 
 * 
 * @author Beatriz Santos Andrade
 * @since 1.0.0
 */
Frase.findAll = (result) => {
    dbConn.query("SELECT * FROM fre_frase",
        function (err, res) {
            if (err) {
                console.log("Error:", err);
            } else {
                result(null, res);
            }
        }
    );
}

/**
 * Atualiza frase pelo seu código.
 * 
 * @param {*} id
 * @param {*} frase 
 * @param {*} result 
 * 
 * @author Beatriz Santos Andrade
 * @since 1.0.0
 */
Frase.update = function(id, frase, result){
    dbConn.query("UPDATE fre_frase SET fre_texto = ? WHERE fre_codigo = ?", [frase.fre_texto, id], 
    function(err, res){
        if (err) {
            console.log("Error", err);
            result(null, err);
        } else {
            result(null, res);
        }
      }
   );
}

/**
 * Apaga frase pelo seu código.
 * 
 * @param {*} id
 * @param {*} result 
 * 
 * @author Beatriz Santos Andrade
 * @since 1.0.0
 */
Frase.delete = function (id, result) {
    dbConn.query("DELETE FROM fre_frase WHERE fre_codigo = ?", [id],
            function(err, res){
            if (err) {
                console.log("Error", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
}

module.exports = Frase;