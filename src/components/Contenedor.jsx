import React from "react";
//Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//hola
import Home from "./rutas/HomePage";
import Mediar from "./rutas/MediarPage";
import Cursos from "./rutas/CursosPage";
import Login from "./rutas/LoginPage";
import Signup from "./rutas/SignupPage";

//Custom Components
import HideAppBar from "./HideAppBar.jsx";

//Material Ui trash
import { makeStyles, Container } from "@material-ui/core";

import { Drawer, Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Lista from "./Lista.jsx";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const drawerWidth = 300;

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    opacity: 0.8,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // position:"relative",
    backgroundColor: theme.palette.background.primary,
  },
  mt: {
    marginTop: 20,
  },
  bg: {
    backgroundColor: "#DEDEDE",
  },
  cont: {
    position: "relative",
  },
  bar: {
    position: "absolute",
  },
}));

export const Contenedor = (props) => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.cont}>
      <Hidden mdUp>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="temporary"
          anchor="left"
          open={abrir}
          onClose={accionAbrir}
        >
          <Lista />
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Router>
          <Switch>
            <Route path="/mediar">
              <Box className={classes.bar} mt={4} ml={4}>
                <Fab
                  color="secondary"
                  size="medium"
                  aria-label="add"
                  className={classes.volver}
                  href="/"
                >
                  <ArrowBackIcon />
                </Fab>
              </Box>
              <Mediar />
            </Route>
            <Route path="/cursos">
              <Box className={classes.bar} mt={4} ml={4}>
                <Fab
                  color="secondary"
                  size="medium"
                  aria-label="add"
                  className={classes.volver}
                  href="/"
                >
                  <ArrowBackIcon />
                </Fab>
              </Box>
              <Cursos />
            </Route>
            <Route path="/login">
              <div className={classes.toolbar} />
              <Login />
            </Route>
            <Route path="/signup">
              <div className={classes.toolbar} />
              <Signup />
            </Route>
            <Route path="/" exact>
              <Container fixed className={classes.bar}>
                <HideAppBar accionAbrir={accionAbrir} />
              </Container>
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};