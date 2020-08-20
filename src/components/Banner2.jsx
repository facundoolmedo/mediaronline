import React, { Fragment } from "react";
import { makeStyles, Box } from "@material-ui/core";
import MediaCard from "./BtnMediar.jsx";

const useStyle = makeStyles({
  banner: {
    height: "auto",
    width: "auto",
    background: "#91E1DC",
  },
});

const Banner2 = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box
        className={classes.banner}
        id="banner2"
        textAlign="center"
        display="flex"
        justifyContent="center"
        position="relative"
        top={-40}
        mx={3}
        boxShadow={10}
      >
        <MediaCard />
      </Box>
    </Fragment>
  );
};

export default Banner2;
