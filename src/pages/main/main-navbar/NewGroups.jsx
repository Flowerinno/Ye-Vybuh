import "./NewGroups.css";
import {Link} from "react-router-dom";
import {FaSearchPlus} from "react-icons/fa";
import {IconContext} from "react-icons";
const NewGroups = () => {
	return (
		<div className="new-groups">
			<IconContext.Provider value={{size: "2.5rem", color: "black"}}>
				<Link to="/main/new-groups">
					<FaSearchPlus />
				</Link>
			</IconContext.Provider>
		</div>
	);
};

export default NewGroups;
