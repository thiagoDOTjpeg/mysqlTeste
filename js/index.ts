import * as mysql from "mysql";

const connectar = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "thiagoAdmin",
  password: "Ss7548916@",
  database: "dbTestes",
});

const numeroAleatorio = Math.round(Math.random() * 10);

const nome = document.getElementById("input-name")?.innerText;
const sobrenome = document.getElementById("input-sobrenome")?.innerText;
const cidadeDeNascimento = document.getElementById(
  "input-cidade-nascimento"
)?.innerText;

const enviarDados = connectar.query(
  `INSERT INTO usuario (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome}, ${sobrenome}, ${cidadeDeNascimento})`,
  (erro) => {
    if (erro) throw alert("Deu Erro: " + erro);

    alert("Envio feito com sucesso!!!");
  }
);
