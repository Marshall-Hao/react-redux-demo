import * as types from "../../actions/mutation-types";

const initialState = {
  reSelectList: [
    {
      key: "001",
      status: true,
      name: "flex-reselect-1",
    },
    {
      key: "002",
      status: true,
      name: "flex-reselect-2",
    },
    {
      key: "003",
      status: false,
      name: "flex-reselect-3",
    },
    {
      key: "004",
      status: true,
      name: "flex-reselect-4",
    },
    {
      key: "005",
      status: false,
      name: "flex-reselect-5",
    },
    {
      key: "006",
      status: false,
      name: "flex-reselect-6",
    },
    {
      key: "007",
      status: true,
      name: "flex-reselect-7",
    },
  ],
  filterStatus: "FILTER_ALL_DATA",
};

const mutations = {
  [types.FILTER_ALL_DATA](state) {
    return { ...state };
  },
  [types.UPDATE_FILTER_STATUS](state, action) {
    return {
      ...state,
      filterStatus: action.payload,
    };
  },
};

export default function (state = initialState, action) {
  console.log(action);
  if (!mutations[action.type]) return state;
  return mutations[action.type](state, action);
}
