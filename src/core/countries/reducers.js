import * as actionTypes from "../actionTypes";

const initialState = {
  countries: [],
  isLoadingCountries: false,
  errorCountries: null,
};

export const countriesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.GET_COUNTRIES_LIST_REQUEST:
      return {
        ...state,
        isLoadingCountries: true,
      };

    case actionTypes.GET_COUNTRIES_LIST_SUCCESS:
      return {
        ...state,
        countries: payload,
        isLoadingCountries: false,
      };

    case actionTypes.GET_COUNTRIES_LIST_FAILURE:
      return {
        ...state,
        isLoadingCountries: false,
        error: payload,
      };

    default:
      return state;
  }
};
