import {
  configureStore,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducer/index";

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
