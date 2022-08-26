import {call, ForkEffect, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* userLogin({name, password}) {
	// try {
	// 	const {data} = yield call(axios.post, "http://167.99.248.243:8000/login", {
	// 		username: name,
	// 		password: password,
	// 	});
	// 	const userToken = data.token;
	// 	localStorage.setItem("userToken", userToken);
	// 	yield call(fetchUserData);
	// } catch (e) {
	// 	console.log(e);
	// }
	yield call(fetchUserData);
}

function* signupUser({username, password, city, lat, lng}) {
	// try {
	// 	yield call(axios.post, "http://167.99.248.243:8000/register", {
	// 		username,
	// 		password,
	// 		city,
	// 		lat,
	// 		lng,
	// 	});
	// } catch (e) {
	// 	console.log(e);
	// }
}

function* fetchAllGroups() {
	// try {
	// 	const {data} = yield call(
	// 		axios.get,
	// 		"http://167.99.248.243:8000/api/groups/{groupId}/members"
	// 	);
	// 	yield put({type: "ALL_GROUPS", data});
	// } catch (e) {
	// 	console.log(e);
	// }
	const data = [
		{
			name: "kal",
			id: "3",
			password: "1111",
			members: 2,
			avatar:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAACICAMAAADJVBfkAAAAMFBMVEUAW7v/1QAAVcUeaaXixxb/2wAcbcL/2hwjcsT/2yM7gcsMY749frHmzzb/3zv/1wyZk8VuAAAAwUlEQVR4nO3PBxHDMAAAMXdnNvzZtjTeJzHQ2Pb3xPZtLGNqi2CcYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYN0/eJ/aMo7H1I5xPqd2jvU1tXWst6kJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWreN7fSZ2fX8wwVkJNI/MhAAAAABJRU5ErkJggg==",
		},
		{
			name: "jopa",
			id: "4",
			password: "1111",
			members: 1,
			avatar:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAACICAMAAADJVBfkAAAAMFBMVEUAW7v/1QAAVcUeaaXixxb/2wAcbcL/2hwjcsT/2yM7gcsMY749frHmzzb/3zv/1wyZk8VuAAAAwUlEQVR4nO3PBxHDMAAAMXdnNvzZtjTeJzHQ2Pb3xPZtLGNqi2CcYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYN0/eJ/aMo7H1I5xPqd2jvU1tXWst6kJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWCdYJ1gnWreN7fSZ2fX8wwVkJNI/MhAAAAABJRU5ErkJggg==",
		},
	];
	yield put({type: "FETCHALLGROUPS", data});
}
function* findGroup({name, password, id}) {
	// try {
	// 	yield call(
	// 		axios.post,
	// 		"http://167.99.248.243:8000/api/groups/{groupId}/members",
	// 		{
	// 			name,
	// 			id,
	// 		}
	// 	);
	// } catch (e) {
	// 	console.log(e);
	// }

	yield put({type: "FINDGROUP", name, password, id});
	yield call(fetchUserGroups);
}
function* createGroup({name, avatar}) {
	// try {
	// 	yield call(axios.post, "http://167.99.248.243:8000/api/groups", {
	// 		name,
	// 		password,
	// 		avatar,
	// 	});
	// } catch (e) {
	// 	console.log(e);
	// }
	yield put({type: "CREATEGROUP", name, avatar});
}
function* fetchUserGroups() {
	// try {
	// 	const userToken = localStorage.getItem("userToken");
	// 	const {data} = yield call(
	// 		axios.get,
	// 		"http://167.99.248.243:8000/api/groups/joined",
	// 		{
	// 			headers: {Authorization: `Bearer ${userToken} `},
	// 		}
	// 	);
	// yield put({type: "USER_GROUPS", data});
	// } catch (e) {
	// 	console.log(e);
	// }
	const data = [
		{
			name: "єВибух",
			password: "555",
			id: "1",
			members: 2,
			avatar:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Outline_of_Ukraine.svg/1200px-Outline_of_Ukraine.svg.png",
			news: [
				{
					newsSource: "Lachen",
					id: "2",
				},
			],
		},
	];
	yield put({type: "FETCHUSERGROUPS", data});
}
function* fetchUserData() {
	// try {
	// 	const userToken = localStorage.getItem("userToken");
	// 	const {data} = yield call(
	// 		axios.get,
	// 		"http://167.99.248.243:8000/api/users/me",
	// 		{
	// 			headers: {Authorization: `Bearer ${userToken} `},
	// 		}
	// 	);
	// yield put({
	// 	type: "ISLOGGEDIN",
	// 	username: data.username,
	// 	id: data.id,
	// 	lat: data.lat,
	// 	lng: data.lng,
	// });
	// } catch (e) {
	// 	console.log(e);
	// }
	yield put({
		type: "ISLOGGEIN",
		username: "Sasa",
		id: "1",
		lat: 50.45,
		lng: 30.5236,
		city: "Kyiv",
	});
}

function* changeGroupSettings({name, password, groupId}) {
	yield put({type: "CHANGEGROUPSETTINGS", name, password, groupId});
}

function* fetchNewsSource() {
	const data = [
		{name: "Lachen", id: "1"},
		{name: "Poroshenko", id: "2"},
		{name: "PornHub.jopa", id: "3"},
		{name: "Zelenskyi.ua", id: "4"},
	];
	yield put({type: "FETCHNEWSSOURCE", data});
}

function* addNewsSource() {
	yield put({type: "ADD_NEWS"});
}

function* deleteNewsSource() {
	yield put({type: "DELETE_NEWS"});
}

function* logObserver() {
	try {
		yield call(fetchUserData);
	} catch (e) {
		console.log(e);
	}
}
function* rootSaga() {
	yield takeLatest("USER_LOGIN", userLogin);
	yield takeLatest("USER_SIGNUP", signupUser);
	yield takeLatest("FETCH_ALL_GROUPS", fetchAllGroups);
	yield takeLatest("FETCH_USER_GROUPS", fetchUserGroups);
	yield takeLatest("FETCH_USER_DATA", fetchUserData);
	yield takeLatest("FIND_GROUP", findGroup);
	yield takeLatest("CREATE_GROUP", createGroup);
	yield takeLatest("LOG_OBSERVER", logObserver);
	yield takeLatest("CHANGE_GROUP_SETTINGS", changeGroupSettings);
	yield takeLatest("ADD_NEWS_SOURCE", addNewsSource);
	yield takeLatest("DELETE_NEWS_SOURCE", deleteNewsSource);
	yield takeLatest("FETCH_NEWS_SOURCE", fetchNewsSource);
}

export default rootSaga;
