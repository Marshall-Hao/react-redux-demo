import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import reSelectReducer from "./reselect";

export default combineReducers({
  homeReducer,
  reSelectReducer,
});
