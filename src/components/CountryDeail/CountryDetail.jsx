import { useLocation, Link } from "wouter";
import { useGetData } from "../../services/getdata";
import { Info } from "../Info/Info";

export const CountryDetail = () => {
  const [location] = useLocation();
  const { data, error, loading } = useGetData(location);

  return (
    <>
      {loading ? (
        <Info info={"loading"} />
      ) : (
        <>
          {!error ? (
            <>
              <div className="max-w-sm m-4 rounded bg-gray-100 overflow-hidden shadow-lg mx-auto border-2">
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
                    Capital:{" "}
                    {data[0]?.capital === undefined
                      ? null
                      : data[0]?.capital[0]}
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
                  <p className="text-gray-700 text-base">
                    Currency:{" "}
                    {data.length > 0 &&
                      data[0]?.currencies !== undefined &&
                      Object.values(data[0]?.currencies)[0]?.name}
                  </p>
                </div>
              </div>
              <Link
                href={"/"}
                className={
                  "rounded block px-4 py-2 mx-auto w-fit border-2 my-4  text-md font-medium hover:bg-indigo-600 hover:text-white text-gray-900"
                }
              >
                Return to Index
              </Link>
            </>
          ) : (
            <Info info={"error fetching data"} />
          )}
        </>
      )}
    </>
  );
};
