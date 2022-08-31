import {call, ForkEffect, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import ApiService from "../services/ApiService";

function* userLogin({username, password}) {
	try {
		const {data} = yield call(axios.post, "http://46.101.141.117:8000/login", {
			username: username,
			password: password,
		});
		const userToken = data.token;
		localStorage.setItem("userToken", userToken);
		yield call(fetchUserData);
	} catch (e) {
		console.log(e);
	}
}

function* signupUser({username, password, city, lat, lng}) {
	try {
		yield call(axios.post, "http://46.101.141.117:8000/register", {
			username,
			password,
			location: city,
			lat,
			lng,
		});
	} catch (e) {
		console.log(e);
	}
}

function* fetchAllGroups() {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(axios.get, `${url}api/groups`, headers);
		yield put({type: "SET_ALL_GROUPS", data});
	} catch (e) {
		console.log(e);
	}
}

function* joinGroup({title, password, id}) {
	console.log(password);
	try {
		const {url, headers} = ApiService();
		yield call(
			axios.post,
			`${url}api/groups/${id}/members`,
			{
				title,
				password,
				id,
			},
			headers
		);
		yield call(fetchUserGroups);
	} catch (e) {
		console.log(e);
	}
}

function* createGroup({name, avatar, password}) {
	const {url, headers} = ApiService();
	try {
		yield call(
			axios.post,
			`${url}api/groups`,
			{
				title: name,
				password,
				avatar,
			},
			headers
		);
	} catch (e) {
		console.log(e);
	}
}
function* fetchUserGroups() {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(axios.get, `${url}api/groups/joined`, headers);
		yield put({type: "SET_USER_GROUPS", data});
	} catch (e) {
		console.log(e);
	}
}
function* fetchUserData() {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(axios.get, `${url}api/users/me`, headers);
		yield put({
			type: "ISLOGGEDIN",
			username: data.username,
			city: data.location,
			id: data.id,
			lat: data.lat,
			lng: data.lng,
		});
	} catch (e) {
		console.log(e);
	}
}

function* changeGroupSettings({name, password, groupId}) {
	yield put({type: "CHANGEGROUPSETTINGS", name, password, groupId});
}

function* fetchGroupDetails({groupId}) {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(
			axios.get,
			`${url}api/groups/joined/${groupId}`,
			headers
		);
		yield put({type: "SET_GROUP_DETAILS", data});
	} catch (error) {
		console.log(error);
	}
}

function* fetchSources() {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(axios.get, `${url}api/sources`, headers);
		yield put({type: "SET_SOURCES", data});
	} catch (error) {
		console.log(error);
	}
}

function* addNewsSource({groupId, value}) {
	try {
		const {url, headers} = ApiService();
		yield call(
			axios.post,
			`${url}api/groups/${groupId}/sources`,
			{
				source: value,
			},
			headers
		);
		yield call(fetchGroupDetails, {groupId});
	} catch (error) {
		console.log(error);
	}
}

function* fetchAccidents({groupId}) {
	try {
		const {url, headers} = ApiService();
		const {data} = yield call(
			axios.get,
			`${url}api/groups/joined/${groupId}/accidents`,
			headers
		);
		console.log(data);
		yield put({type: "SET_ACCIDENTS", data});
	} catch (error) {
		console.log(error);
	}
}

function* deleteNewsSource() {
	yield put({type: "DELETE_NEWS_SOURCE"});
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
	yield takeLatest("JOIN_GROUP", joinGroup);
	yield takeLatest("CREATE_GROUP", createGroup);
	yield takeLatest("LOG_OBSERVER", logObserver);
	yield takeLatest("CHANGE_GROUP_SETTINGS", changeGroupSettings);
	yield takeLatest("ADD_NEWS_SOURCE", addNewsSource);
	yield takeLatest("DELETE_NEWS_SOURCE", deleteNewsSource);
	yield takeLatest("FETCH_GROUP_DETAILS", fetchGroupDetails);
	yield takeLatest("FETCH_SOURCES", fetchSources);
	yield takeLatest("FETCH_ACCIDENTS", fetchAccidents);
}

export default rootSaga;
