import React, { useEffect } from "react";
import "./global-styles/main.css";
import { AppStyles } from "./global-styles/App.styled";
import useTheme from "./hooks/useTheme";
import Header from "./views/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCountries from "./pages/AllCountries/AllCountries";
import useAllCountries from "./hooks/useAllCountries";
import Country from "./pages/Country/Country";

export default function App(): JSX.Element {
  const { themeData, setTheme, theme } = useTheme();
  const { countries, getAllCountriesInfo, setCountries } = useAllCountries();

  // storing theme in localstorage
  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (data !== null) {
      setTheme(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeData));
  }, [themeData]);

  // storing Countries in localstorage
  useEffect(() => {
    const data = localStorage.getItem("countries");
    if (data !== null) {
      setCountries(JSON.parse(data));
    } else {
      getAllCountriesInfo();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  return (
    <BrowserRouter>
      <AppStyles colors={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </AppStyles>
    </BrowserRouter>
  );
}
