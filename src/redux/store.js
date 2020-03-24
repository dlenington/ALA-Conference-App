import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const reducers = combineReducers({});

const store = createStore(reducers, initialState);

export default store;
