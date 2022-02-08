import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route } from "wouter";
import { Navbar } from "./components/Navbar/Navbar";
import { GetCountries } from "./components/GetCountries/GetCountries";
import { CountryDetail } from "./components/CountryDeail/CountryDetail";

//redux
import { Provider } from "react-redux";
import store from "./core/store";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Route path="/" component={GetCountries} />
        {/* <Route path="/name/:id" component={CountryDetail} />
        <Route path="/region/:id" component={GetCountries} /> */}
      </Provider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
