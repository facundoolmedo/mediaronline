import React, { Fragment } from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";
import Image from "../static/picture20.jpeg";
// import { Link } from "react-scroll";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#266A64",
    textAlign: "center",
  },
  titulo: {
    width: "auto",
    margin: 20,
    backgroundColor: "rgba(3, 3, 3, 0.4)",
    // backgroundColor:"#333333",
    maxWidth: 600,
    padding: 35,
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box
        className={classes.banner}
        pb={12}
        pt={25}
        px={5}
        display="flex"
        justifyContent="flex-end"
      >
        <Box className={classes.titulo}>
          <Typography variant="h4" color="secondary">
            {props.titulo}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Banner;
