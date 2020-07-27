import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./TemaConfig";
import { Contenedor } from "./components/Contenedor";
//import { Contenedor } from "./components/ContenedorDrawerPermanente.jsx";
// import CssBaseline from "@material-ui/core/CssBaseline";

theme.typography.h1 = {
  fontSize: "3.4rem",
  "@media (min-width:600px)": {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6.8rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
