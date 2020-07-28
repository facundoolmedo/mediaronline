import React, { Fragment } from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "#FFFFFF",
  },
  tittle1: {},
  text1: {
    marginLeft: 0,
    marginTop: 30,
  },
});

const Banner3 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box
        className={classes.banner}
        id="banner2"
        m={2}
        p={2}
        textAlign="center"
      >
        <Typography
          variant="h2"
          color="textPrimary"
          className={classes.tittle1}
        >
          Quienes somos?
        </Typography>
        <Typography
          variant="h4"
          color="textSecondary"
          className={classes.text1}
        >
          Centro de Mediacion y Formación en Resolución de Conflictos
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Banner3;
