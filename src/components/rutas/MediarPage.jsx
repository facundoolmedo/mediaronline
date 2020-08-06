import React, { Fragment } from "react";

// MaterialUI Staff
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core";

//Custom Components
import Banner5 from "../Banner5.jsx";

// FUNCTIONS
// const useStyle = makeStyles({
//   root: {
//     marginTop: 30,
//   },
// });

// MAIN
const Mediar = (props) => {
  // const classes = useStyle(props);

  return (
    <Fragment>
      <Banner5 titulo="Mediación" />
    </Fragment>
  );
};

export default Mediar;
