"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const nome = document.getElementById("name");
const sobrenome = document.getElementById("surname");
const cidadeDeNascimento = document.getElementById("birth-place");
const numeroAleatorio = Math.round(Math.random() * 10);
const btnSubmit = document.getElementById("submit");
const conn = mysql2_1.default.createPool({
    host: "localhost",
    port: 8080,
    user: "thiagoAdmin",
    password: "Ss7548916@",
    database: "dbTestes",
});
btnSubmit.onclick = () => {
    conn.query(`INSERT INTO usuarios (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome.value}, ${sobrenome.value}, ${cidadeDeNascimento.value});`, (erro) => {
        if (erro) {
            alert(erro);
        }
        else {
            console.log("Sucesso!!");
        }
    });
};
