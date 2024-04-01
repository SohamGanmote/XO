import { Binary, Merge, Settings, SquareArrowLeft } from "lucide-react";
import Button from "../../components/UI/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SettingsModal from "../select-mode/SettingsModal";
import Input from "../../components/UI/Input/Input";
import io from "socket.io-client";
import { generateRoomID } from "../../util/util";
import { useQuery } from "@tanstack/react-query";
import { getAllAvailableRooms } from "../../http/getAPIs/getApis";

const socket = io.connect(import.meta.env.REACT_APP_SERVER_URL);

const Room = () => {
	const navigate = useNavigate();

	const [isModalVisible, setIsModalVisible] = useState(false);

	const [roomId, setRoomId] = useState();

	socket.on("player2joinRoom", (data) => {
		if (data.player1 === localStorage.getItem("playerName")) {
			navigate(
				`/room/${data.roomId}?player1=${data.player1}&player2=${data.player2}`
			);
		}
	});

	const { data, error, isLoading } = useQuery({
		queryKey: ["get-rooms-list", roomId],
		queryFn: () => getAllAvailableRooms(),
	});

	const handelGenerateRoom = () => {
		const generatedRoomID = generateRoomID(6);
		let player1 = localStorage.getItem("playerName");
		navigator.clipboard
			.writeText(generatedRoomID)
			.then(() => {
				socket.emit("joinRoom", { roomId: generatedRoomID, player1 });
				navigate(`/room/${generatedRoomID}?player1=${player1}`);
			})
			.catch((error) => {
				console.error("Failed to copy Room ID to clipboard:", error);
			});
	};

	const handelJoinRoomWithId = () => {
		const player1 = data.filter((item) => item.roomId === roomId);
		if (player1.length === 0) {
			alert("Enter Valid room Id");
		}
		let player2 = localStorage.getItem("playerName");
		if (player1[0].player1 === player2) {
			localStorage.setItem("playerName", `user${generateRoomID(2)}`);
			player2 = localStorage.getItem("playerName");
		}
		socket.emit("player2joinRoom", {
			roomId: roomId,
			player1: player1[0].player1,
			player2: player2,
		});
		navigate(
			`/room/${roomId}?player1=${player1[0].player1}&player2=${player2}`
		);
	};

	return (
		<>
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<div className="w-96 m-auto shadow-lg bg-black rounded-lg p-4">
					<h1 className="flex justify-end align-middle gap-4">
						<SquareArrowLeft
							className="cursor-pointer"
							onClick={() => navigate("/select-mode")}
						/>
						<Settings
							onClick={() => setIsModalVisible(true)}
							className="cursor-pointer"
						/>
					</h1>
					<Input
						label="Enter room id"
						onChange={(e) => setRoomId(e.target.value)}
					/>
					{roomId ? (
						<Button
							className="mt-4 w-full flex justify-center align-middle gap-4"
							type="submit"
							onClick={handelJoinRoomWithId}
						>
							<span className="font-medium">Join room</span>
							<Merge />
						</Button>
					) : (
						<Button
							className="mt-4 w-full flex justify-center align-middle gap-4"
							type="submit"
							onClick={handelGenerateRoom}
						>
							<span className="font-medium">Generate room id</span> <Binary />
						</Button>
					)}
				</div>
			</div>

			<SettingsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
		</>
	);
};
export default Room;
