const http = require("http");
const express = require("express");
const path = require("path");
const { initNodeRED } = require("./node-red");

const app = express();

const server = http.createServer(app);
initNodeRED(server, app);

app.use("/", express.static(path.join(__dirname, "node_modules", "201911-komaba-fes-game-client", "dist")))

server.listen(9000);