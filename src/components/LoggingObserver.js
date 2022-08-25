import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const LoggingObserver = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
	const userToken = localStorage.getItem("userToken");
	useEffect(() => {
		if (isLoggedIn === false && location.pathname !== "/login" && !userToken) {
			navigate("/login");
		}
    }, [isLoggedIn]);
    
    useEffect(() => {
		if (userToken) {
			dispatch({type: "LOG_OBSERVER"});
		}
	}, []);
	return null;
};

export default LoggingObserver;
