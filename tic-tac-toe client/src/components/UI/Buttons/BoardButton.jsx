import xIcon from "../../../assets/x.svg";
import oIcon from "../../../assets/o.svg";
import noneIcon from "../../../assets/none.svg";

const Icon = ({ value }) => {
	let icon;
	icon = noneIcon;
	if (value === "x") icon = xIcon;
	if (value === "o") icon = oIcon;
	return <img src={icon} alt="" width={50} />;
};

const BoardButton = ({ value, isOpponentTurn, id, handelBoardButtonClick }) => {
	return (
		<>
			<button
				className="bg-[#242424] p-4 rounded-md"
				disabled={isOpponentTurn}
				onClick={() => handelBoardButtonClick(id)}
			>
				<Icon value={value} />
			</button>
		</>
	);
};
export default BoardButton;
