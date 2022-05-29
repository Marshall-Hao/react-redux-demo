import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import reSelectReducer from "./reselect";
import immutableReducer from "./immutable";

export default combineReducers({
  homeReducer,
  reSelectReducer,
  immutableReducer,
});
