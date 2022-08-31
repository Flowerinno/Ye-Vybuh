import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import "./NewsList.css";
import NewsItem from "./NewsItem";

const NewsList = ({sources}) => {
	const id = useParams();

	const groupId = Object.values(id).toString();

	return (
		<>
			<h3>Ваші актині новини</h3>
			{sources.length > 0
				? sources.map((source) => {
						return (
							<NewsItem
								key={source}
								sourceName={source}
								id={source}
								groupId={groupId}
							/>
						);
				  })
				: "Виберіть джерело новин"}
		</>
	);
};

export default NewsList;
