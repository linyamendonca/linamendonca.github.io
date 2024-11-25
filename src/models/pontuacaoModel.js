var database = require("../database/config");

function salvarPontuacao(idUsuario, pontuacaoUsuario) {
    console.log("Chegando no model com os dados:", { idUsuario, pontuacaoUsuario });

    var instrucaoSql = `
    INSERT INTO quiz (pontuacao, fkUsuario)
    VALUES (${pontuacaoUsuario}, ${idUsuario});
    `;

    console.log("Executando a instrução SQL segura: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacoes() {
    var instrucaoSql = `
        SELECT nome, pontuacao FROM quiz
        INNER JOIN usuario ON quiz.fkUsuario = usuario.id
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    salvarPontuacao,
    buscarPontuacoes
};