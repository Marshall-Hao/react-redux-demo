import * as types from "../../actions/mutation-types";

const initialState = {
  homeName: "none-sense",
};

const mutations = {
  [types.QUERY_GLOBAL_NAME](state) {
    return { ...state };
  },
  // * object里面定义function的方式
  [types.UPDATE_GLOBAL_NAME](state, action) {
    console.log(action);
    return {
      ...state,
      homeName: action.payload,
    };
  },
};

export default function (state = initialState, action) {
  console.log(action);
  if (!mutations[action.type]) return state;
  return mutations[action.type](state, action);
}
