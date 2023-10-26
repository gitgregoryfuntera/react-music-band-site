import { ReactNode, createContext, useState } from "react";

type Version = "light" | "dark";

interface ThemeContext {
  version: Version;
  setThemeVersion: (version: Version) => void;
}

export const ThemeContext = createContext({} as ThemeContext);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [themeVersion, setThemeVersion] = useState<Version>("light");

  return (
    <ThemeContext.Provider
      value={{
        version: themeVersion,
        setThemeVersion,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
