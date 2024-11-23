// src/controllers/pontuacaoController.js
var pontuacaoModel = require("../models/pontuacaoModel");

function salvarPontuacao(req, res) {

    console.log("Dados recebidos pelo servidor:", req.body);
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var idUsuario = req.body.idUsuarioServer;
  var pontuacaoUsuario = req.body.pontuacaoUsuarioServer;
 
  // Faça as validações dos valores
  if (idUsuario == undefined) {
      res.status(400).send("ID está undefined!");
  } else if (pontuacaoUsuario == undefined) {
      res.status(400).send("Pontuação está undefined!");
  } else {
      // Passe os valores como parâmetro e vá para o arquivo pontuacaoModel.js
      pontuacaoModel.inserirPontuacao(idUsuario, pontuacaoUsuario)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro ao inserir a pontuação! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  }
}

module.exports = {
  salvarPontuacao
  // recuperarPontuacoes 
};
