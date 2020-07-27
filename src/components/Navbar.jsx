import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// // import Box from "@material-ui/core/Box";
// // import Container from "@material-ui/core/Container";
// import Slide from "@material-ui/core/Slide";
// import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mediar Online
          </Typography>
          <Button href="/" color="inherit" size="large">
            Inicio
          </Button>
          <Button href="/contact" color="inherit" size="large">
            Contacto
          </Button>
          <Button href="/signup" color="inherit" size="large">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </Fragment>
  );
};

export default Navbar;
