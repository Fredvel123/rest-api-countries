import useTheme from "../../hooks/useTheme";
import { HeaderStyles } from "./Header.Styles";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { themeData, theme, setAutoTheme } = useTheme();
  return (
    <HeaderStyles color={theme}>
      <h2>Where in the world?</h2>
      {themeData ? (
        <div className="setTheme_button" onClick={setAutoTheme}>
          <MoonIcon className="icon" />
          <p>Dark Mode</p>
        </div>
      ) : (
        <div className="setTheme_button" onClick={setAutoTheme}>
          <SunIcon className="icon" />
          <p>Light Mode</p>
        </div>
      )}
    </HeaderStyles>
  );
}
