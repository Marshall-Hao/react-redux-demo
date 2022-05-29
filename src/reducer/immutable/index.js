import produce from "immer";
import * as types from "../../actions/mutation-types";

const initialState = {
  complexData: {
    commonInfo: {
      name: {
        firstName: "wtf",
        secondName: "Fedora",
      },
    },
    specialInfo: {
      address: "cool fuck",
    },
  },
};

const mutations = {
  [types.UPDATE_IMMUTABLE_DATA](state, action) {
    return produce(state, (draftState) => {
      // eslint-disable-next-line no-param-reassign
      draftState.complexData.commonInfo.name.firstName =
        action.payload;
      console.log("oldState", state);
    });
    // const { complexData } = state;
    // const newComplexData = { ...complexData };

    // newComplexData.commonInfo.name.firstName = action.payload;
    // console.log('newComplexData Vs complexData', newComplexData, complexData);
    // return {
    //   ...state,
    //   complexData: newComplexData,
    // };
  },
};

export default function (state = initialState, action) {
  if (!mutations[action.type]) return state;
  return mutations[action.type](state, action);
}
