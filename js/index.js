var _a, _b, _c;
import * as mysql from "mysql";
const connectar = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "thiagoAdmin",
    password: "Ss7548916@",
    database: "dbTestes",
});
const numeroAleatorio = Math.round(Math.random() * 10);
const nome = (_a = document.getElementById("input-name")) === null || _a === void 0 ? void 0 : _a.innerText;
const sobrenome = (_b = document.getElementById("input-sobrenome")) === null || _b === void 0 ? void 0 : _b.innerText;
const cidadeDeNascimento = (_c = document.getElementById("input-cidade-nascimento")) === null || _c === void 0 ? void 0 : _c.innerText;
const enviarDados = connectar.query(`INSERT INTO usuario (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome}, ${sobrenome}, ${cidadeDeNascimento})`, (erro) => {
    if (erro)
        throw alert("Deu Erro: " + erro);
    alert("Envio feito com sucesso!!!");
});
