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
        INNER JOIN usuario ON quiz.fkUsuario = usuario.id;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalUsuarios() {
    var instrucaoSql = `
        SELECT count(id) AS totalUsuarios FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado[0].totalUsuarios; // array para retorno do count para não dar conflito no meus dados de retorno
        });
}

function buscarMediaPontuacao() {
    var instrucaoSql = `
        SELECT AVG(pontuacao) as MediaPontuacao FROM quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado[0].MediaPontuacao; // array para retorno do count para não dar conflito no meus dados de retorno
        });
}

function buscarMediaIdade() {
    var instrucaoSql = `
        SELECT AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE())) AS MediaIdade
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado[0].MediaIdade; // array para retorno do count para não dar conflito no meus dados de retorno
        });
}


module.exports = {
    salvarPontuacao,
    buscarPontuacoes,
    buscarTotalUsuarios,
    buscarMediaPontuacao,
    buscarMediaIdade
};