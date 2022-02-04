import { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "wouter";

export const SearchContext = createContext();

export function SearchProvider(props) {
  const [searchValue, setSearchValue] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  const Search = () => {
    const handleChange = (e) => {
      setSearchValue(e.target.value);
    };

    return (
      <div className="ml-auto flex items-center">
        <input
          placeholder="search for..."
          value={searchValue}
          className="px-4 py-2 border-2 rounded"
          onChange={handleChange}
        />
      </div>
    );
  };

  const value = { searchValue, Search };
  return <SearchContext.Provider value={value} {...props} />;
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("error al cargar los datos en CartContext");
  }
  return context;
}
