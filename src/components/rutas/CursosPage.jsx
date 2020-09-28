import React, { Fragment } from "react";

// MaterialUI Staff
import { Box, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Custom Components
import Banner5 from "../Banner5.jsx";
import Img1 from "../../static/picture5.jpg";

// FUNCTIONS
const useStyle = makeStyles({
  root: {
    marginTop: 30,
  },
  img1: {
    height: 500,
    width: "100%",
    maxWidth: 1000,
    backgroundImage: `url(${Img1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
          <Grid item xs={11} sm={10}>
            <Box boxShadow={3}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={12} md={6}>
                  <Box className={classes.img1}></Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pt={14}>
                    <Typography variant="h2" align="center">
                      Negociacion Efectiva
                    </Typography>
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
      </Box>
      <Box py={5}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={11} sm={10}>
            <Box boxShadow={3}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={12} md={6}>
                  <Box className={classes.img1}></Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box pt={14}>
                    <Typography variant="h2" align="center">
                      Negociacion Internacional
                    </Typography>
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
      </Box>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Temario:</DialogTitle>
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
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Cursos;
