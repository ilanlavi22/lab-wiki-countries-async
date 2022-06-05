import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/Home";
import CountriesList from "./pages/CountriesList";
import Country from "./pages/Country";
import ErrorPage from "./pages/Error";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/countries"
              element={
                <CountriesList
                  setCountries={setCountries}
                  countries={countries}
                />
              }
            />
            <Route
              path="countries/:countryId"
              element={
                <Country setCountries={setCountries} countries={countries} />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
