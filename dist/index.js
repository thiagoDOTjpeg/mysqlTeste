"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const nome = document.getElementById("name");
const sobrenome = document.getElementById("surname");
const cidadeDeNascimento = document.getElementById("birth-place");
const numeroAleatorio = Math.round(Math.random() * 10);
const conn = mysql2_1.default.createPool({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Ss754891666Adsf@",
    database: "dbTestes",
});
(_a = document.getElementById("sign-in-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", () => {
    conn.query(`INSERT INTO usuarios (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome.value}, ${sobrenome.value}, ${cidadeDeNascimento.value});`, (erro) => {
        if (erro) {
            alert(erro);
        }
        else {
            console.log("Sucesso!!");
        }
    });
});
