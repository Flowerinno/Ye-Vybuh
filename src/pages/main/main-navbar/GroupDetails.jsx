import * as React from "react";
import "./GroupDetails.css";
import DefaultModal from "../../../UI/defaultModal/DefaultModal";
import News from "./News";
import MyGroups from "./MyGroups";
import {FiSettings} from "react-icons/fi";
import {IconContext} from "react-icons";
import {useState, useRef, useEffect} from "react";
import Select from "react-select";
import {AiOutlineRollback} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import NewsList from "./NewsList";

const GroupDetails = (props) => {
	const [settingsIsShown, setSettingsIsShown] = useState(false);
	const [selectedOption, setSelectedOption] = useState();
	const groupDetails = useSelector((state) => state.groups.groupDetails);

	const newsSources = useSelector((state) => state.groups.newsSources);
	const id = useParams();
	const groupId = Object.values(id).toString();

	// useEffect(() => {
	// 	dispatch({type: "FETCH_GROUP_DETAILS", groupId});
	// }, [groupId]);

	const dispatch = useDispatch();
	const passwordRef = useRef();
	const nameRef = useRef();
	function settingsHandler() {
		if (settingsIsShown === false) {
			setSettingsIsShown(true);
		} else {
			setSettingsIsShown(false);
		}
	}

	function saveHandler(e) {
		e.preventDefault();
		const name = nameRef.current.value;
		const password = passwordRef.current.value;
		dispatch({
			type: "CHANGE_GROUP_SETTINGS",
			name: name,
			groupId: groupId,
			password: password,
		});
	}

	function selectHandler(value) {
		setSelectedOption(value.value);
	}

	function changeNewsHandler(e) {
		e.preventDefault();

		dispatch({type: "ADD_NEWS_SOURCE", groupId, value: selectedOption});
	}

	useEffect(() => {
		dispatch({type: "FETCH_NEWS_SOURCE"});
		dispatch({ type: "FETCH_SOURCES" });
		dispatch({type: "FETCH_GROUP_DETAILS", groupId});
		let interval = setInterval(
			() => dispatch({type: "FETCH_ACCIDENTS", groupId}),
			5000
		);
		return () => {
			clearInterval(interval);
		};
	}, [groupId]);
	if (Object.keys(groupDetails).length === 0) {
		return null;
	}
	let options = newsSources.map((source) => ({
		value: source,
		label: source,
	}));

	return (
		<>
			{!settingsIsShown && (
				<DefaultModal>
					<div className="group-details">
						<span className="group-settings">
							<button onClick={settingsHandler}>
								<IconContext.Provider value={{size: "1rem"}}>
									<FiSettings />
								</IconContext.Provider>
							</button>
							<span
								style={{
									fontSize: "20px",
									border: "1px solid yellow",
									borderRadius: "5px",
								}}
							>
								{groupDetails.title}
							</span>
							<span>Учасники:{`${groupDetails.members.length}`}</span>
						</span>
						<div>
							<MyGroups />
						</div>
					</div>
					<div className="group-news">
						<News />
					</div>
				</DefaultModal>
			)}
			{settingsIsShown && (
				<DefaultModal>
					<div className="settings">
						<div className="settings-inputs">
							<button onClick={settingsHandler}>
								<IconContext.Provider value={{size: "1.5rem"}}>
									<AiOutlineRollback />
								</IconContext.Provider>
							</button>
							<input
								ref={passwordRef}
								type="text"
								placeholder="змінити пароль групи"
							/>
							<input
								ref={nameRef}
								type="text"
								placeholder="змінити назву групи"
							/>
						</div>
						<button className="settings-saveButton" onClick={saveHandler}>
							Підтвердити
						</button>
						<div className="settings-news">
							<Select
								options={options}
								className="settings-selector"
								placeholder="додати новий ресурс новин "
								isSearchable={true}
								onChange={selectHandler}
							/>
							<button className="change-news" onClick={changeNewsHandler}>
								Додати новини
							</button>
							<NewsList sources={groupDetails.sources} />
						</div>
						<div>
							<MyGroups />
						</div>
					</div>
				</DefaultModal>
			)}
		</>
	);
};

export default GroupDetails;
