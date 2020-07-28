import React, { Fragment } from "react";
import { makeStyles, Typography, Button, Box } from "@material-ui/core";
import Image from "../static/picture7.jpg";

import { Link } from "react-scroll";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
  },
  text1: {
    marginLeft: 0,
  },
  button: {
    marginLeft: 0,
    marginTop: 70,
  },
});

const Banner = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} pb={7} pt={16}>
        <Typography variant="h1" color="secondary" className={classes.text1}>
          Especialistas en negociación
        </Typography>

        <Link
          activeClass="active"
          to="banner2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1700}
        >
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            className={classes.button}
          >
            Comenzar
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
};

export default Banner;
