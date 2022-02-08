import { PaginatedItems } from "../Pagination/Pagination";
import { Info } from "../Info/Info";
import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getCountriesList } from "../../core/countries/thunks";
import { getCountriesSelector } from "../../core/countries/selectors";

export const GetCountries = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getCountriesSelector(state));
  useEffect(() => {
    dispatch(getCountriesList());
  }, [dispatch]);

  return (
    <>
      <>
        <Info
          info={data?.length + (data?.length === 1 ? " result" : " results")}
        />
        <PaginatedItems data={data} />
      </>
    </>
  );
};
