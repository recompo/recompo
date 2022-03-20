import React, { FC, useContext } from "react";

interface ITheme {
  bgColor: string;
  fgColor: string;
  textColor: string;
  font: string;
  slColor: string;
  btnHoverBg: string;
  btnHoverColor: string;
  fontWeight: number
}

export type Theme = Partial<ITheme>;

export const ThemeContext = React.createContext<Theme>({});

export const ThemeProvider: FC<{ theme: Theme }> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
