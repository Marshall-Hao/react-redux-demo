import * as types from "../mutation-types";

export default function updateImmutableData(params) {
  return {
    type: types.UPDATE_IMMUTABLE_DATA,
    payload: params,
  };
}
