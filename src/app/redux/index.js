import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth-reducer';
import { thunk } from 'redux-thunk';
import asyncRequest from "./middlewares/asyncRequests";

const rootReducer = combineReducers({
	authReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: () => [thunk ,asyncRequest]
});

export default store;