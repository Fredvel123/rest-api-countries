import { useEffect, useState } from "react";

interface DataCountryApp {
  name?: {
    common: string;
    official: string;
  };
  population?: string;
  region?: string;
  subregion?: string;
  capital?: string[];
  currencies?: Object;
  languages?: Object;
  borders?: string[];
  flags?: {
    png: string;
  };
  area?: string;
}

export default function useParseDataByCountry() {
  const [country, setCountry] = useState<DataCountryApp>({});
  const [currencies, setCurrencies] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  const parseCurrenciesData = (data: { [key: string]: { name: "string" } }) => {
    if (data) {
      for (const key in data) {
        setCurrencies(data[key].name);
      }
    }
  };

  const parseLanguagesData = (langs: { [key: string]: any }) => {
    if (langs !== undefined) {
      const res = [];
      for (const lan in langs) {
        res.push(langs[lan]);
      }
      setLanguages(res);
    }
  };

  const fetchData = async (url: string) => {
    try {
      const request = await fetch(url);
      const response = await request.json();
      setCountry(response[0]);
      parseCurrenciesData(response[0].currencies);
      parseLanguagesData(response[0].languages);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return { country, fetchData, currencies, languages, error };
}
