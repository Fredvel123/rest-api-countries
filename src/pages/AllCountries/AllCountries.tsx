import { useState } from "react";
import { AllCountriesStyles } from "./AllCountriesStyles";
import CountriesCards from "./CountriesCards/CountriesCards";
import OptionsBar from "./OptionsBar/OptionsBar";

export default function AllCountries() {
  const [cardCountries, setCardCountries] = useState([]);

  return (
    <AllCountriesStyles>
      <OptionsBar setState={setCardCountries} />
      <CountriesCards cards={cardCountries} />
    </AllCountriesStyles>
  );
}
