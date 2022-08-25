import "./Login.css";
import logo from "../../UI/YeVybuhImg/vubyh.png";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import React from "react";
import {useDispatch} from "react-redux";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const usernameRef = useRef();
	const passwordRef = useRef();

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
			<img alt="" className="logo" src={logo} />
			<h2 style={{color: "white"}}>Login</h2>
			<div className="login-inputs">
				<input ref={usernameRef} placeholder="ім'я" type="text" />
				<input ref={passwordRef} placeholder="пароль" type="password" />
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
	);
};

export default Login;
