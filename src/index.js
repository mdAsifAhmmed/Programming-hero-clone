import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/Theme/themeContext";
import { BrowserRouter } from "react-router-dom";
// const domain = "";
// const clientId = "ztRhDKYkwvZuLVqulXnXujLqzhdX6yws";
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
