import { Cpu, Handshake, Settings } from "lucide-react";
import Button from "../../components/UI/Buttons/Button";
import { useNavigate } from "react-router-dom";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

const SelectMode = () => {
	const navigate = useNavigate();

	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<>
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<div className="w-96 m-auto shadow-lg bg-black rounded-lg p-4">
					<h1 className="flex justify-between align-middle">
						Select game mode{" "}
						<Settings
							onClick={() => setIsModalVisible(true)}
							className="cursor-pointer"
						/>
					</h1>
					<Button
						className="mt-4 w-full flex justify-center align-middle gap-4"
						type="submit"
						onClick={() => navigate("/vsComputer")}
					>
						<span className="font-medium">You vs Computer</span> <Cpu />
					</Button>
					<Button
						className="mt-4 w-full flex justify-center align-middle gap-4"
						type="submit"
						onClick={() => navigate("/room")}
					>
						<span className="font-medium">Play with friend</span> <Handshake />
					</Button>
				</div>
			</div>

			<SettingsModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
		</>
	);
};
export default SelectMode;
