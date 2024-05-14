import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
	const playerName = localStorage.getItem("playerName");

	const navigate = useNavigate();
	useEffect(() => {
		if (!playerName || playerName === "null") {
			navigate("/");
		}
	}, []);
	return (
		<section>
			<Outlet />
		</section>
	);
};
export default Root;
