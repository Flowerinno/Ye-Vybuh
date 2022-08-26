import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import "./NewsList.css";
import NewsItem from "./NewsItem";

const NewsList = () => {
	const groups = useSelector((state) => state.groups.groups);
	
	const id = useParams();
	const dispatch = useDispatch();
	const groupId = Object.values(id).toString();
	
	const foundGroup = groups.find((group) => group.id === groupId);

	return (
		<>
			<h3>Ваші актині новини</h3>
			{foundGroup.news
				? foundGroup.news.map((news) => {
						return (
							<NewsItem
								key={news.id}
								sourceName={news.newsSource}
								id={news.id}
								groupId={groupId}
							/>
						);
				  })
				: "Виберіть джерело новин"}
		</>
	);
};

export default NewsList;
