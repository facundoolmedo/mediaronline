import React, { Fragment } from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";

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
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Box boxShadow={3} m={5} py={10}>
              Adriana
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box boxShadow={3} m={5} py={10}>
              Teresita
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner3;
