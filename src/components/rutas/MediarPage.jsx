import React, { Fragment } from "react";

// MaterialUI Staff
// import Typography from "@material-ui/core/Typography";
import { makeStyles, Grid, Typography } from "@material-ui/core";

//Custom Components
import Banner5 from "../Banner5.jsx";
import { Box } from "@material-ui/core";

// FUNCTIONS
const useStyle = makeStyles({
  tips: {
    background: "#FFBCAD",
    borderLeft: "6px solid #837B72",
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "#FF522A",
  },
  titulo: {
    color: "#F9A635",
  },
  texto: {
    color: "#A29078",
  },
  a: {
    color: "#5C9AEF",
  },
  p: {
    color: "#EFA15C",
  },
});

// MAIN
const Mediar = (props) => {
  const classes = useStyle(props);

  return (
    <Fragment>
      <Banner5 titulo="Mediación" />
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Box
            boxShadow={5}
            py={7}
            px={7}
            m={2}
            textAlign="left"
            // className={classes.root}
          >
            <Box mb={0}>
              <Typography variant="h4" className={classes.titulo}>
                Mediación Prejudicial Obligatoria
              </Typography>
              <Box pl={3} pt={4} pr={3}>
                <Typography variant="h5" className={classes.texto}>
                  1 Completar el siguiente
                  <a href="/" className={classes.a}>
                    formulario
                  </a>
                  con las firmas de las partes y de los abogados intervinientes
                  sea con firma digital o no.
                </Typography>
              </Box>
              <Box pl={3} pt={4} pr={3}>
                <Typography variant="h5" className={classes.texto}>
                  2 Junto al formulario de solicitud adjuntar la siguiente
                  documentación:
                </Typography>
              </Box>
              <Box pl={7} pt={4} pr={5}>
                <Typography variant="h6" className={classes.texto}>
                  - Copia de anverso y reverso de la Matricula Profesional
                  del/los abogado/s.
                </Typography>
                <Typography variant="h6" className={classes.texto}>
                  - Copia de anverso y reverso de Documento Nacional de
                  Identidad (DNI) del/los requirente/s.
                </Typography>
                <Typography variant="h6" className={classes.texto}>
                  - Copia de anverso y reverso de Documento Nacional de
                  Identidad (DNI) del/los abogado/s.
                </Typography>
                <Typography variant="h6" className={classes.texto}>
                  - Copia del Poder General o Especial para actuar en el proceso
                  de mediación del/los abogado/s previamente juramentado, si el
                  solicitante es una Persona Jurídica.
                </Typography>
              </Box>
              <Box pl={3} pt={4} pr={5}>
                <Typography variant="h5" className={classes.texto}>
                  3 Enviar la solicitud y documentación a nuestro correo
                  electrónico
                  <span className={classes.p}>info@macovazfarfan.com.ar</span> y
                  al del Centro Público de Mediación
                  <span className={classes.p}>mediacionvirtual@cba.gov.ar</span>
                  para su procesamiento.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item>
            <Box
              boxShadow={5}
              // borderColor="red"
              // borderRadius={5}
              // border={2}
              m={2}
              p={3}
              className={classes.tips}
            >
              Holi
            </Box>
          </Grid>

          <Grid item>
            <Box
              boxShadow={5}
              // borderColor="red"
              // borderRadius={5}
              // border={2}
              m={2}
              p={3}
              className={classes.tips}
            >
              Holi
            </Box>
          </Grid>
          <Grid item>
            <Box
              boxShadow={5}
              // borderColor="red"
              // borderRadius={5}
              // border={2}
              m={2}
              p={3}
              className={classes.tips}
            >
              Holi
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Mediar;
