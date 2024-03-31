const express = require("express");
const app = express();

const http = require("http");
const socket = require("./websocket/socket");

const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
socket(server, app);

server.listen(8080, () => {
	console.log("Server is running!!");
});
