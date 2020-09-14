import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

// import ScrollAnimation from "react-animate-on-scroll";

import Banner from "../Banner.jsx";
import Banner2 from "../Banner2.jsx";
import Banner3 from "../Banner3.jsx";
import Banner4 from "../Banner4.jsx";
import Banner6 from "../Banner6.jsx";

import { Mision } from "../Mision.jsx";

const useStyle = makeStyles({
  cont: {
    padding: 0,
    // background: "#837B72",
    background: "#393835",
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.cont}>
        <Banner titulo="Centro de Mediación y Formación en Resolución de Conflictos" />

        {/* <ScrollAnimation animateIn="bounceIn">
         <Banner2 />
        </ScrollAnimation> */}
        <Banner2 />
        <section id="mision">
          <Mision />
        </section>

        <section id="equipo">
          <Banner3 />
        </section>

        <section id="contacto">
          <Banner4 />
        </section>
        <Banner6 />
      </Container>
    </Fragment>
  );
};

export default Home;
