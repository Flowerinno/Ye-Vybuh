import "./MyGroups.css";
import {Link} from "react-router-dom";
import NewGroups from "./NewGroups";
import {useSelector} from "react-redux";
import React from "react";
const MyGroups = () => {
	const groups = useSelector((state) => state.groups.groups);

	return (
		<div
			className="my-groups"
			style={{overflowY: groups.length > 9 ? "scroll" : "hidden"}}
		>
			<NewGroups />

			{groups.map((group) => {
				return (
					<Link
						to={`/main/${group.id}`}
						className="new-groups-link"
						key={group.id}
					>
						<li>
							{group.name}
							<br />
							<img className="my-groups-image" alt="" src={group.avatar} />
						</li>
					</Link>
				);
			})}
		</div>
	);
};

export default MyGroups;
