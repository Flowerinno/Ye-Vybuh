import React from "react";
import Map from "./Map";
import Modal from "./Modal";
import {useSelector} from "react-redux";
const MainPage = () => {
	const lat = useSelector((state) => state.users.lat);
	const lng = useSelector((state) => state.users.lng);

	return (
		<>
			<Map lat={lat} lng={lng} />
			<Modal />
		</>
	);
};

export default MainPage;
