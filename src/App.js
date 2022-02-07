import "./App.css";
import { Route } from "wouter";
import { Navbar } from "./components/Navbar/Navbar";
import { GetCountries } from "./components/GetCountries/GetCountries";
import { CountryDetail } from "./components/CountryDeail/CountryDetail";
import { SearchProvider } from "./Context/SearchContext";

const App = () => {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Route path="/" component={GetCountries} />
        <Route path="/name/:id" component={CountryDetail} />
        <Route path="/region/:id" component={GetCountries} />
      </SearchProvider>
    </>
  );
};

export default App;
