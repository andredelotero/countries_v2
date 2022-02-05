import { useLocation } from "wouter";
import { useGetData } from "../../services/getdata";
import { useSearch } from "../../Context/SearchContext";
import { PaginatedItems } from "../Pagination/Pagination";

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
        <h3>loading</h3>
      ) : !error ? (
        <>
          <p className="px-4 py-2 rounded border-2 block w-fit mx-auto my-2">
            {newData.length} results
          </p>

          <PaginatedItems data={newData} />
        </>
      ) : (
        <>{error}</>
      )}
    </>
  );
};
