import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Vamos começar a festa :)");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});
