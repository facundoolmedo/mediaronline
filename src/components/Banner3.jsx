import React, { Fragment } from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
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
    height: 400,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imagen2: {
    height: 400,
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
      <Box className={classes.banner} id="banner2" p={2} textAlign="center">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <Box className={classes.imagen2}></Box>
              <Box
                boxShadow={5}
                mx={2}
                pb={10}
                pt={5}
                px={5}
                position="relative"
                top={-20}
                className={classes.tit}
              >
                <Typography variant="h5" color="primary" paragraph>
                  Teresita Macovaz
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Mediadora, Abogada, Árbitro y Formadora
                </Typography>
                <Typography variant="body1" color="textPrimary" align="justify">
                  Desde 1996 me dedico a mediar en los ámbitos judicial, público
                  y privado, y a dictar cursos para la formación en mediación y
                  en resolución de conflictos.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <Box py={1} className={classes.imagen}></Box>
              <Box
                boxShadow={5}
                mx={2}
                pb={10}
                pt={5}
                px={5}
                position="relative"
                top={-20}
                className={classes.tit}
              >
                <Typography variant="h5" color="primary" paragraph>
                  Adriana Farfan
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Mediadora y Abogada
                </Typography>
                <Typography variant="body1" color="textPrimary" align="justify">
                  Me desempeño como mediadora en el Centro Judicial de
                  Mediación, con especialidad en mediaciones civiles y
                  familiares. Formación en Mediación Escolar.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Banner3;
