import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer
});

export default rootReducer;