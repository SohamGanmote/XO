import { useEffect, useState } from "react";
import BoardButton from "../../components/UI/Buttons/BoardButton";
import WinningModal from "../board/WinningModal";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect(import.meta.env.REACT_APP_SERVER_URL);

const MultiplayerBoard = () => {
	const logInPlayer = localStorage.getItem("playerName");
	const location = useLocation();
	const { roomId } = useParams();

	const [one, setOne] = useState();
	const [two, setTwo] = useState();
	const [three, setThree] = useState();
	const [four, setFour] = useState();
	const [five, setFive] = useState();
	const [six, setSix] = useState();
	const [seven, setSeven] = useState();
	const [eight, setEight] = useState();
	const [nine, setNine] = useState();

	const [winner, setWinner] = useState();
	const [currentTurn, setCurrentTurn] = useState(1);

	useEffect(() => {
		checkIsMatchIsTieOnline();
		checkWinConditionForPlayer1();
		checkWinConditionForPlayer2();
	}, [currentTurn]);

	const queryParams = new URLSearchParams(location.search);
	const player1 = queryParams.get("player1");
	const player2 = queryParams.get("player2");

	const player1Icon = "x";
	const player2Icon = "o";

	const player1Turns = [1, 3, 5, 7, 9];
	const player2Turns = [2, 4, 6, 8];

	let yourAre;

	if (player1 === logInPlayer) {
		yourAre = 1;
	}

	if (player2 === logInPlayer) {
		yourAre = 2;
	}

	const player1Turn = (id) => {
		if (id === "1" && one === undefined) {
			setOne(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "1",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "2" && two === undefined) {
			setTwo(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "2",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "3" && three === undefined) {
			setThree(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "3",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "4" && four === undefined) {
			setFour(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "4",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "5" && five === undefined) {
			setFive(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "5",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "6" && six === undefined) {
			setSix(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "6",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "7" && seven === undefined) {
			setSeven(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "7",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "8" && eight === undefined) {
			setEight(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "8",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else if (id === "9" && nine === undefined) {
			setNine(player1Icon);
			socket.emit("playerPlayed", {
				clicked: "9",
				by: logInPlayer,
				for: player2,
				symbol: player1Icon,
			});
		} else {
			return; // display some error
		}
		setCurrentTurn(currentTurn + 1);
		console.log(`You Choosed : ${id}`);
	};

	const player2Turn = (id) => {
		if (id === "1" && one === undefined) {
			setOne(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "1",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "2" && two === undefined) {
			setTwo(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "2",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "3" && three === undefined) {
			setThree(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "3",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "4" && four === undefined) {
			setFour(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "4",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "5" && five === undefined) {
			setFive(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "5",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "6" && six === undefined) {
			setSix(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "6",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "7" && seven === undefined) {
			setSeven(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "7",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "8" && eight === undefined) {
			setEight(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "8",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else if (id === "9" && nine === undefined) {
			setNine(player2Icon);
			socket.emit("playerPlayed", {
				clicked: "9",
				by: player2,
				for: player1,
				symbol: player2Icon,
			});
		} else {
			return; // display some error
		}
		setCurrentTurn(currentTurn + 1);
		console.log(`You Choosed : ${id}`);
	};

	const checkWinConditionForPlayer1 = () => {
		if (one === player1Icon && two === player1Icon && three === player1Icon) {
			setWinner(player1Icon);
		}
		if (four === player1Icon && five === player1Icon && six === player1Icon) {
			setWinner(player1Icon);
		}
		if (
			seven === player1Icon &&
			eight === player1Icon &&
			nine === player1Icon
		) {
			setWinner(player1Icon);
		}

		if (one === player1Icon && four === player1Icon && seven === player1Icon) {
			setWinner(player1Icon);
		}
		if (two === player1Icon && five === player1Icon && eight === player1Icon) {
			setWinner(player1Icon);
		}
		if (three === player1Icon && six === player1Icon && nine === player1Icon) {
			setWinner(player1Icon);
		}

		if (one === player1Icon && five === player1Icon && nine === player1Icon) {
			setWinner(player1Icon);
		}
		if (
			three === player1Icon &&
			five === player1Icon &&
			seven === player1Icon
		) {
			setWinner(player1Icon);
		}
	};

	const checkWinConditionForPlayer2 = () => {
		if (one === player2Icon && two === player2Icon && three === player2Icon) {
			setWinner(player2Icon);
		}
		if (four === player2Icon && five === player2Icon && six === player2Icon) {
			setWinner(player2Icon);
		}
		if (
			seven === player2Icon &&
			eight === player2Icon &&
			nine === player2Icon
		) {
			setWinner(player2Icon);
		}

		if (one === player2Icon && four === player2Icon && seven === player2Icon) {
			setWinner(player2Icon);
		}
		if (two === player2Icon && five === player2Icon && eight === player2Icon) {
			setWinner(player2Icon);
		}
		if (three === player2Icon && six === player2Icon && nine === player2Icon) {
			setWinner(player2Icon);
		}

		if (one === player2Icon && five === player2Icon && nine === player2Icon) {
			setWinner(player2Icon);
		}
		if (
			three === player2Icon &&
			five === player2Icon &&
			seven === player2Icon
		) {
			setWinner(player2Icon);
		}
	};

	const checkIsMatchIsTieOnline = () => {
		if (
			one !== undefined &&
			two !== undefined &&
			three !== undefined &&
			four !== undefined &&
			five !== undefined &&
			six !== undefined &&
			seven !== undefined &&
			eight !== undefined &&
			nine !== undefined
		) {
			setWinner("tie");
			return true;
		}
		return false;
	};

	socket.off("playerPlayed").on("playerPlayed", (data) => {
		if (data.for === logInPlayer) {
			if (data.by !== logInPlayer) {
				if (data.clicked === "1") {
					setOne(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "2") {
					setTwo(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "3") {
					setThree(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "4") {
					setFour(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "5") {
					setFive(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "6") {
					setSix(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "7") {
					setSeven(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "8") {
					setEight(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
				if (data.clicked === "9") {
					setNine(data.symbol);
					setCurrentTurn(currentTurn + 1);
				}
			}
		}
	});

	const handelCopyRoomId = () => {
		navigator.clipboard
			.writeText(roomId)
			.then(() => {
				console.log("Room ID copied to clipboard:", roomId);
			})
			.catch((error) => {
				console.error("Failed to copy Room ID to clipboard:", error);
			});
	};

	if (roomId && (!player1 || !player2)) {
		return (
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<div className="m-auto shadow-lg bg-black rounded-lg p-4 text-center">
					<div className="loader-circle m-auto mb-8 mt-4" />
					<p>Share your ID with the other players, please</p>
					<div
						onClick={handelCopyRoomId}
						className="border px-4 py-2 m-auto w-fit mt-3 rounded-md cursor-pointer"
					>
						{roomId}
					</div>
				</div>
			</div>
		);
	}

	const checkTurn = () => {
		if (roomId) {
			if (logInPlayer === player1) {
				if (player1Turns.includes(currentTurn)) {
					return false;
				}
			}
			if (logInPlayer === player2) {
				if (player2Turns.includes(currentTurn)) {
					return false;
				}
			}
			return true;
		} else {
			let tempTurn = isOpponentTurn;
			return tempTurn;
		}
	};

	return (
		<>
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<div className="m-auto shadow-lg bg-black rounded-lg p-4 ">
					{roomId && (
						<div className="flex justify-center items-center mb-4">
							<h1 className="text-2xl font-bold mr-2">{player1}</h1>
							<p className="text-xl font-bold mx-2">vs</p>
							<h1 className="text-2xl font-bold ml-2">{player2}</h1>
						</div>
					)}
					<div className="grid grid-cols-3 gap-4">
						<BoardButton
							id="1"
							value={one}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="2"
							value={two}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="3"
							value={three}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="4"
							value={four}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="5"
							value={five}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="6"
							value={six}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="7"
							value={seven}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="8"
							value={eight}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
						<BoardButton
							id="9"
							value={nine}
							isOpponentTurn={checkTurn()}
							handelBoardButtonClick={
								roomId ? (yourAre === 1 ? player1Turn : player2Turn) : yourTurn
							}
						/>
					</div>
				</div>
			</div>

			<WinningModal winner={winner} />
		</>
	);
};
export default MultiplayerBoard;
