const mysql = require("mysql2");

const connectionDb = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "thiagoAdmin",
  password: "Ss7548916@",
  database: "dbTestes",
});

let numeroAleatorio = parseInt(Math.random() * 10);

let nome = document.getElementById("input-nome");
let sobrenome = document.getElementById("input-sobrenome");
let cidadeDeNascimento = document.getElementById("input-cidade-nascimento");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", inserirDados());

const inserirDados = connectionDb.query(
  `INSERT INTO usuario (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome.value}, ${sobrenome.value}, ${cidadeDeNascimento.value})`,
  (erro) => {
    if (erro) {
      alert("Ocorreu um erro ao enviar os dados: ", erro);
    } else {
      alert("Dados enviados!!");
    }
  }
);
