import React, { Fragment } from "react";

// MaterialUI Staff
// import Typography from "@material-ui/core/Typography";
import { makeStyles, Grid, Typography, Link } from "@material-ui/core";

//Custom Components
import Banner5 from "../Banner5.jsx";
import { Box } from "@material-ui/core";

// FUNCTIONS
const useStyle = makeStyles({
  tips: {
    background: "#FFBCAD",
    borderLeft: "6px solid #C2C2C2",
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "#FF522A",
  },
  tipstext: {
    color: "#CE5A5A",
  },
  titulo: {
    color: "#F9A635",
  },
  texto: {
    color: "#A29078",
  },
  texto2: {
    color: "#EFA15C",
  },
  a: {
    color: "#598383",
    // paddingLeft: 5,
    // paddingRight: 5,
    // marginLeft: 5,
    // marginRight: 5,
    backgroundColor: "#FFFFFF",
    // textDecoration: "none",
  },
  doc: {
    background: "#F1F1F1",
  },
});

// MAIN
const Mediar = (props) => {
  const classes = useStyle(props);

  return (
    <Fragment>
      <Banner5 titulo="Mediación" />
      <Grid container justify="center">
        {/* Advertencias */}
        <Grid item xs={12} md={3}>
          <Grid item>
            <Box
              boxShadow={5}
              // borderColor="red"
              // borderRadius={5}
              // border={2}
              mx={2}
              mt={2}
              p={3}
              className={classes.tips}
            >
              <Typography variant="h6" className={classes.tipstext}>
                La solicitud solo puede puede ser tramitada por un\a abogado\a
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* end Advertencias */}

        {/* Main */}

        <Grid item xs={12} md={9}>
          <Box
            boxShadow={5}
            py={7}
            px={2}
            m={2}
            textAlign="left"
            // className={classes.root}
          >
            <Box pl={2}>
              <Typography variant="h4" className={classes.titulo}>
                Mediación Prejudicial Obligatoria
              </Typography>
            </Box>
            <Box pl={3} pt={4} pr={3}>
              <Typography
                variant="h5"
                align="justify"
                className={classes.texto}
              >
                1) Completar la siguiente solicitud con las firmas de las partes
                y de los abogados intervinientes sea con firma digital o no.
              </Typography>
            </Box>
            <Box mt={2} ml={8} mr={3} align="left">
              <Typography variant="h6">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1Td6F3htFZZv3gvtlnCUDyTMJHN2WXWPh"
                  className={classes.texto2}
                >
                  Formulario de solicitud de mediación
                </Link>
              </Typography>
            </Box>
            <Box pl={3} pt={4} pr={3}>
              <Typography
                variant="h5"
                align="justify"
                className={classes.texto}
              >
                2) Junto al formulario de solicitud adjuntar la siguiente
                documentación:
              </Typography>
            </Box>
            <Box ml={6} mt={3} mr={4} p={3} className={classes.doc}>
              <Typography
                variant="h6"
                align="justify"
                className={classes.texto}
              >
                - Copia de anverso y reverso de la Matricula Profesional del/los
                abogado/s.
              </Typography>
              <Typography
                variant="h6"
                align="justify"
                className={classes.texto}
              >
                - Copia de anverso y reverso de Documento Nacional de Identidad
                (DNI) del/los requirente/s.
              </Typography>
              <Typography
                variant="h6"
                align="justify"
                className={classes.texto}
              >
                - Copia de anverso y reverso de Documento Nacional de Identidad
                (DNI) del/los abogado/s.
              </Typography>
              <Typography
                variant="h6"
                align="justify"
                className={classes.texto}
              >
                - Copia del Poder General o Especial para actuar en el proceso
                de mediación del/los abogado/s previamente juramentado, si el
                solicitante es una Persona Jurídica.
              </Typography>
            </Box>
            <Box pl={3} pt={4} pr={3}>
              <Typography
                variant="h5"
                align="justify"
                className={classes.texto}
              >
                3) Enviar la solicitud y la documentación escaneada a nuestro
                correo electrónico y al del Centro Público de Mediación para su
                procesamiento.
              </Typography>
            </Box>
            <Box pt={4} ml={3}>
              <Typography variant="h6" className={classes.texto2}>
                - info@macovazfarfan.com.ar
              </Typography>
              <Typography variant="h6" className={classes.texto2}>
                - mediacionvirtual@cba.gov.ar
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* end Main */}
      </Grid>
    </Fragment>
  );
};

export default Mediar;
