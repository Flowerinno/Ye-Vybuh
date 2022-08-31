import logo from "../../UI/YeVybuhImg/vubyh.png";
import {useNavigate} from "react-router-dom";
import "./Signup.css";
import {useDispatch} from "react-redux";
import React, {useRef, useState} from "react";
import {BsEye} from "react-icons/bs";
import cities from "../../json/ua.json";
import Select from "react-select";

const Signup = () => {
	const [selectedOption, setSelectedOption] = useState();
	const [isShown, setisShown] = useState("password");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const usernameRef = useRef();
	const passwordRef = useRef();

	function shownpas() {
		if (isShown === "password") {
			setisShown("text");
		} else {
			setisShown("password");
		}
	}

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
			<div className="signup-inputs">
				<img alt="" className="signup-logo" src={logo} />
				<h2 style={{color: "black"}}>Створити аккаунт</h2>
				<div className="signup-name">
					<label htmlFor="signup-name">Ім'я</label>
					<input id="signup-name" ref={usernameRef} type="text" required />
				</div>

				<div className="signup-password">
					<label htmlFor="signup-password">Пароль</label>
					<input
						id="signup-password"
						ref={passwordRef}
						type={isShown}
						required
					/>
					<BsEye className="signup-show-password" onClick={shownpas} />
				</div>
				<div className="signup-city">
					<label style={{color: "black"}}>Ваше місто проживання</label>
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
		</div>
	);
};

export default Signup;
