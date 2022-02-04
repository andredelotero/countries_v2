import { useLocation } from "wouter";
import { useGetData } from "../../services/getdata";
import { Card } from "./Card";
import { useSearch } from "../../Context/SearchContext";

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
        newData.length > 0 ? (
          <>
            <p className="px-4 py-2 rounded border-2 block w-fit mx-auto my-2">
              {newData.length} results
            </p>
            <section className=" flex  flex-wrap w-11/12 justify-center mx-auto max-w-screen-xxl ">
              {newData.map((country) => (
                <Card country={country} key={country.name.common} />
              ))}
            </section>
          </>
        ) : null
      ) : (
        <>{error}</>
      )}
    </>
  );
};
