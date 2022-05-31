import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./home/index";
import reSelectReducer from "./reselect";
import immutableReducer from "./immutable";
import reduxActionReducer from "./redux-action";
import typeReducer from "../model/home/index.ts";

export default combineReducers({
  homeReducer,
  reSelectReducer,
  immutableReducer,
  reduxActionReducer,
  typeReducer,
});
