import useAllCountries from "../../hooks/useAllCountries";
import { AllCountriesStyles } from "./AllCountriesStyles";
import OptionsBar from "./OptionsBar/OptionsBar";

export default function AllCountries() {
  return (
    <AllCountriesStyles>
      <OptionsBar />
    </AllCountriesStyles>
  );
}
