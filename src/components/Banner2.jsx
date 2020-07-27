import React, { Fragment } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  banner: {
    height: 500,
    maxWidth: "100%",
    backgroundColor: "#FFFFFF",
  },
  tittle1: {
    marginLeft: 60,
    paddingTop: 50,
  },
  text1: {
    marginLeft: 70,
    marginTop: 30,
  },
});

const Banner2 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <div className={classes.banner} id="banner2">
        <Typography
          variant="h3"
          color="textPrimary"
          className={classes.tittle1}
        >
          Quienes somos?
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.text1}
        >
          de Mediacion y Formación de mediadores en Córdoba.
        </Typography>
      </div>
    </Fragment>
  );
};

export default Banner2;
