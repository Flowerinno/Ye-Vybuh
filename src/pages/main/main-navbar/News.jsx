import "./News.css";
import React from "react";

import {useSelector} from "react-redux";
import AccidentItem from "./AccidentItem";
const News = () => {
	const accidents = useSelector((state) => state.groups.accidents);

	return (
		<div
			className="news"
			style={{overflowY: accidents.length > 6 ? "scroll" : "hidden"}}
		>
			{Object.keys(accidents).length > 0 ? (
				accidents.map((accident) => {
					return <AccidentItem key={accident.id} accident={accident} />;
				})
			) : (
				<p style={{fontSize: "large"}}>...Loading</p>
			)}
		</div>
	);
};

export default News;
