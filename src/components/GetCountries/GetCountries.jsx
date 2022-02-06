import { useLocation } from "wouter";
import { useGetData } from "../../services/getdata";
import { useSearch } from "../../Context/SearchContext";
import { PaginatedItems } from "../Pagination/Pagination";
import { Info } from "../Info/Info";

export const GetCountries = () => {
  const [location] = useLocation();
  const { searchValue } = useSearch();
  const { data, error, loading } = useGetData(location);

  const newData = data.filter((filtered) =>
    filtered.name.common.toUpperCase().startsWith(searchValue.toUpperCase())
  );

  newData?.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));

  return (
    <>
      {loading ? (
        <Info info={"loading"} />
      ) : !error ? (
        <>
          <Info
            info={
              newData.length + (newData.length === 1 ? " result" : " results")
            }
          />

          <PaginatedItems data={newData} />
        </>
      ) : (
        <>{error}</>
      )}
    </>
  );
};
