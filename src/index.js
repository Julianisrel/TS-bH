import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./common";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
