-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


CREATE DATABASE siterap;
USE siterap;

CREATE TABLE quiz (
idQuiz int primary key auto_increment,
pontuacao float
);

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(80),
email varchar(45),
dtNasc date,
senha varchar(45)
);

