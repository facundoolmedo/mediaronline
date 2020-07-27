import React from "react";
//Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./rutas/HomePage";
import Mediar from "./rutas/MediarPage";
import Cursos from "./rutas/CursosPage";
import Login from "./rutas/LoginPage";
import Signup from "./rutas/SignupPage";

//Custom Components
import HideAppBar from "./HideAppBar.jsx";

//Material Ui trash
import { makeStyles } from "@material-ui/core";

import { Drawer } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Lista from "./Lista.jsx";

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
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
  mt: {
    marginTop: 20,
  },
}));

export const Contenedor = (props) => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div>
      <HideAppBar accionAbrir={accionAbrir} />
      <Hidden smUp>
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
              <div className={classes.toolbar} />
              <Mediar />
            </Route>
            <Route path="/cursos">
              <div className={classes.toolbar} />
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
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};
