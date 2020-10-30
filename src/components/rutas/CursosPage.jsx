import React, { Fragment } from "react";

// MaterialUI Staff
import {
  Box,
  Grid,
  Button,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

//Custom Components
import Banner5 from "../Banner5.jsx";
import Img1 from "../../static/neg.jpeg";

// FUNCTIONS
const useStyle = makeStyles({
  root: {
    marginTop: 30,
  },
  img1: {
    height: 400,
    width: "100%",
    backgroundImage: `url(${Img1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img2: {
    height: 560,
    width: "100%",
    backgroundImage: `url(${Img1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.2,
  },
  tag1: {
    backgroundColor: "#16A085",
  },
  txt1: {
    color: "#FFFFFF",
  },
  txt2: {
    color: "#E49025",
  },
});

// MAIN
const Cursos = () => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Fragment>
      <Banner5 titulo="Formación" />
      <Box py={5}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={11} sm={9}>
            <Box boxShadow={3}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={12} lg={5}>
                  <Box className={classes.img1}></Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Grid container xs={12} justify="center" alignItems="center">
                    {/* <Grid item xs={12}>
                      <Box
                        py={2}
                        px={4}
                        textAlign="left"
                        className={classes.tag1}
                      >
                        <Typography variant="h5" className={classes.txt1}>
                          Duración: 10 hs Homologadas por la DIME
                        </Typography>
                      </Box>
                    </Grid> */}

                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <Grid item xs={11}>
                        <Box pt={7} px={0} textAlign="center">
                          <Typography variant="h3">
                            Procedimiento de Mediación en Córdoba
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={11}>
                        <Box px={3} my={2} textAlign="justify">
                          <Typography variant="body">
                            En este nuevo contexto en el que vivimos atravesados
                            por la tecnología y la conectividad buscamos
                            capacitar sobre la normativa vigente respecto del
                            proceso de mediación brindando recursos teóricos
                            prácticos y así poder intervenir partiendo de los
                            conocimientos adquiridos en cada caso en particular.
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box textAlign="center" pb={2}>
                          <Button
                            size="large"
                            onClick={handleClickOpen("body")}
                          >
                            Ver más
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box py={5}> 
        <Grid container justify="center">
          <Grid item xs={11} sm={10}>
            <Box boxShadow={3}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={12} md={6}>
                  <Box pt={25} pl={6} position="absolute">
                    <Typography variant="h2" color="primary">
                      Próximamente
                    </Typography>
                  </Box>
                  <Box className={classes.img2}></Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pt={10} px={3} textAlign="center">
                    <Typography variant="h2">Negociación Efectiva</Typography>
                  </Box>
                  <Box px={6} my={5} textAlign="justify">
                    <Typography variant="body">
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros. Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.
                    </Typography>
                  </Box>
                  <Box textAlign="center" pb={5}>
                    <Button size="large" onClick={handleClickOpen("body")}>
                      Ver más
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
  </Box>*/}
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box textAlign="left" px={3} pt={3}>
          <Typography variant="h4" className={classes.txt2}>
            Objetivos
          </Typography>
        </Box>
        <Box textAlign="justify" px={3} pb={0}>
          <List>
            <ListItem textAlign="justify">
              <Typography variant="body1">
                Brindar a los profesionales mediadores y abogados un análisis
                del procedimiento de la mediación en Córdoba, generando un
                espacio de aprendizaje y reflexión..
              </Typography>
            </ListItem>
            <ListItem textAlign="justify">
              <Typography variant="body1">
                Analizar formularios propios del proceso y diferenciar su uso
                conforme los distintos ámbitos de inicio de la mediación
                prejudicial obligatoria.
              </Typography>
            </ListItem>
            <ListItem textAlign="justify">
              <Typography variant="body1">
                Reconocer la importancia del rol del abogado y del mediador en
                las Mediaciones Previas Obligatorias y las Extrajudiciales
                Voluntarias.
              </Typography>
            </ListItem>
            <ListItem textAlign="justify">
              <Typography variant="body1">
                Evaluar la conveniencia y selección de la Mediación
                Extrajudicial Voluntaria.
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box textAlign="left" p={3}>
          <Typography variant="h4" className={classes.txt2}>
            Programa
          </Typography>
        </Box>
        <Box px={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" color="primary">
                Módulo 1: Mediación Prejudicial Obligatoria
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box textAlign="justify">
                <List>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Ámbito de Aplicación de las leyes que rigen actualmente el
                      proceso de mediación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Leyes 10.543 y 8858 y sus decretos reglamentarios
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Principios y Garantías del Proceso de Mediación. Rol del
                      Mediador en el CJM, en el CPM y en Centros Privados.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación Prejudicial Obligatoria: Lugar de realización y
                      sus protocolos de actuación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Exclusiones - Mediación prejudicial optativa.
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" color="primary">
                Módulo 2: Mediación en el Centro Judicial de Mediación
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box textAlign="justify">
                <List>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Formulario Solicitud de Mediación. Beneficio de mediar sin
                      gastos. Duración máxima. Prórroga.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      El mediador: equipo, sorteo, aceptación, convocatoria.
                      Excusación. Recusación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Notificaciones, reuniones, comparecencia, constancias.
                      Inasistencia. Multa.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Honorarios: de los mediadores, de los abogados. Expertos.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Acta de cierre. Protocolización. Certificado.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      EL Acuerdo: ejecutabilidad, homologación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Tasa de justicia, aportes Caja y Colegio de abogados.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación intrajudicial
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" color="primary">
                Módulo 3: Mediación bajo la Modalidad Virtual
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box textAlign="justify">
                <List>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación bajo la Modalidad Virtual en Centros Judiciales
                      de Mediación de Ciudad de Córdoba y Río Cuarto
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Acuerdos Reglamentarios N° 1625 y 1643 del Tribunal
                      Superior de Justicia - Poder Judicial de Córdoba
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Fundamentación. Protocolo de actuación. Rol del mediador.
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" color="primary">
                Módulo 4: Mediación en Centros Privados de Mediación
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box textAlign="justify">
                <List>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación en Centros Privados de Mediación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación electrónica. Resolución N° 002/2020 Secretaria
                      de Justicia de la Provincia de Córdoba.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Fundamentación. Protocolo de actuación.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Medios Tecnológicos: Informe Técnico de Plataformas DIME.
                    </Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">Rol del mediador.</Typography>
                  </ListItem>
                  <ListItem textAlign="justify">
                    <Typography variant="body">
                      Mediación Extrajudicial Voluntaria: procedencia, efectos,
                      homologación.
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box mb={3}></Box>
      </Dialog>
    </Fragment>
  );
};

export default Cursos;

/* <DialogTitle id="scroll-dialog-title">Temario:</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent> */
