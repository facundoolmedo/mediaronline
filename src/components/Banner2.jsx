import React, { Fragment } from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "#DEDEDE",
  },
  tittle1: {
    marginLeft: 0,
    paddingTop: 0,
  },
  text1: {
    marginLeft: 0,
    marginTop: 0,
  },
});

const Banner2 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} id="banner2" textAlign="center" py={4}>
        <Typography
          variant="h4"
          color="textSecondary"
          className={classes.text1}
        >
          Negociación, Mediación y Formación en Resolución de Conflictos
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner2;
