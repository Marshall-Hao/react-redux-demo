import * as types from "../mutation-types";

export default function updateReduxActions(params) {
  console.log(arguments);
  return {
    type: types.UPDATE_REDUX_ACTIONS_DATA,
    payload: params,
  };
}
