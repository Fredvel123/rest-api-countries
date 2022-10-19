import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { byCountryName } from "../../config/endpoints";
import normalizePopulationNumber from "../../helpers/normalizePopulationNumber";
import useParseDataByCountry from "../../hooks/useParseDataByCountry";
import useTheme from "../../hooks/useTheme";
import { CountryStyles } from "./CountryStyles";

export default function Country() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { country, fetchData, currencies, languages, error } =
    useParseDataByCountry();
  useEffect(() => {
    fetchData(byCountryName + location.pathname);
  }, []);

  if (!error) {
    return (
      <CountryStyles colors={theme}>
        <div className="button" onClick={() => navigate("/")}>
          <span>← Back</span>
        </div>
        <div className="country-card">
          <img src={country.flags?.png} alt="flag" />

          <div className="info">
            <div className="title">
              <h2>{country.name?.common}</h2>
            </div>
            <div className="main-info">
              <li>
                <span>Official Name:</span> {country.name?.official}
              </li>
              <li>
                <span>Population: </span>
                {country.population !== undefined
                  ? normalizePopulationNumber(country.population)
                  : null}
              </li>
              <li>
                <span>Region:</span> {country.region}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital:</span> {country.capital}
              </li>
            </div>
            <div className="secondary-info">
              <li>
                <span>Area:</span> {country.area} km²
              </li>
              <li>
                <span>Currencies:</span> {currencies}
              </li>
              <div>
                <span>Languages: </span>
                {languages
                  ? languages.map((language, index) => (
                      <div key={index}>
                        <li key={index}>{language}</li>
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="borders">
              <span>Borders Countries: </span>{" "}
              {country.borders?.map((border, index) => (
                <li key={`${index}-${border}`} className="borders-country">
                  {border}
                </li>
                // <div className="borders-country" key={index}>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </CountryStyles>
    );
  } else {
    return <h2>Error Getting Country</h2>;
  }
}
