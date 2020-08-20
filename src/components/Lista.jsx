import React, { Fragment } from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  // Container,
} from "@material-ui/core";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import LaptopIcon from "@material-ui/icons/Laptop";
import MenuBookIcon from "@material-ui/icons/MenuBook";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  dividerColor: {
    backgroundColor: "#333333",
    margin: 10,
  },
}));

const Lista = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.toolbar} />
      <List component="nav">
        <ListItem button component="a" href="/">
          <ListItemIcon>
            <HomeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        <ListItem button component="a" href="/mediar">
          <ListItemIcon>
            <MenuBookIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Mediación" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        <ListItem button component="a" href="/cursos">
          <ListItemIcon>
            <LaptopIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Formación" />
        </ListItem>
        <Divider className={classes.dividerColor} />
        {/* <ListItem button component="a">
          <ListItemIcon>
            <ExitToAppIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>*/}
      </List>
    </Fragment>
  );
};

export default Lista;
