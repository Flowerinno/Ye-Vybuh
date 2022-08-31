import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import "./AccidentItem.css";
const AccidentItem = ({accident}) => {
	const [status, setStatus] = useState(false);
	const members = useSelector((state) => state.groups.groupDetails.members);
	const username = useSelector((state) => state.users.username);
	const witnessers = [];

	for (let member of members) {
		if (accident.location === member.location) {
			witnessers.push(member);
		}
	}

	function statusCheck() {
		if (!status) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	}

	let amIInTheList = false;
	for (let witness of witnessers) {
		if (witness.username === username) {
			amIInTheList = true;
			break;
		}
	}

	return (
		<div className="accident">
			<li>
				<h2 style={{color: "red"}}>{accident.description}</h2>
				<p style={{color: "red", fontSize: "15px"}}>
					В цьому регіоні знаходиться{" "}
					{witnessers.map((witnesser) => witnesser.username).join(", ")}
				</p>
				{status && (
					<p style={{color: "green", fontSize: "15px"}}>{witnessers.map((witnesser) => witnesser.username).join(", ")} в безпеці!</p>
				)}
				{amIInTheList && (
					<div>
						<label style={{fontSize: "15px"}}>
							Для того щоб друзі знали про ваш стан натисніть{" "}
						</label>
						<input type="checkbox" onClick={statusCheck} />
					</div>
				)}
			</li>
		</div>
	);
};

export default AccidentItem;
