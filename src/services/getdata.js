import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const partial = url === "/" ? "/all" : url;
  const fullUrl = "https://restcountries.com/v3.1" + partial;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setData([]);
    fetch(fullUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((jsonResponse) => {
        setData(jsonResponse);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      );
  }, [fullUrl]);

  return { data, error, loading };
};
