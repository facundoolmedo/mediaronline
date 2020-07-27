import React from "react";
//Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./HomePage";
import Contact from "./ContactPage";
import Signup from "./SignupPage";

//Custom Components
import HideAppBar from "./HideAppBar.jsx";

//Material Ui trash
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
// import Typography from '@material-ui/core/Typography';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";

//Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 200;

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(2),
  },
  mt: {
    marginTop: 20,
  },
}));

export const Contenedor = (props) => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideAppBar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.mt} />

        <List>
          {["Inicio", "Mediar", "Cursos"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Nosotros", "Contacto"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signup">
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
