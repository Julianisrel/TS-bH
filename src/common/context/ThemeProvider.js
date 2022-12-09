import { ThemeProvider as ST } from "styled-components";

export const theme = {
  colors: {
    header: "#DECEBC2",
    body: "#fff",
    footer: "003333"
  }
};

const ThemeProvider = ({ children }) => {
  return <ST theme={theme}>{children}</ST>;
};

export default ThemeProvider;
