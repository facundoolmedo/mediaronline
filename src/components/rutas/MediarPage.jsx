import React, { Fragment } from "react";

// MaterialUI Staff
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

//Custom Components
import Lista from "../Lista.jsx";
import Oculto from "../Oculto.jsx";

// FUNCTIONS
const useStyle = makeStyles({
  root: {
    marginTop: 30,
  },
});

// MAIN
const Mediar = (props) => {
  const classes = useStyle(props);

  return (
    <Fragment>
      <Typography
        variant="h2"
        color="inherit"
        className={classes.root}
        align="left"
        gutterBottom
      >
        Formulario inicio de mediacion
      </Typography>
      {/* Lista */}
      <Lista />
      <Typography
        variant="h3"
        color="secondary"
        className={classes.root}
        align="left"
        gutterBottom
      >
        Hidden
      </Typography>
      <Oculto />
    </Fragment>
  );
};

export default Mediar;
