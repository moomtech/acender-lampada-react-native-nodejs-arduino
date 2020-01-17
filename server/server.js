const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const fs = require("fs");
const five = require("johnny-five");
const board = new five.Board();

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }

    res.writeHead(200);
    res.end(data);
  });
});

board.on("ready", () => {
  const relay = new five.Relay(10);
  io.on("connection", socket => {
    socket.on("toggleLight", () => {
      relay.toggle();
    });
  });
});

http.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});
