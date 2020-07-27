import React, { Fragment } from "react";
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";

const Oculto = (props) => {
  return (
    <Fragment>
      <Typography variant="h6" color="initial">
        Ancho: {props.width}
      </Typography>
      <Hidden xsDown>
        <Button variant="contained" color="primary">
          xs
        </Button>
      </Hidden>
      <Hidden smDown>
        <Button variant="contained" color="primary">
          sm
        </Button>
      </Hidden>
      <Hidden mdDown>
        <Button variant="contained" color="primary">
          md
        </Button>
      </Hidden>
    </Fragment>
  );
};

export default withWidth()(Oculto);
