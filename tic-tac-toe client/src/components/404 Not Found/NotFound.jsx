import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Buttons/Button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex justify-center items-center ">
			<div className="max-w-xl mx-auto p-8 rounded-lg">
				<h1 className="text-6xl  font-medium mb-6 text-center">404</h1>
				<p className="text-base mb-6 text-center">
					Looks like you've ventured into the unknown! The route you're seeking
					seems to be on a cosmic detour. 🚀
				</p>
				<div className="text-center">
					<Button
						className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex justify-between m-auto"
						onClick={() => navigate("/")}
					>
						Beam me back home
						<ArrowRight width={20} className="ml-2" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
