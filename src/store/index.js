import {
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import reducers from "../reducer/index";

export default createStore(reducers);
