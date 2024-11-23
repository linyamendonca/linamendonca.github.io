CREATE DATABASE siterap;
USE siterap;

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(80),
email varchar(45),
dtNasc date,
senha varchar(45)
);

CREATE TABLE pontuacao (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuario int, 
CONSTRAINT fkUserPontos FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);
