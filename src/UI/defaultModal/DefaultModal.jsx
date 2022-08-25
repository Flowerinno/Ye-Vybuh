import * as React from "react";
import {IconContext} from "react-icons";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import "./DefaultModal.css";
const DefaultModal = ({children}) => {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/main");
	}
	return (
		<div className="navbar--active">
			<div className="navbar-header">
				<IconContext.Provider value={{size: "2rem"}}>
					<AiOutlineCloseCircle onClick={handleClick} />
				</IconContext.Provider>
				<h2>єВибух</h2>
			</div>
			{children}
		</div>
	);
};

export default DefaultModal;
