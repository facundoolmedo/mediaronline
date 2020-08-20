import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./TemaConfig";
import { Contenedor } from "./components/Contenedor";
// import "animate.css/animate.min.css";
//import { Contenedor } from "./components/ContenedorDrawerPermanente.jsx";
// import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
