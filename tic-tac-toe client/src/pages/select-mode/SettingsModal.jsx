import { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";

const SettingsModal = ({ isVisible, onClose }) => {
	const [playAs, setPlayAs] = useState(localStorage.getItem("playAs") || "x");

	useEffect(() => {
		localStorage.setItem("playAs", playAs);
	}, [playAs]);

	return (
		<>
			<Modal isVisible={isVisible} onClose={onClose} modalClassName="w-80">
				<div className="flex align-middle gap-2 ">
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

				<div className="flex align-middle gap-2 ">
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
			</Modal>
		</>
	);
};
export default SettingsModal;
