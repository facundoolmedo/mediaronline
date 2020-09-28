import React, { Fragment } from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";

import ScrollAnimation from "react-animate-on-scroll";

import Image from "../static/adriana2.jpeg";
import Image2 from "../static/teresita3.jpeg";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundColor: "#DEDEDE",
  },
  text1: {
    marginLeft: 0,
    marginTop: 30,
  },
  imagen: {
    height: 300,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imagen2: {
    height: 300,
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
      <Box
        className={classes.banner}
        id="banner2"
        textAlign="center"
        py={6}
        px={0}
      >
        <Grid container style={{ flexGrow: 1 }} justify="center" spacing={0}>
          <Grid item xs={12} md={6} lg={5}>
            <ScrollAnimation animateIn="fadeInLeftBig" duration={1}>
              <Box display="flex" justifyContent="center">
                <Box maxWidth="600px" mx={0}>
                  <Box className={classes.imagen2}></Box>
                  <Box
                    boxShadow={5}
                    mx={0}
                    pb={3}
                    pt={3}
                    px={5}
                    position="relative"
                    align="center"
                    top={-20}
                    className={classes.tit}
                  >
                    <Typography
                      variant="h5"
                      color="primary"
                      align="center"
                      gutterBottom
                    >
                      Teresita Susana Macovaz
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      align="center"
                      paragraph
                    >
                      Mediadora, Abogada, Árbitro y Formadora
                    </Typography>
                    <Box maxWidth="400px">
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        align="center"
                      >
                        Desde 1996 me dedico a mediar en los ámbitos judicial,
                        público y privado, y a dictar cursos para la formación
                        en mediación y en resolución de conflictos.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <ScrollAnimation animateIn="fadeInRightBig" duration={1}>
              <Box display="flex" justifyContent="center">
                <Box maxWidth="600px" mx={0}>
                  <Box className={classes.imagen}></Box>
                  <Box
                    boxShadow={5}
                    mx={0}
                    pb={3}
                    pt={3}
                    px={5}
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
                      Nilda Adriana Farfan
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      align="center"
                      paragraph
                    >
                      Mediadora y Abogada
                    </Typography>
                    <Box maxWidth="400px">
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
                  </Box>
                </Box>
              </Box>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner3;
