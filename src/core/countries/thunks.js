import * as service from "./services";
import * as actions from "./actions";

export const getCountriesList = () => async (dispatch) => {
  dispatch(actions.getCountriesListRequest());
  try {
    const { data } = await service.getCountries();
    dispatch(actions.getCountriesListSuccess(data));
  } catch (err) {
    dispatch(actions.getCountriesListFailure(err?.error?.message));
  }
};
