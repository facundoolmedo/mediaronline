import React, { Fragment } from "react";

import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Image from "../static/mapita.jpeg";

//-31.4174763,-64.1957373  - Coordenadas del Centro

const useStyle = makeStyles({
  banner: {
    height: "500px",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contacto: {
    height: "500px",
  },

  cont: {
    backgroundColor: "#969696",
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box textAlign="center" className={classes.banner}></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              boxShadow={10}
              p={7}
              className={classes.contacto}
              textAlign="left"
            >
              <Typography variant="h3" color="primary">
                Contacto
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner;
