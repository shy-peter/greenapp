import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GreenAppContextProvider from "./context/GreenAppContext.jsx";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GreenAppContextProvider>
        <App />
      </GreenAppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
