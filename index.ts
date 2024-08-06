import mysql from "mysql2";

const nome = document.getElementById("name") as HTMLInputElement;
const sobrenome = document.getElementById("surname") as HTMLInputElement;
const cidadeDeNascimento = document.getElementById(
  "birth-place"
) as HTMLInputElement;
const numeroAleatorio = Math.round(Math.random() * 10);

const conn = mysql.createPool({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "Ss754891666Adsf@",
  database: "dbTestes",
});

document.getElementById("sign-in-form")?.addEventListener("submit", () => {
  conn.query(
    `INSERT INTO usuarios (userID, nome, sobrenome, cidadeDeNascimento) VALUES (${numeroAleatorio}, ${nome.value}, ${sobrenome.value}, ${cidadeDeNascimento.value});`,
    (erro) => {
      if (erro) {
        alert(erro);
      } else {
        console.log("Sucesso!!");
      }
    }
  );
});
