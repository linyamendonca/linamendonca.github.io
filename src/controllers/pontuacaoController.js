// src/controllers/pontuacaoController.js
var pontuacaoModel = require("../models/pontuacaoModel");

function salvarPontuacao(req, res) {

    console.log("Dados recebidos pelo servidor:", req.body);

    var idUsuario = req.body.idUsuarioServer;
    var pontuacaoUsuario = req.body.pontuacaoUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("ID está undefined!");
    } else if (pontuacaoUsuario == undefined) {
        res.status(400).send("Pontuação está undefined!");
    } else {
        pontuacaoModel.salvarPontuacao(idUsuario, pontuacaoUsuario)
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

function buscarPontuacoes(req, res) {
    pontuacaoModel.buscarPontuacoes()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarTotalUsuarios(req, res) {
    console.log("Buscando o total de usuários...");

    pontuacaoModel.buscarTotalUsuarios()
        .then(function (resultado) {
            console.log(resultado);

            const totalUsuarios = resultado;

            res.json({ totalUsuarios: totalUsuarios });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ message: "Erro ao buscar total de usuários", error: erro });
        });
}

function buscarMediaPontuacao(req, res) {
    console.log("Buscando o total de usuários...");

    pontuacaoModel.buscarMediaPontuacao()
        .then(function (resultado) {
            console.log(resultado);

            const MediaPontuacao = resultado;

            res.json({ MediaPontuacao: MediaPontuacao });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ message: "Erro ao buscar total de usuários", error: erro });
        });
}
function buscarMediaIdade(req, res) {
    console.log("Buscando o total de usuários...");

    pontuacaoModel.buscarMediaIdade()
        .then(function (resultado) {
            console.log(resultado);

            const MediaIdade = resultado;

            res.json({ MediaIdade: MediaIdade });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ message: "Erro ao buscar total de usuários", error: erro });
        });
}

module.exports = {
    salvarPontuacao,
    buscarPontuacoes,
    buscarTotalUsuarios,
    buscarMediaPontuacao,
    buscarMediaIdade

}
