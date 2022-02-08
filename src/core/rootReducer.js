import { combineReducers } from "redux";
import { countriesReducer } from "./countries/reducers";

export default combineReducers({
  countries: countriesReducer,
});
