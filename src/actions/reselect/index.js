import * as types from "../mutation-types";

export function filterData(data, filter) {
  console.log(filter, "filter", Date.now());
  switch (filter) {
    case types.FILTER_ALL_DATA:
      return data;
    case types.FILTER_SUCCESS_STATUS:
      return data.filter((item) => item.status);
    case types.FILTER_FAIL_STATUS:
      return data.filter((item) => !item.status);
    default:
      return data;
  }
}

export function updateFilterStatus(params) {
  return {
    type: types.UPDATE_FILTER_STATUS,
    payload: params,
  };
}
