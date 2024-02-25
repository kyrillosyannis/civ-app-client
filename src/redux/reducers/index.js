import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationReducer";
import commentsReducer from "./commentsReducer";
import petitionsReducer from "./petitionsReducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    comments: commentsReducer,
    petitions: petitionsReducer,
});

export default rootReducer;