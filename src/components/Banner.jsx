import React, { Fragment } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import Image from "../static/picture3.jpg";

import { Link } from "react-scroll";

const useStyle = makeStyles({
  banner: {
    height: 680,
    maxWidth: "100%",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text1: {
    marginLeft: 60,
    paddingTop: 240,
  },
  button: {
    marginLeft: 70,
    marginTop: 30,
  },
});

const Banner = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <div className={classes.banner}>
        <Typography variant="h1" color="secondary" className={classes.text1}>
          Bienvenido.
        </Typography>

        <Link
          activeClass="active"
          to="banner2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1700}
        >
          <Button
            variant="contained"
            size="large"
            color="default"
            className={classes.button}
          >
            Comenzar
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Banner;
