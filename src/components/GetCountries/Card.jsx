import { Link } from "wouter";
import { useEffect, useState } from "react";

export const Card = ({ country }) => {
  const url = country.name.common;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(country);
  }, [country]);

  return (
    <>
      <div className="flex flex-col justify-between max-w-sm w-80 rounded h-80  shadow-lg m-4 border-2 ">
        <img
          className="w-full object-cover"
          src={data?.flags?.png}
          alt={data?.name?.common}
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
