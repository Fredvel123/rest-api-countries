import { useDispatch, useSelector } from "react-redux";
import { setThemeValue } from "../redux/slices/theme";
import { RootState } from "../redux/store";
import { darkTheme, lightTheme } from "../global-styles/colors";

export default function useTheme() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const setTheme = (data: boolean) => {
    dispatch(setThemeValue(data));
  };
  const setAutoTheme = () => dispatch(setThemeValue(!theme));

  return {
    theme: theme ? lightTheme : darkTheme,
    setTheme,
    themeData: theme,
    setAutoTheme,
  };
}
