// src/routes/pontuacaoRoutes.js
var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");


router.post('/pontuacaoUsuario', function (req, res) {
    pontuacaoController.salvarPontuacao(req, res);
})

module.exports = router;
