import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    background: "#DEDEDE",
  },
});

const Banner6 = () => {
  const classes = useStyle();
  return (
    <div>
      <Box py={5} pl={4} className={classes.root}>
        <Typography variant="textPrimary" color="primary">
          Copyright@2020 Todos los derechos Reservados
        </Typography>
      </Box>
    </div>
  );
};

export default Banner6;
