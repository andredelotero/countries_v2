import { useLocation } from "wouter";
import { useGetData } from "../../services/getdata";
import { Card } from "./Card";
export const GetCountries = () => {
  const [location] = useLocation();
  const { data, error, loading } = useGetData(location);
  data?.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));
  return (
    <>
      {loading ? (
        <h3>loading</h3>
      ) : !error ? (
        <>
          <section className=" flex  flex-wrap w-11/12 justify-center mx-auto max-w-screen-xxl ">
            {data.map((country) => (
              <Card country={country} key={country.name.common} />
            ))}
          </section>
        </>
      ) : (
        <>{error}</>
      )}
    </>
  );
};
