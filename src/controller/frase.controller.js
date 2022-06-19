/**
 * frase.controller 
 * 
 * @author Beatriz Santos Andrade
 * @version 1.0.0
 */

'use strict';

const Frase = require("../models/frase.model");

/**
 * Retorna todas frases.
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @author Beatriz Santos Andrade 
 * @since 1.0.0
 */
exports.findAll = (req, res) => {
    Frase.findAll(
        (err, frase) => {
            if (err)
                res.send(err);
            res.send(frase);
        }
    );
}


/**
 * Insere uma nova frase.
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @author Beatriz Santos Andrade 
 * @since 1.0.0
 */
exports.create = (req, res) => {
    const frase = new Frase(req.body);
    if (req.body.construtor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: "Erro na requisição."
        });
    } else {
        Frase.create(frase, function (err, frase) {
            if (err)
                res.send(err);
            res.json({
                error: false,
                message: "Frase cadastrada com sucesso!",
                data: frase
            });
        });
    }
}


/**
 * Retorna frase pelo seu id.
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @author Beatriz Santos Andrade 
 * @since 1.0.0
 */
exports.findById = (req, res) => {
    Frase.findById(req.params.id, function (err, frase) {
        if (err)
            res.send(err);
        res.json(frase);
    });
}


/**
 * Atualiza texto da frase pelo seu id.
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @author Beatriz Santos Andrade 
 * @since 1.0.0
 */
exports.update = (req, res) => {
    if (req.body.construtor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Erro ao atualizar dados da frase."
        });
    } else {
        Frase.update(req.params.id, new Frase(req.body), function (err, _livro) {
            if (err)
                res.send(err);

            res.json({
                error: false,
                message: "Frase atualizada com sucesso."
            });
        });
    }
}


/**
 * Apaga frase pelo seu id.
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @author Beatriz Santos Andrade 
 * @since 1.0.0
 */
exports.delete = (req, res) => {
    Frase.delete(req.params.id, (err) => {
        if (err)
            res.send(err);
        res.json({
            error: false,
            message: "Frase deletada com sucesso."
        });
    }
    );
}