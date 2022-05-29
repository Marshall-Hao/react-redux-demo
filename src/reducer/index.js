import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import reSelectReducer from "./reselect";
import immutableReducer from "./immutable";
import reduxActionReducer from "./redux-action";

export default combineReducers({
  homeReducer,
  reSelectReducer,
  immutableReducer,
  reduxActionReducer,
});
