import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import { Hidden, Drawer } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import logo from "../static/logov4.png";

// import Lista from "./Lista.jsx";

import Hidden from "@material-ui/core/Hidden";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  firsButton:{
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
    height: 70,
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 70,
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: 30,
    paddingRight: 30,
  },
  logButton: {
    marginRight: theme.spacing(3),
    height: 70,
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  title: {
    flexGrow: 1,
    paddingTop: 5,
  },
  offset: theme.mixins.toolbar,
  appBar: {
    width: "calc(100% - 60px)",
    height: "auto",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginTop: 15,
    marginRight: 30,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 250,
    cursor: "pointer",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.appBar} color="primary">
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
                onClick={() => props.accionAbrir()}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="body1"
              className={classes.title}
              onClick={() => scroll.scrollToTop()}
            >
              <img
                className={classes.logo}
                src={logo}
                alt="logo"
                onClick={() => scroll.scrollToTop()}
              />
            </Typography>
            
            <Hidden smDown>
              <Button
                href="/"
                color="primary"
                size="large"
                className={classes.firsButton}
              >
                Inicio
              </Button>
              <Button
                href="/mediar"
                color="primary"
                size="large"
                className={classes.menuButton}
              >
                Mediación
              </Button>
              <Button
                href="/cursos"
                color="primary"
                size="large"
                className={classes.menuButton}
              >
                Cursos
              </Button>
              <Button
                href="/login"
                color="primary"
                size="large"
                className={classes.logButton}
                variant="outlined"
              >
                Login
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
