import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContextProvider = () => useContext(ThemeContext);
