import React from "react";
import MainPage from "./pages/main";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import LoggingObserver from "./components/LoggingObserver";
import {useSelector} from "react-redux";

function App() {
	const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

	return (
		<div className="font">
			{/* <LoggingObserver /> */}
			<Routes>
				{/* {!isLoggedIn && (
					<Route path="/main" element={<Navigate to="/signup" replace />} />
				)} */}
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Navigate to="/main" replace />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/main/*" element={<MainPage />} />
			</Routes>
		</div>
	);
}

export default App;
