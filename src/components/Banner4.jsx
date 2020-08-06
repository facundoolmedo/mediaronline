import React, { Fragment } from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";
import Image from "../static/picture5.jpg";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#969696",
    textAlign: "center",
  },
  titulo: {
    fontSize: "2rem",
    fontFamily: "arial",
    textAlign: "center",
    color: "#DEDEDE",
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} pb={4} pt={25} px={15}>
        <Typography variant="h2" color="secondary">
          {props.titulo}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner;
