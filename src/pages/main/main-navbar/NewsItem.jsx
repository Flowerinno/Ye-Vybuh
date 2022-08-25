import React from "react";
import {useDispatch} from "react-redux";
import "./NewsItem.css";
const NewsItem = ({sourceName, id, groupId}) => {
	const dispatch = useDispatch();
	function deleteHandler(e) {
		dispatch({type: "DELETE_NEWS_SOURCE", id, groupId});
	}
	return (
		<span className="news-list">
			<button onClick={deleteHandler}>X</button>
			<li>{sourceName}</li>
		</span>
	);
};

export default NewsItem;
