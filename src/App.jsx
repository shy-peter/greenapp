import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GreenAppContextProvider from "./context/GreenAppContext";

const App = () => {
  return (
    <MantineProvider>
      <GreenAppContextProvider>
        <Navbar />
        <Home />
      </GreenAppContextProvider>
    </MantineProvider>
  );
};

export default App;
