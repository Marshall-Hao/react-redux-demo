import * as types from "../mutation-types";

export function queryName(params) {
  return {
    type: types.QUERY_GLOBAL_NAME,
    payload: params,
  };
}

export function updateName(params) {
  return {
    type: types.UPDATE_GLOBAL_NAME,
    payload: params,
  };
}

export function queryAsyncName(params) {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState(), "getState");
      dispatch({
        type: types.QUERY_GLOBAL_NAME,
        payload: params,
      });
    }, 2000);
  };
}

export function updateAsyncName(params) {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState(), "getState");
      dispatch({
        type: types.UPDATE_GLOBAL_NAME,
        payload: params,
      });
    }, 3000);
  };
}
