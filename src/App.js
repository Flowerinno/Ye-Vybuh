import React, {useEffect} from "react";
import MainPage from "./pages/main";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import LoggingObserver from "./components/LoggingObserver";
import {useSelector} from "react-redux";

function App() {
	const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
	useEffect(() => {
		let timeout = setTimeout(
			() => localStorage.removeItem("userToken"),
			14400000
		);
		return () => {
			clearInterval(timeout);
		};
	}, []);
	return (
		<div className="font">
			<LoggingObserver />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				{/* {isLoggedIn && <Route path="*" element={<Navigate to="/main" replace />} />} */}
				<Route path="/signup" element={<SignupPage />} />
				{isLoggedIn && <Route path="/main/*" element={<MainPage />} />}
			</Routes>
		</div>
	);
}

export default App;
