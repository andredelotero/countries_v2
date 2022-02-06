import { Link } from "wouter";
import { Route } from "wouter";
import { CountryDetail } from "../CountryDeail/CountryDetail";
import { useOnLoadImages } from "../../services/useOnLoadingImages";
import { useRef } from "react";
import "./Skeleton.css";

export const Card = ({ country }) => {
  const url = country.name.common;

  const imgRef = useRef(null);
  const imageLoaded = useOnLoadImages(imgRef);

  return (
    <>
      <div className="flex flex-col justify-between max-w-sm w-80 rounded overflow-hidden shadow-lg m-4 border-2 ">
        <img
          ref={imgRef}
          className="w-full object-cover"
          src={country.flags.png}
          alt={country.name.common}
          style={imageLoaded ? {} : { display: "none" }}
        />
        <p
          className="skeleton-klih6epu447"
          style={imageLoaded ? { display: "none" } : {}}
        ></p>
        <div className="px-6 py-4">
          <Route path="/name/:id" component={CountryDetail(country)} />
          <Link
            href={`/name/` + url}
            className=" text-sm rounded mb-2 text-center bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-800"
          >
            {country.name.common}
          </Link>
        </div>
      </div>
    </>
  );
};
