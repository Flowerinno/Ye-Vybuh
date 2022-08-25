import logo from "../../UI/YeVybuhImg/vubyh.png";
import {useNavigate} from "react-router-dom";
import "./Signup.css";
import {useDispatch} from "react-redux";
import {useRef, useState} from "react";
import cities from "../../json/ua.json";
import Select from "react-select";

const Signup = () => {
	const [selectedOption, setSelectedOption] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const usernameRef = useRef();
	const passwordRef = useRef();

	let options = cities.map((city) => ({
		value: city.city,
		label: city.city,
		lat: city.lat,
		lng: city.lng,
	}));

	function endSignup() {
		navigate("/login");
	}

	function selectHandler(value) {
		setSelectedOption(value);
	}

	function createAccount(e) {
		e.preventDefault();
		const username = usernameRef.current.value;
		const password = passwordRef.current.value;
		const {value, lat, lng} = selectedOption;
		let city = value;
		dispatch({type: "USER_SIGNUP", username, password, city, lat, lng});
		navigate("/login");
	}

	return (
		<div className="signup-main">
			<img alt="" className="logo" src={logo} />
			<h2 style={{color: "white"}}>Signup</h2>
			<div className="signup-inputs">
				<input placeholder="ім'я" type="text" required/>
				<input placeholder="пароль" type="password" required/>
				<Select
					options={options}
					isSearchable={true}
					onChange={selectHandler}
					className="selector"
				/>
			</div>

			<div className="signup-buttons">
				<div>
					<button onClick={createAccount}>Завершити</button>
				</div>
				<div>
					<button onClick={endSignup}>Увійти в аккаунт</button>
				</div>{" "}
			</div>
		</div>
	);
};

export default Signup;
