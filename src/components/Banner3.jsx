import React, { Fragment } from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";

import ScrollAnimation from "react-animate-on-scroll";

import Image from "../static/adriana.jpeg";
import Image2 from "../static/teresita.jpeg";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "#DEDEDE",
  },
  tittle1: {},
  text1: {
    marginLeft: 0,
    marginTop: 30,
  },
  imagen: {
    height: 350,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imagen2: {
    height: 350,
    backgroundImage: `url(${Image2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  tit: {
    background: "#FFFFFF",
  },
});

const Banner3 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} id="banner2" p={0} textAlign="center">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <ScrollAnimation animateIn="fadeInLeftBig" duration={1}>
                <Box className={classes.imagen2}></Box>
                <Box
                  boxShadow={5}
                  mx={2}
                  pb={3}
                  pt={3}
                  px={7}
                  position="relative"
                  top={-20}
                  className={classes.tit}
                >
                  <Typography variant="h5" color="primary" gutterBottom>
                    Teresita Macovaz
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Mediadora, Abogada, Árbitro y Formadora
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    align="center"
                  >
                    Desde 1996 me dedico a mediar en los ámbitos judicial,
                    público y privado, y a dictar cursos para la formación en
                    mediación y en resolución de conflictos.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <ScrollAnimation animateIn="fadeInRightBig" duration={1}>
                <Box py={1} className={classes.imagen}></Box>
                <Box
                  boxShadow={5}
                  mx={2}
                  pb={3}
                  pt={3}
                  px={7}
                  position="relative"
                  top={-20}
                  className={classes.tit}
                >
                  <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    gutterBottom
                  >
                    Adriana Farfan
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    align="center"
                    paragraph
                  >
                    Mediadora y Abogada
                  </Typography>

                  <Typography
                    variant="body1"
                    color="textPrimary"
                    align="center"
                  >
                    Me desempeño como mediadora en el Centro Judicial de
                    Mediación, con especialidad en mediaciones civiles y
                    familiares y formación en Mediación Escolar.
                  </Typography>
                </Box>
              </ScrollAnimation>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner3;
