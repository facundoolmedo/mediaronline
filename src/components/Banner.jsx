import React, { Fragment } from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";
import Image from "../static/picture20.jpeg";
// import { Link } from "react-scroll";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    maxWidth: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#266A64",
    textAlign: "center",
  },
  logo: {
    color:"#ffc107",
  },
  titulo: {
    width:"auto",
    backgroundColor:'rgba(3, 3, 3, 0.5)',
    // backgroundColor:"#333333",
    maxWidth:600,
    padding:30,
    marginLeft:30,
  },
});

const Banner = (props) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box className={classes.banner} pb={20} pt={25} px={5}>
        {/* <Typography variant="h1" color="secondary">
          {props.titulo}</Typography> */}

        <Box className={classes.titulo}>
          <Typography variant="h4" color="secondary" >
            {props.titulo}</Typography>
        </Box>
      </Box> 
      
    </Fragment>
  );
};

export default Banner;
