import "./News.css";
import React from "react";
import {useState} from "react";
const News = () => {
	const [status, setStatus] = useState(false);

	function statusCheck() {
		if (!status) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	}
	return (
		<div className="news">
			<li>
				<h2 style={{color: "red"}}>Вибух в Києві</h2>
				<p style={{color: "red", fontSize: "15px"}}>
					В цьому регіоні знаходиться Олександр!
				</p>
				{status && (
					<p style={{color: "green", fontSize: "15px"}}>Олександр в безпеці!</p>
				)}
				<div>
					<label style={{fontSize: "15px"}}>
						Для того щоб друзі знали про ваш стан натисніть{" "}
					</label>
					<input type="checkbox" onClick={statusCheck} />
				</div>
			</li>
		</div>
	);
};

export default News;
