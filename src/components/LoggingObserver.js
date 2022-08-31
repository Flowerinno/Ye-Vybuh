import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const LoggingObserver = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
	const userToken = localStorage.getItem("userToken");
	console.log(isLoggedIn, location.pathname, userToken);
	useEffect(() => {
		if (
			isLoggedIn === false &&
			location.pathname !== ("/login" || "/signup") &&
			!userToken
		) {
			navigate("/login");
		}
	}, [isLoggedIn]);

	useEffect(() => {
		if (userToken) {
			dispatch({type: "LOG_OBSERVER"});
		}
	}, [userToken]);
	return null;
};
export default LoggingObserver;
