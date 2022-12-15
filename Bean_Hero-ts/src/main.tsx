import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Routes, ThemeProvider } from "./common";
// import { Products, Home, Footer, Card, Header, Nav, Hero } from "./components";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)



