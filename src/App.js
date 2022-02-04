import "./App.css";
import { Route } from "wouter";
import Navbar from "./components/Navbar/Navbar";
import { GetCountries } from "./components/GetCountries/GetCountries";
import { CountryDetail } from "./components/CountryDeail/CountryDetail";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={GetCountries} />
      <Route path="/name/:id" component={CountryDetail} />
      <Route path="/region/:id" component={GetCountries} />
    </>
  );
}

export default App;
