import {combineReducers, createStore, applyMiddleware} from "redux";
import UserReducer from "./UserReducer";
import GroupReducer from "./GroupReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
const rootReducer = combineReducers({
	groups: GroupReducer,
	users: UserReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
