'use strict';

const Frase = require("../models/frase.model");

exports.findAll = (_req, res) => {
    Frase.findAll(
        (err, frase) => {
            if (err)
                res.send(err);
            console.log("res", frase);
            res.send(frase);
        }
    );
}

exports.create = function(req, res) {
    const frase = new Frase(req.body);
    if(req.body.construtor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true, message: "Erro na requisição."
        });
    } else {
        Frase.create(frase, function(err, frase){
            if(err)
                res.send(err);
            res.json({
            error: false,
            message: "Frase cadastrada com sucesso!",
            data: frase
         });
       });
    }
}

exports.findById = function (req, res) {
    Frase.findById(req.params.id, function(err, frase){
    if(err)
        res.send(err);
    res.json(frase);
    });
}

exports.update = function(req, res) {
    if(req.body.construtor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Erro ao atualizar dados da frase."
        });
    } else {
        Frase.update(req.params.id, new Frase(req.body), function (err, _livro){
            if(err)
                res.send(err);

            res.json({
                error: false,
                message: "Frase atualizada com sucesso."
            })
        });
    }
}

exports.delete = function(req, res) {
    Livro.delete(req.params.id, (err) => {
            if (err)
                res.send(err);
            res.json({
                error: false,
                message: "Frase deletada com sucesso."
            });
        }
    );
}