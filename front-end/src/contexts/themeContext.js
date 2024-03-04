import { createContext, useContext } from "react";

const themeContext = createContext({ theme: 'light', setTheme: () => { } });
export const ThemeContextProvider = themeContext.Provider;
export const useThemeContext = () => useContext(themeContext);