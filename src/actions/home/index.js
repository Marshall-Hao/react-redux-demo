import * as types from "../mutation-types";

export function updateName(params) {
  return {
    type: types.UPDATE_GLOBAL_NAME,
    payload: params,
  };
}
