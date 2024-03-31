import Modal from "../../components/UI/Modal/Modal";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";
import error from "../../assets/error.svg";
import Button from "../../components/UI/Buttons/Button";
import { useNavigate } from "react-router-dom";

const WinningModal = ({ winner }) => {
	let icon = error;
	if (winner === "x") icon = xIcon;
	if (winner === "o") icon = oIcon;

	const navigate = useNavigate();

	const currentPath = location.pathname;

	const handleRedirect = () => {
		window.location.reload();
	};

	return (
		<>
			<Modal isVisible={winner === undefined ? false : true}>
				<img src={icon} className="m-auto" width={200} />
				<div className="flex justify-center align-middle gap-2 my-4">
					{icon === error ? (
						<>
							<h1 className="text-[1rem] text-center">
								It's a tied match. Would you like to give it another shot?
							</h1>
						</>
					) : (
						<>
							(<img src={icon} width={20} style={{ objectFit: "contain" }} />)
							<h1 className="text-[1rem]"> wins in style, cool as ever.</h1>
						</>
					)}
				</div>
				<div className="flex justify-center mt-8 mb-4 gap-3">
					<Button onClick={() => navigate("/select-mode")}>
						Back to main menu
					</Button>
					{currentPath === "/vsComputer" && (
						<Button
							onClick={handleRedirect}
							className="bg-[#6faa50] text-black font-medium border-none hover:bg-[#619445]"
						>
							Play again
						</Button>
					)}
				</div>
			</Modal>
		</>
	);
};
export default WinningModal;
