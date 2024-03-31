import { Gamepad2 } from "lucide-react";
import Button from "../../components/UI/Buttons/Button";
import Input from "../../components/UI/Input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const playerName = localStorage.getItem("playerName");

	const [name, setName] = useState(null);

	useEffect(() => {
		if (playerName) {
			navigate("/select-mode");
		}
	}, []);

	const handelFormSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("playerName", name);
		navigate("/select-mode");
	};

	return (
		<>
			<div
				className="flex justify-center align-middle"
				style={{ height: "100vh" }}
			>
				<form
					onSubmit={handelFormSubmit}
					className="w-96 m-auto shadow-lg bg-black rounded-lg p-4"
				>
					<Input
						label="Enter your name"
						placeholder="Fezzy"
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<Button
						className="mt-4 w-full flex justify-center align-middle gap-4"
						type="submit"
					>
						<span className="font-medium">Start game</span> <Gamepad2 />
					</Button>
				</form>
			</div>
		</>
	);
};
export default Home;
