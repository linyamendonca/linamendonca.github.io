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

router.get("/buscarTotalUsuarios", function(req, res){
    pontuacaoController.buscarTotalUsuarios(req, res);
})

router.get("/buscarMediaPontuacao", function(req, res){
    pontuacaoController.buscarMediaPontuacao(req, res);
})

router.get("/buscarMediaIdade", function(req, res){
    pontuacaoController.buscarMediaIdade(req, res);
})

module.exports = router;
