/**
 * frase.routes 
 * 
 * @author Beatriz Santos Andrade
 * @version 1.0.0
 */

const express = require("express");
const router = express.Router();
const fraseController = require("../controller/frase.controller");

router.get("/", fraseController.findAll);
router.post("/", fraseController.create);
router.get("/:id", fraseController.findById);
router.put("/:id", fraseController.update);
router.delete("/:id", fraseController.delete);

module.exports = router;
