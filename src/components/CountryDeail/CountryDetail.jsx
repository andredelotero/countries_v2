import { useLocation } from "wouter";
import { useGetData } from "../../services/getdata";

export const CountryDetail = () => {
  const [location] = useLocation();
  const { data, error, loading } = useGetData(location);

  return (
    <>
      {loading ? (
        <p>fetching data</p>
      ) : (
        <>
          {!error ? (
            <>
              <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg mx-auto border-2">
                <img
                  className="w-full"
                  src={data[0]?.flags.png}
                  alt={data[0]?.name.common}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {data[0]?.name.common}
                  </div>
                  <p className="text-gray-700 text-base">
                    Capital: {data[0]?.capital[0]}
                  </p>
                  <p className="text-gray-700 text-base">
                    Population:{" "}
                    {data[0]?.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    people
                  </p>
                  <p className="text-gray-700 text-base">
                    Area:{" "}
                    {data[0]?.area
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    KM2
                  </p>
                  <p className="text-gray-700 text-base">Currency:</p>
                </div>
              </div>
            </>
          ) : (
            <p>error fetching data</p>
          )}
        </>
      )}
    </>
  );
};
