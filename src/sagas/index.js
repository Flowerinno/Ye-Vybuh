import {call, ForkEffect, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* userLogin({name, password}) {
	try {
		const {data} = yield call(axios.post, "http://167.99.248.243:8000/login", {
			username: name,
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
		yield call(axios.post, "http://167.99.248.243:8000/register", {
			username,
			password,
			city,
			lat,
			lng,
		});
	} catch (e) {
		console.log(e);
	}
}

function* fetchAllGroups() {
	try {
		const {data} = yield call(
			axios.get,
			"http://167.99.248.243:8000/api/groups/{groupId}/members"
		);
		yield put({type: "ALL_GROUPS", data});
	} catch (e) {
		console.log(e);
	}
}
function* findGroup({name, id}) {
	try {
		yield call(
			axios.post,
			"http://167.99.248.243:8000/api/groups/{groupId}/members",
			{
				name,
				id,
			}
		);
	} catch (e) {
		console.log(e);
	}
}
function* createGroup({name, password, avatar}) {
	try {
		yield call(axios.post, "http://167.99.248.243:8000/api/groups", {
			name,
			password,
			avatar,
		});
	} catch (e) {
		console.log(e);
	}
}
function* fetchUserGroups() {
	try {
		const userToken = localStorage.getItem("userToken");
		const {data} = yield call(
			axios.get,
			"http://167.99.248.243:8000/api/groups/joined",
			{
				headers: {Authorization: `Bearer ${userToken} `},
			}
		);
		yield put({type: "USER_GROUPS", data});
	} catch (e) {
		console.log(e);
	}
}
function* fetchUserData() {
	try {
		const userToken = localStorage.getItem("userToken");
		const {data} = yield call(
			axios.get,
			"http://167.99.248.243:8000/api/users/me",
			{
				headers: {Authorization: `Bearer ${userToken} `},
			}
		);
		yield put({
			type: "ISLOGGEDIN",
			username: data.username,
			id: data.id,
			lat: data.lat,
			lng: data.lng,
		});
	} catch (e) {
		console.log(e);
	}
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
	// yield takeLatest("CREATE_GROUP", createGroup);
	yield takeLatest("LOG_OBSERVER", logObserver);
}

export default rootSaga;
