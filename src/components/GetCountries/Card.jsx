import { Link } from "wouter";
// import { useOnLoadImages } from "../../services/useOnLoadingImages";
import { useRef, useEffect, useState } from "react";
import "./Skeleton.css";

export const Card = ({ country }) => {
  const url = country.name.common;
  const [data, setData] = useState(null);

  const imgRef = useRef(null);
  // const imageLoaded = useOnLoadImages(imgRef);
  useEffect(() => {
    setData(country);
  }, [country]);

  return (
    <>
      <div className="flex flex-col justify-between max-w-sm w-80 rounded h-80  shadow-lg m-4 border-2 ">
        {/* <p className="skeleton" style={imageLoaded ? { display: "none" } : {}}>
          {" "}
        </p> */}
        <img
          ref={imgRef}
          className="w-full object-cover"
          src={data?.flags?.png}
          alt={data?.name?.common}
          // style={imageLoaded ? {} : { display: "none" }}
        />

        <div className="px-6 py-4">
          <Link
            href={`/name/` + url}
            className=" text-sm rounded mb-2 text-center bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-800"
          >
            {data?.name?.common}
          </Link>
        </div>
      </div>
    </>
  );
};
