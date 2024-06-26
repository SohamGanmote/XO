export function generateRandomNumber() {
	return Math.floor(Math.random() * 9) + 1;
}

export function generateRoomID(length = 4) {
	const characters = "0123456789";
	let roomId = "";
	for (let i = 0; i < length; i++) {
		roomId += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return roomId;
}
