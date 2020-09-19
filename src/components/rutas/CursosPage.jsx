import { Box, Grid } from "@material-ui/core";
import React, { Fragment } from "react";

// MaterialUI Staff
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core";

//Custom Components
// import Banner5 from "../Banner5.jsx";
import Banner5 from "../Banner5.jsx";

// FUNCTIONS
// const useStyle = makeStyles({
//   root: {
//     marginTop: 30,
//   },
// });

// MAIN
const Cursos = (props) => {
  // const classes = useStyle(props);

  return (
    <Fragment>
      <Banner5 titulo="Formación" />

      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Box boxShadow={3} mt={5} textAlign="center" py={15}>
            Holi
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Cursos;
