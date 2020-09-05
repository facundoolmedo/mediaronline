import React, { Fragment } from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";
import Image from "../static/picture20.jpeg";
// import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    width: "100%",
    display: "flex",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#266A64",
    textAlign: "center",
  },
  titulo: {
    width: "auto",
    backgroundColor: "rgba(3, 3, 3, 0.5)",
    // backgroundColor:"#333333",
    maxWidth: 600,
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box
        className={classes.banner}
        pb={13}
        pt={26}
        // px={5}
        display="flex"
        justifyContent="flex-start"
      >
        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
          <Box className={classes.titulo} py={7} mx={5} px={2}>
            <Typography variant="h4" color="secondary">
              {props.titulo}
            </Typography>
          </Box>
        </ScrollAnimation>
      </Box>
    </Fragment>
  );
};

export default Banner;
