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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffc107",
    cursor: "pointer",
  },
  offset: theme.mixins.toolbar,
  appBar: {
    width: `calc(100% - ${0}px)`,
    marginLeft: 0,
    opacity: 0.7,
    // background: "transparent",
    // boxShadow: "none",
    backgroundColor: "#000000",
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={classes.appBar}
          color="primary"
          elevation={5}
        >
          <Toolbar>
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => props.accionAbrir()}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Typography
              variant="h4"
              className={classes.title}
              onClick={() => scroll.scrollToTop()}
            >
              M & F
            </Typography>

            <Hidden xsDown>
              <Button
                href="/"
                color="inherit"
                size="large"
                className={classes.menuButton}
              >
                Inicio
              </Button>
              <Button
                href="/mediar"
                color="inherit"
                size="large"
                className={classes.menuButton}
              >
                Mediar
              </Button>
              <Button
                href="/cursos"
                color="inherit"
                size="large"
                className={classes.menuButton}
              >
                Cursos
              </Button>
              <Button
                href="/login"
                color="inherit"
                size="large"
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
