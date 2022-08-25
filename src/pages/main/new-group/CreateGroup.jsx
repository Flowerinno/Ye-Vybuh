import React, {useState, useRef, useCallback, useEffect} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {IconContext} from "react-icons";
import {useNavigate} from "react-router-dom";
import "./CreateGroup.css";
import {BsEye} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import getBase64 from "../../../services/ImageService";

const CreateGroup = () => {
	const [selectedValue, setSelectedValue] = useState();
	const [isShown, setisShown] = useState("password");
	const [base64, setBase64] = useState(null);

	const allGroups = useSelector((state) => state.groups.allGroups);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const nameRef = useRef();
	const passwordRef = useRef();
	const passwordInputRef = useRef();

	function handleClick() {
		navigate("/main");
	}

	function shownpas() {
		if (isShown === "password") {
			setisShown("text");
		} else {
			setisShown("password");
		}
	}
	const options = allGroups.map((group) => ({
		value: group.name,
		label: group.name,
	}));

	function selectHandler(value) {
		setSelectedValue(value);
	}

	const submitHandler = useCallback(
		(e) => {
			e.preventDefault();
			const name = nameRef.current.value;
			const password = passwordRef.current.value;
			const avatar = localStorage.getItem("base64");

			localStorage.removeItem("base64");
			dispatch({type: "CREATE_GROUP", name, avatar});

			navigate("/main");
		},
		[isShown, base64]
	);

	function inputHandler(e) {
		e.preventDefault();
		const name = selectedValue.value;
		const password = passwordInputRef.current.value;

		const {id} = allGroups.find((group) => group.name === name);

		// dispatch({type: "FIND_GROUP", name, password, id});
		// navigate("/main");
	}

	const handleFileInputChange = async (e) => {
		// if (e.target.files && e.target.files.length) {
		let file = e.target.files[0];

		const result = await getBase64(file);
		localStorage.setItem("base64", result);

		setBase64(result);
	};

	return (
		<div className="create-group">
			<div className="create-group-header">
				<IconContext.Provider value={{size: "2rem"}}>
					<AiOutlineCloseCircle onClick={handleClick} />
				</IconContext.Provider>
				<h2>єВибух</h2>
			</div>
			<div className="find-group">
				<Select
					options={options}
					isSearchable={true}
					onChange={selectHandler}
					className="selector"
				/>

				<input placeholder="введіть пароль групи" ref={passwordInputRef} />

				<button onClick={inputHandler} className="add-button">
					Добавити
				</button>
			</div>
			<div className="create-group-inputs">
				<h2>Створити нову групу</h2>
				<br />
				{base64 && <img src={base64} alt="" />}
				<br />
				<br />
				<br />
				<br />
				<input ref={nameRef} type="text" placeholder="назва групи" required />
				<input ref={passwordRef} type={isShown} placeholder="пароль" required />
				<label htmlFor="avatar">виберіть аватар групи</label>
				<input
					type="file"
					id="avatar"
					name="avatar"
					onChange={handleFileInputChange}
					hidden
				/>

				<div className="show-password">
					<BsEye onClick={shownpas} />
				</div>
				<button className="confirm-create" onClick={submitHandler}>
					Створити
				</button>
			</div>
		</div>
	);
};
export default CreateGroup;
