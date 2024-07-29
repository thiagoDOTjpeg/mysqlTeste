"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var connectar = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "thiagoAdmin",
  password: "Ss7548916@",
  database: "dbTestes",
});
var numeroAleatorio = Math.round(Math.random() * 10);
var nome =
  (_a = document.getElementById("input-name")) === null || _a === void 0
    ? void 0
    : _a.innerText;
var sobrenome =
  (_b = document.getElementById("input-sobrenome")) === null || _b === void 0
    ? void 0
    : _b.innerText;
var cidadeDeNascimento =
  (_c = document.getElementById("input-cidade-nascimento")) === null ||
  _c === void 0
    ? void 0
    : _c.innerText;
var enviarDados = connectar.query(
  "INSERT INTO usuario (userID, nome, sobrenome, cidadeDeNascimento) VALUES ("
    .concat(numeroAleatorio, ", ")
    .concat(nome, ", ")
    .concat(sobrenome, ", ")
    .concat(cidadeDeNascimento, ")"),
  function (erro) {
    if (erro) throw alert("Deu Erro: " + erro);
    alert("Envio feito com sucesso!!!");
  }
);
