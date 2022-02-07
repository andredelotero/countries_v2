import { useLocation, Link } from "wouter";
import { useGetData } from "../../services/getdata";
import { Info } from "../Info/Info";

import { useOnLoadImages } from "../../services/useOnLoadingImages";
import { useRef } from "react";
import "../GetCountries/Skeleton.css";

export const CountryDetail = () => {
  const [location] = useLocation();
  const { data, error, loading } = useGetData(location);

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  return (
    <>
      {loading ? (
        <Info info={"loading"} />
      ) : (
        <>
          {!error ? (
            <>
              <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg mx-auto border-2">
                <img
                  ref={imgRef}
                  className="w-full"
                  src={data[0]?.flags.png}
                  alt={data[0]?.name.common}
                  style={imageLoaded ? {} : { display: "none" }}
                />
                <p
                  className="skeleton-klih6epu447"
                  style={imageLoaded ? { display: "none" } : {}}
                ></p>
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
                  <p className="text-gray-700 text-base">
                    Currency:{" "}
                    {data.length > 0 &&
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
