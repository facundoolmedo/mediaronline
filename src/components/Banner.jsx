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
    backdropFilter: "true",
    textAlign: "center",
  },
  bg: {
    backgroundColor: "#000000",
    opacity: 0.6,
  },
  button: {
    marginTop: 40,
    borderWidth: 3,
  },
});

const Banner = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} pb={7} pt={18} px={5}>
        {/* <Box p={2} m={2}> */}
        <Typography variant="h1" color="secondary">
          Especialistas en negociación
        </Typography>
        {/* </Box> */}

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
            color="secondary"
            size="large"
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
