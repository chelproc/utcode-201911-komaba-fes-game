const http = require("http");
const express = require("express");
const { initNodeRED } = require("./node-red");

const app = express();
app.get("/", (req, res) => {
    res.send("njdaf");
});
const server = http.createServer(app);
initNodeRED(server, app);

server.listen(9000);