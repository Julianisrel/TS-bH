import { ThemeProvider as ST } from "styled-components";

export const theme = {
  colors: {
    primary: '#9AE19D',
    secondary: '#537A5A',
    header: "#DECEBC2",
    body: "#fff",
    footer: "003333",
    darkGrey: '#2C302E',
    disabled: 'lightgrey',
    black: '#111',
    white: "#fff",
    red: '#ff0000',
    green: "#90EE90",
  },
  headerHeight: '60px',
  zIndexes: { header: 2, alert: 3 },
};

const ThemeProvider = ({ children }) => {
  return <ST theme={theme}>{children}</ST>;
};

export default ThemeProvider;
