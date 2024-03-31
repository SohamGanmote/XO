export const getAllAvailableRooms = async () => {
	const requestOptions = {
		method: "GET",
	};

	const response = await fetch(
		`${import.meta.env.REACT_APP_SERVER_URL}/api/getRoomsData`,
		requestOptions
	);

	if (!response.ok) {
		const errorInfo = await response.json();

		const error = new Error("An Error occured while getting client details");
		error.info = errorInfo;
		error.code = response.status;

		throw error;
	}

	return response.json();
};
