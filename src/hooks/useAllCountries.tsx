import { useDispatch, useSelector } from "react-redux";
import { allCountries } from "../config/endpoints";
import { setCountriesValue } from "../redux/slices/countries";
import { RootState } from "../redux/store";

export default function useAllCountries() {
  const countries = useSelector((state: RootState) => state.countries.value);
  const dispatch = useDispatch();

  const setCountries = (data: []) => dispatch(setCountriesValue(data));

  const getAllCountriesInfo = async () => {
    try {
      const request = await fetch(allCountries);
      const response = await request.json();
      dispatch(setCountriesValue(response));
    } catch (err) {
      console.log(err);
    }
  };

  return { countries, getAllCountriesInfo, setCountries };
}
