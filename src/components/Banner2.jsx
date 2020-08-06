import React, { Fragment } from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    width: "auto",
    backgroundColor: "#98D9D7",
  },
  tittle1: {},
  text1: {},
});

const Banner2 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box
        className={classes.banner}
        id="banner2"
        textAlign="center"
        display="flex"
        justifyContent="center"
        position="relative"
        top={-40}
        mx={10}
        py={10}
        boxShadow={20}
      >
        <Typography
          variant="h4"
          color="textSecondary"
          className={classes.text1}
        >
          Buttons
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner2;
