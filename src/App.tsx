import { useEffect } from "react";
import { byCountryName } from "./config/endpoints";
import { AppStyles } from "./global-styles/App.styled";
import "./global-styles/main.css";
import useTheme from "./hooks/useTheme";
import Header from "./views/Header/Header";

export default function App() {
  const { themeData, setTheme, theme } = useTheme();

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

  return (
    <AppStyles colors={theme}>
      <Header />
    </AppStyles>
  );
}
