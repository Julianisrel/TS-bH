import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Routes, ThemeProvider } from "./common";
import { BrowserRouter as Router } from "react-router-dom";
import { Products, Home, Footer, Card, Header, Nav, Hero } from "./components";
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
