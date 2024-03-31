import { useEffect, useState } from "react";
import BoardButton from "../../components/UI/Buttons/BoardButton";
import { generateRandomNumber } from "../../util/util";
import WinningModal from "./WinningModal";
import { useLocation } from "react-router-dom";

const Board = ({
	yourIcon = localStorage.getItem("playAs") || "x",
	opponentIcon = localStorage.getItem("playAs") === "x" ? "o" : "x",
}) => {
	const location = useLocation();
	const currentPath = location.pathname; //vsComputer

	const [one, setOne] = useState();
	const [two, setTwo] = useState();
	const [three, setThree] = useState();
	const [four, setFour] = useState();
	const [five, setFive] = useState();
	const [six, setSix] = useState();
	const [seven, setSeven] = useState();
	const [eight, setEight] = useState();
	const [nine, setNine] = useState();

	const [isOpponentTurn, setIsOpponentTurn] = useState(
		yourIcon === "x" ? false : true
	);

	const [winner, setWinner] = useState();

	const toggleTurn = () => {
		setIsOpponentTurn(!isOpponentTurn);
	};

	const yourTurn = (id) => {
		if (id === "1" && one === undefined) {
			setOne(yourIcon);
		} else if (id === "2" && two === undefined) {
			setTwo(yourIcon);
		} else if (id === "3" && three === undefined) {
			setThree(yourIcon);
		} else if (id === "4" && four === undefined) {
			setFour(yourIcon);
		} else if (id === "5" && five === undefined) {
			setFive(yourIcon);
		} else if (id === "6" && six === undefined) {
			setSix(yourIcon);
		} else if (id === "7" && seven === undefined) {
			setSeven(yourIcon);
		} else if (id === "8" && eight === undefined) {
			setEight(yourIcon);
		} else if (id === "9" && nine === undefined) {
			setNine(yourIcon);
		} else {
			return; // display some error
		}
		console.log(`You Choosed : ${id}`);
		toggleTurn();
	};

	const computerTurn = () => {
		const isTie = checkIsMatchIsTie();
		if (isTie === true) return;

		const buttonId = generateRandomNumber().toString();

		if (buttonId === "1" && one === undefined) {
			setOne(opponentIcon);
		} else if (buttonId === "2" && two === undefined) {
			setTwo(opponentIcon);
		} else if (buttonId === "3" && three === undefined) {
			setThree(opponentIcon);
		} else if (buttonId === "4" && four === undefined) {
			setFour(opponentIcon);
		} else if (buttonId === "5" && five === undefined) {
			setFive(opponentIcon);
		} else if (buttonId === "6" && six === undefined) {
			setSix(opponentIcon);
		} else if (buttonId === "7" && seven === undefined) {
			setSeven(opponentIcon);
		} else if (buttonId === "8" && eight === undefined) {
			setEight(opponentIcon);
		} else if (buttonId === "9" && nine === undefined) {
			setNine(opponentIcon);
		} else {
			computerTurn();
		}
		console.log(`Computer Choosed : ${buttonId}`);
		toggleTurn();
	};

	const checkWinConditionForX = () => {
		if (one === yourIcon && two === yourIcon && three === yourIcon) {
			setWinner(yourIcon);
		}
		if (four === yourIcon && five === yourIcon && six === yourIcon) {
			setWinner(yourIcon);
		}
		if (seven === yourIcon && eight === yourIcon && nine === yourIcon) {
			setWinner(yourIcon);
		}

		if (one === yourIcon && four === yourIcon && seven === yourIcon) {
			setWinner(yourIcon);
		}
		if (two === yourIcon && five === yourIcon && eight === yourIcon) {
			setWinner(yourIcon);
		}
		if (three === yourIcon && six === yourIcon && nine === yourIcon) {
			setWinner(yourIcon);
		}

		if (one === yourIcon && five === yourIcon && nine === yourIcon) {
			setWinner(yourIcon);
		}
		if (three === yourIcon && five === yourIcon && seven === yourIcon) {
			setWinner(yourIcon);
		}
	};

	const checkWinConditionForO = () => {
		if (
			one === opponentIcon &&
			two === opponentIcon &&
			three === opponentIcon
		) {
			setWinner(opponentIcon);
		}
		if (
			four === opponentIcon &&
			five === opponentIcon &&
			six === opponentIcon
		) {
			setWinner(opponentIcon);
		}
		if (
			seven === opponentIcon &&
			eight === opponentIcon &&
			nine === opponentIcon
		) {
			setWinner(opponentIcon);
		}

		if (
			one === opponentIcon &&
			four === opponentIcon &&
			seven === opponentIcon
		) {
			setWinner(opponentIcon);
		}
		if (
			two === opponentIcon &&
			five === opponentIcon &&
			eight === opponentIcon
		) {
			setWinner(opponentIcon);
		}
		if (
			three === opponentIcon &&
			six === opponentIcon &&
			nine === opponentIcon
		) {
			setWinner(opponentIcon);
		}

		if (
			one === opponentIcon &&
			five === opponentIcon &&
			nine === opponentIcon
		) {
			setWinner(opponentIcon);
		}
		if (
			three === opponentIcon &&
			five === opponentIcon &&
			seven === opponentIcon
		) {
			setWinner(opponentIcon);
		}
	};

	const checkIsMatchIsTie = () => {
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

	useEffect(() => {
		if (currentPath === "/vsComputer" && isOpponentTurn) {
			computerTurn();
		}
		checkIsMatchIsTie();
		checkWinConditionForX();
		checkWinConditionForO();
	}, [isOpponentTurn]);

	return (
		<>
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<div className="m-auto shadow-lg bg-black rounded-lg p-4 ">
					<div className="grid grid-cols-3 gap-4">
						<BoardButton
							id="1"
							value={one}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="2"
							value={two}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="3"
							value={three}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="4"
							value={four}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="5"
							value={five}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="6"
							value={six}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="7"
							value={seven}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="8"
							value={eight}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
						<BoardButton
							id="9"
							value={nine}
							isOpponentTurn={isOpponentTurn}
							handelBoardButtonClick={yourTurn}
						/>
					</div>
				</div>
			</div>

			<WinningModal winner={winner} />
		</>
	);
};
export default Board;
