import { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";
import Input from "../../components/UI/Input/Input";
import { generateRoomID } from "../../util/util";

const SettingsModal = ({ isVisible, onClose }) => {
	const [playAs, setPlayAs] = useState(localStorage.getItem("playAs") || "x");
	const [name, setName] = useState(localStorage.getItem("playerName"));

	useEffect(() => {
		localStorage.setItem("playAs", playAs);
	}, [playAs]);

	useEffect(() => {
		if (name !== "") localStorage.setItem("playerName", name);
		else localStorage.setItem("playerName", `player_${generateRoomID(2)}`);
	}, [name]);

	return (
		<>
			<Modal isVisible={isVisible} onClose={onClose} modalClassName="w-80">
				<div className="flex align-middle gap-2">
					<input
						type="checkbox"
						checked={playAs === "x" ? true : false}
						onClick={() => setPlayAs("x")}
					/>
					<h1>Play as</h1>
					(
					<img src={xIcon} alt="" width={15} style={{ objectFit: "contain" }} />
					)
				</div>

				<div className="flex align-middle gap-2 my-4">
					<input
						type="checkbox"
						checked={playAs === "o" ? true : false}
						onClick={() => setPlayAs("o")}
					/>
					<h1>Play as</h1>
					(
					<img src={oIcon} alt="" width={15} style={{ objectFit: "contain" }} />
					)
				</div>
				<div>
					<Input
						placeholder="Enter name"
						label="Change Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
			</Modal>
		</>
	);
};
export default SettingsModal;
