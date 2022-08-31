import "./Login.css";
import logo from "../../UI/YeVybuhImg/vubyh.png";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import React from "react";
import {useDispatch} from "react-redux";
import {BsEye} from "react-icons/bs";

const Login = () => {
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

	function createAccount() {
		navigate("/signup");
	}

	function submitHandler(e) {
		e.preventDefault();

		let username = usernameRef.current.value;
		let password = passwordRef.current.value;

		dispatch({
			type: "USER_LOGIN",
			username,
			password,
		});
		navigate("/main");
	}

	return (
		<div className="login-main">
			<div className="login-inputs">
				<img alt="" className="login-logo" src={logo} />
				<h2 style={{color: "black"}}>Вхід в аккаунт</h2>
				<div className="login-name">
					<label htmlFor="name" style={{fontSize: "large"}}>
						Ім'я
					</label>
					<input required ref={usernameRef} id="name" type="text" />
				</div>
				<div className="login-password">
					<label htmlFor="password" style={{fontSize: "large"}}>
						Пароль
					</label>
					<input ref={passwordRef} id="password" type={isShown} required />
					<BsEye className="login-show-password" onClick={shownpas} />
				</div>
				<div className="login-buttons">
					<div>
						<button onClick={submitHandler}>Увійти</button>
					</div>
					<div>
						<button onClick={createAccount}>Створити аккаунт</button>
					</div>{" "}
				</div>
			</div>
		</div>
	);
};

export default Login;
