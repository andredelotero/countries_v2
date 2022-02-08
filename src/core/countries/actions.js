import * as actionTypes from "../actionTypes";

export const getCountriesListRequest = () => ({
  type: actionTypes.GET_COUNTRIES_LIST_REQUEST,
});

export const getCountriesListSuccess = (payload) => ({
  type: actionTypes.GET_COUNTRIES_LIST_SUCCESS,
  payload,
});

export const getCountriesListFailure = (payload) => ({
  type: actionTypes.GET_COUNTRIES_LIST_FAILURE,
  payload,
});
