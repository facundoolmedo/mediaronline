import React, { Fragment } from "react";

// MaterialUI Staff
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core";

//Custom Components
// import Banner5 from "../Banner5.jsx";
import Banner4 from "../Banner4.jsx";

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
      <Banner4 titulo="Cursos" />
    </Fragment>
  );
};

export default Cursos;
