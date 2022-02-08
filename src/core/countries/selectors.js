import { createSelector } from "reselect";

export const getCountriesSelector = createSelector(
  (state) => state.countries,
  (countriesData) => countriesData.countries
);
