// src/routes/pontuacaoRouter.js
var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");


router.post("/salvarPontuacao", function (req, res) {
    pontuacaoController.salvarPontuacao(req, res);
});

router.get("/buscarPontuacoes", function (req, res) {
    pontuacaoController.buscarPontuacoes(req, res);
});

module.exports = router;
