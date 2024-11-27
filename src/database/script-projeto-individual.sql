-- PROJETO INDIVIDUAL
-- Comando pra criar um usuário
-- CREATE USER 'linya'@'localhost'
	-- IDENTIFIED BY 'urubu100';
  
-- Comando para dar permissão para o usuário
-- GRANT ALL privileges ON *.*
	-- TO 'linya'@'localhost';
   
-- Comando para confirmar os acessos
-- FLUSH PRIVILEGES; 

CREATE DATABASE siterap;
USE siterap;

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(80),
email varchar(45),
dtNasc date,
senha varchar(45)
);

CREATE TABLE quiz (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuario int, 
CONSTRAINT fkUserPontos FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

-- INSERINDO DADOS PARA VERIFICAR SE ESTÁ DINÂMICO --
INSERT INTO usuario (nome, email, dtNasc, senha) VALUES 
('Rayssa', 'rayssa@gmail.com', '1990-02-15', 'Sptech@2024');

INSERT INTO quiz (pontuacao, fkUsuario) VALUES 
(7, 6);

select * from usuario;
select * from quiz;