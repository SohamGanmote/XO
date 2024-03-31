import { createBrowserRouter, RouterProvider } from "react-router-dom";

//* component imports
import Root from "./pages/Root";
import NotFound from "./components/404 Not Found/NotFound";
import Home from "./pages/home/Home";
import SelectMode from "./pages/select-mode/SelectMode";
import Board from "./pages/board/Board";
import Room from "./pages/room/Room";
import MultiplayerBoard from "./pages/multiplayer-board/MultiplayerBoard";

const Router = () => {
	const router = createBrowserRouter([
		//* default routes
		{
			path: "",
			element: <Root />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/select-mode",
					element: <SelectMode />,
				},
				{
					path: "/vsComputer",
					element: <Board />,
				},
				{
					path: "/room",
					element: <Room />,
				},
				{
					path: "/room/:roomId",
					element: <MultiplayerBoard />,
				},
				{
					path: "/multiplayer",
					element: <Board />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
