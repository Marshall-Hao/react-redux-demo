import * as types from "../../actions/mutation-types";

const initialState = {
  actionName: "GEEZ",
};

const mutations = {
  [types.UPDATE_REDUX_ACTIONS_DATA](state, action) {
    return {
      ...state,
      actionName: action.payload,
    };
  },
};

export default function (state = initialState, action) {
  if (!mutations[action.type]) return state;
  return mutations[action.type](state, action);
}
