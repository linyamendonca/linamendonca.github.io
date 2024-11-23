var database = require("../database/config");

function inserirPontuacao(idUsuario, pontuacaoUsuario) {
  console.log('estou chegando aqui')

  var instrucaoSql = `INSERT INTO pontuacao (pontuacao, fkUsuario)
  VALUES (${pontuacaoUsuario}, ${idUsuario});`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  inserirPontuacao
}
