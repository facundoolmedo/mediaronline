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
    background: "#FFC9A2",
    borderLeft: "6px solid #E58037",
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "#FF522A",
  },
  // tips: {
  //   background: "#B5F1D9",
  //   borderLeft: "6px solid #679F89",
  //   // borderStyle: "solid",
  //   // borderWidth: 2,
  //   // borderColor: "#FF522A",
  // },
  aclaracion: {
    background: "#FFFBF3",
    padding: 20,
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "#FF522A",
  },
  tipstext: {
    // color: "#679F89",
    color: "#E58037",
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
        <Grid item xs={12}>
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
              <Typography
                variant="h6"
                className={classes.tipstext}
                align="left"
              >
                La solicitud solo puede puede ser tramitada por un profesional
                abogado
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* end Advertencias */}

        {/* Main */}

        <Grid item xs={12}>
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
                  href="https://drive.google.com/uc?export=download&id=123rh-84ualAq6RU55-bjc-JFEkeMiWrV"
                  className={classes.texto2}
                >
                  Descargar Formulario de Solicitud de Mediación
                </Link>
              </Typography>
            </Box>
            <Box
              mt={2}
              ml={8}
              mr={3}
              align="left"
              className={classes.aclaracion}
            >
              <Typography
                variant="h6"
                align="justify"
                className={classes.texto}
              >
                * Si hay más de un requirente o requerido se deberá adicionar el
                anexo para participantes adicionales
              </Typography>
              <Typography variant="h6">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1P78eUC_VfLNirodzBOgu88YexVjRfsDU"
                  className={classes.texto2}
                >
                  Descargar Anexo Participantes Adicionales
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
            <Box pt={4} ml={5}>
              <Typography variant="h6" className={classes.texto2}>
                macovazfarfan@gmail.com
              </Typography>
              <Typography variant="h6" className={classes.texto2}>
                mediacionvirtual@cba.gov.ar
              </Typography>
            </Box>
            <Box pl={3} pt={4} pr={3}>
              <Typography
                variant="h5"
                align="justify"
                className={classes.texto}
              >
                4) Macovaz&Farfan diligenciará las notificaciones pertinentes a
                las partes y terceros citados, con día y hora de audiencia
                indicando la plataforma electrónica a utilizar. Las
                notificaciones serán diligenciadas por medio de la Oficina de
                Notificadores y Ujieres del Poder Judicial si los domicilios
                correspondireren a la ciudad de Córdoba. En caso de que los
                domicilios estuvieran fuera de la ciudad de Córdoba se
                realizarán por correo siendo los costos de notificación a cargo
                del requirente.
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* end Main */}
        <Grid xs={12}>
          <Box
            boxShadow={5}
            // borderColor="red"
            // borderRadius={5}
            // border={2}
            mx={2}
            p={3}
            className={classes.tips}
          >
            <Typography variant="h6" className={classes.tipstext} align="left">
              El requirente deberá aportar todos los datos necesarios a fin de
              una notificación eficaz (Correo electrónico y Números de
              Teléfonos).
            </Typography>
          </Box>
        </Grid>
        {/* Main */}

        <Grid item xs={12}>
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
                Mediación Extrajudicial Voluntaria
              </Typography>
            </Box>
            <Box pl={3} pt={4} pr={3}>
              <Typography
                variant="h5"
                align="justify"
                className={classes.texto}
              >
                Para todos aquellos requerimientos de una o más personas
                involucradas en un conflicto donde la mediación sea el proceso
                más adecuado y oportuno en tiempo y lugar facilitando el diálogo
                en busca de una solución satisfactoria para ambas partes.
              </Typography>
            </Box>
            <Box pt={4} ml={4}>
              <Typography variant="h6" className={classes.texto2}>
                Contactarse con nuestro Centro
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Mediar;
