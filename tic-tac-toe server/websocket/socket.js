const socketIO = require("socket.io");
require("dotenv").config();

const socket = (server, app) => {
	let rooms = [];

	app.get("/api/getRoomsData", (req, res) => {
		res.json(rooms);
	});

	setInterval(() => {
		rooms = [];
		console.log("Rooms array reset.");
	}, 24 * 60 * 60 * 1000);

	// socket.io code goes here
	const io = socketIO(server, {
		cors: {
			origin: "*",
			// origin: process.env.CLIENT_LINK,
			methods: ["GET", "POST"],
		},
	});

	io.on("connection", (socket) => {
		console.log("(WebSocket) Connection Established");

		socket.on("joinRoom", (data) => {
			rooms.push(data);
			socket.broadcast.emit("availableRoom", data);
			console.log(`${data.player1} created ${data.roomId} room`);
		});

		socket.on("player2joinRoom", (data) => {
			const player1 = rooms.filter((item) => data.roomId === item.roomId);
			socket.broadcast.emit("player2joinRoom", {
				roomId: data.roomId,
				player1: player1[0].player1,
				player2: data.player2,
			});
			console.log(
				`${data.player2} joined ${data.player1}'s room (${data.roomId})`
			);
		});

		socket.on("playerPlayed", (data) => {
			socket.broadcast.emit("playerPlayed", data);
		});

		socket.on("disconnect", () => {});
	});
};

module.exports = socket;
