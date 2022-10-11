import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { byRegion } from "../../../config/endpoints";
import useAllCountries from "../../../hooks/useAllCountries";
import useTheme from "../../../hooks/useTheme";
import { OptionsBarStyles } from "./OptionsBarStyles";

interface CountryApi {
  name: {
    common: string;
  };
}
interface SetStateInterface {
  setState: Function;
}

export default function OptionsBar({ setState }: SetStateInterface) {
  const navigate = useNavigate();
  const [isfilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [nameCountries, setNameCountries] = useState<string>("");
  const [sugestion, setSugestion] = useState([]);
  const { theme } = useTheme();
  const { countries } = useAllCountries();

  const handlerFilterRegions = () => setIsFilterOpen(!isfilterOpen);

  const findCountriesbyName = (countryName: string) => {
    const country = countries.filter((country: CountryApi) =>
      country.name.common.toLowerCase().match(countryName.toLowerCase())
    );
    return setSugestion(country);
  };

  const handlerInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCountries(e.target.value);
    if (nameCountries.length > 1) {
      findCountriesbyName(nameCountries);
    }
    if (e.target.value === "") {
      setSugestion([]);
    }
  };

  const handlerCloseSugestions = () => {
    setSugestion([]);
  };

  const handlerFormOnSubmit = () => {
    findCountriesbyName(nameCountries);
  };

  const getCountriesByRegion = async (region: string) => {
    try {
      const request = await fetch(byRegion + `/${region}`);
      const response = await request.json();
      setIsFilterOpen(false);
      return setState(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OptionsBarStyles filter={isfilterOpen} colors={theme}>
      <label>
        <input
          value={nameCountries}
          type="text"
          placeholder="Search for a country..."
          onChange={handlerInputOnChange}
        />
        <MagnifyingGlassIcon
          className="icon_search"
          onClick={handlerFormOnSubmit}
        />
        <div className="countries-sugestion">
          {sugestion.length > 0 ? (
            <XMarkIcon
              className="icon_close"
              onClick={handlerCloseSugestions}
            />
          ) : null}

          {sugestion.length > 0
            ? sugestion.map((country: CountryApi, index) => (
                <li key={index} onClick={() => navigate(country.name.common)}>
                  {country.name.common}
                </li>
              ))
            : null}
        </div>
      </label>
      {/* </form> */}
      <div className="filter">
        <div className="bar" onClick={handlerFilterRegions}>
          <p>Filter by Region</p>
          {isfilterOpen ? (
            <ChevronUpIcon className="icon" />
          ) : (
            <ChevronDownIcon className="icon" />
          )}
        </div>
        <div className="regions">
          <p onClick={() => getCountriesByRegion("africa")}>Africa</p>
          <p onClick={() => getCountriesByRegion("america")}>America</p>
          <p onClick={() => getCountriesByRegion("asia")}>Asia</p>
          <p onClick={() => getCountriesByRegion("europe")}>Europe</p>
          <p onClick={() => getCountriesByRegion("oceania")}>Oceania</p>
        </div>
      </div>
    </OptionsBarStyles>
  );
}
