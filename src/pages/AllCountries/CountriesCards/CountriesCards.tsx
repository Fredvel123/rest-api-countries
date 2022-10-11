import { useNavigate } from "react-router-dom";
import useAllCountries from "../../../hooks/useAllCountries";
import useTheme from "../../../hooks/useTheme";
import { Card, MainCard } from "./CountriesCardsStyles";

interface CardsApp {
  cards: any[];
}

interface CountryRestApi {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
}

const CardCountry = ({ data }: any) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const normalizePopulationNumber = (num: number) => {
    const dataString = num.toString().split("").reverse().join("");
    let index = 1;
    let result = "";
    for (const char of dataString) {
      if (index % 3 == 0) {
        result += char + ",";
      } else {
        result += char;
      }
      index += 1;
    }
    result = result.split("").reverse().join("");
    if (result[0] === ",") {
      result = result.substring(1);
    }
    return result;
  };

  return (
    <Card colors={theme} onClick={() => navigate(data.name.common)}>
      <img src={data.flags.svg} alt="" width={350} />
      <div className="info">
        <h2>{data.name.common}</h2>
        <li>Population: {normalizePopulationNumber(data.population)}</li>
        <li>Region: {data.region}</li>
        <li>Capital: {data.capital}</li>
      </div>
    </Card>
  );
};

export default function CountriesCards({ cards }: CardsApp) {
  const { countries } = useAllCountries();

  if (cards.length > 0) {
    return (
      <MainCard>
        {cards.map((country: CountryRestApi, index) => (
          <CardCountry data={country} key={index} />
        ))}
      </MainCard>
    );
  } else {
    return (
      <MainCard>
        {countries.map((country: CountryRestApi, index) => (
          <CardCountry data={country} key={index} />
        ))}
      </MainCard>
    );
  }

  // return (
  //   <MainCard>
  //     {/* {cards.length > 0
  //       ? cards.map((country: CountryRestApi, index) => (
  //           <CardCountry data={country} key={index} />
  //         ))
  //       : countries.map((country: CountryRestApi, index) => (
  //           <CardCountry data={country} key={index} />
  //         ))} */}
  //   </MainCard>
  // );
}
