import "./Modal.css";
import {useState} from "react";
import {Link, Route, Routes, useLocation, useParams} from "react-router-dom";
import CreateGroup from "./new-group/CreateGroup";
import MyGroups from "./main-navbar/MyGroups";
import * as React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {IconContext} from "react-icons";
import {BiArrowToRight} from "react-icons/bi";
import GroupDetails from "./main-navbar/GroupDetails";
import { useSelector } from "react-redux";

const Modal = (props) => {
	const [className, setClassName] = useState("leftNavbar");
	const location = useLocation();

	const id = useParams();
	const groupId = Object.values(id).toString();

	const handleClick = () => {
		if (className === "leftNavbar") {
			setClassName("leftNavbar--active");
		} else {
			setClassName("leftNavbar");
		}
	};

	return (
		<div>
			<Routes>
				<Route path="new-groups" element={<CreateGroup />} />
				{groupId && <Route path={`/${groupId}`} element={<GroupDetails />} />}
			</Routes>
			{location.pathname === "/main" && className === "leftNavbar" && (
				<div className={className} onClick={handleClick}>
					<IconContext.Provider value={{size: "2rem"}}>
						<BiArrowToRight />
					</IconContext.Provider>
				</div>
			)}
			{location.pathname === "/main" && className === "leftNavbar--active" && (
				<div className={className}>
					<div className="navbar">
						<div className="navbar-header" style={{border: "none"}}>
							<IconContext.Provider value={{size: "2rem"}}>
								<AiOutlineCloseCircle onClick={handleClick} />
							</IconContext.Provider>
							<h2>єВибух</h2>
						</div>
						<MyGroups />
						<div className="zsu">
							Щодня свинособаки намагаються знищити Україну , але , дякуючи ЗСУ,
							ми можемо жити! Наша доля в руках наших захисників і всіх
							українців , в скрутні часи потрібно об'єднатися і робити все для
							нашої перемоги! Слава Україні!
							<a
								style={{color: "red", marginLeft: "5px"}}
								className="zsu"
								href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
							>
								Допомога ЗСУ
							</a>
							<br />
							<br />
							Pig-dogs try to destroy Ukraine every day, but thanks to the Armed
							Forces of Ukraine, we can live! Our fate is in the hands of our
							defenders and all Ukrainians, in difficult times, we need to unite
							and do everything for our victory! Glory to Ukraine!
							<a
								style={{color: "red", marginLeft: "5px"}}
								className="zsu"
								href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
							>
								Donate to Armed Forces of Ukraine
							</a>
							<br />
							<br />
							Сайт створений для друзів, сімей і всіх людей які хочуть
							максимально швидко дізнатись про стан своїх рідних у цей непростий
							час, карта в онлайн форматі відображає території де відбулись
							вибухи, з функцією прив'язування людей до їх місцезнаходження, для
							своєчасної перевірки стану людини та необхідної допомоги при
							потребі! Все буде Україна!
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
