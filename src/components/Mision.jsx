import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

const useStyle = makeStyles({
  root: {
    background: "#837B72",
  },
});

export const Mision = () => {
  const classes = useStyle();
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" duration={2}>
        <Box
          boxShadow={-10}
          pt={10}
          pb={7}
          mb={5}
          display="flex"
          justifyContent="center"
          className={classes.root}
        >
          <Box width={0.7}>
            <Typography variant="h4" color="secondary" align="center">
              Somos profesionales en la resolución de conflictos solucionar
              conflictos Nos dedicamos a solucionar conflictos Nos dedicamos a
              solucionar conflictos Nos dedicamos a solucionar conflictos.
            </Typography>
          </Box>
        </Box>
      </ScrollAnimation>
    </div>
  );
};
