import {
  configureStore,
  createStore,
  applyMiddleware,
  compose,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducer/index";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
