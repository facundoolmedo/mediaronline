import React, { Fragment } from "react";

import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Image from "../static/mapita.jpeg";

import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

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
    height: "auto",
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
              pb={14}
              boxShadow={10}
              pl={10}
              pt={12}
              display="flex"
              justifyContent="center"
              className={classes.contacto}
            >
              {/* <Box mb={2}>
                <Typography variant="h3" color="secondary">
                  Contacto
                </Typography>
              </Box> */}

              <Box pl={0} pt={4}>
                <Grid container>
                  <Grid item xs={12} sm={2}>
                    <Box pr={3} pt={2} pb={3}>
                      <CallIcon fontSize="large" color="secondary" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="secondary" gutterBottom>
                          +54 9 3518158722
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" color="secondary" gutterBottom>
                          +54 9 3515730156
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Grid container>
                    <Grid item xs={12} sm={2}>
                      <Box pr={3} pt={2}>
                        <EmailIcon fontSize="large" color="secondary" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Grid item xs={12}>
                        <Box pt={2}>
                          <Typography
                            variant="h6"
                            color="secondary"
                            gutterBottom
                          >
                            info@macovazfarfan.com.ar
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={3}>
                  <Grid container>
                    <Grid item xs={12} sm={2}>
                      <Box pr={2} pt={2} pb={3}>
                        <RoomIcon fontSize="large" color="secondary" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="h6" color="secondary">
                            Dirección: Arturo M Bas 319 2C
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h6" color="secondary">
                            Córdoba CP5000
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner;
