import { Link } from "wouter";
import { Route } from "wouter";
import { CountryDetail } from "../CountryDeail/CountryDetail";

export const Card = ({ country }) => {
  const url = country.name.common;

  return (
    <>
      {country?.name?.common?.length > 0 && (
        <div className="flex flex-col justify-between max-w-sm w-80 rounded overflow-hidden shadow-lg m-4 border-2 ">
          <img
            className="w-full object-cover"
            src={country.flags.png}
            alt={country.name.common}
          />

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
      )}
    </>
  );
};
