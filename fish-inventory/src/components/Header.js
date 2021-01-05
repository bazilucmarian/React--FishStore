import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Anchor from "../img/anchor.svg";

const useStyles = makeStyles((theme) => ({
  top: {
    textAlign: "center",

    padding: "2em",
  },
  t1: {
    fontSize: "10.4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
    },

    lineHeight: 0.7,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    justifyContent: "center",
    fontFamily: "Raleway",
  },
  t2: {
    fontSize: "2rem",
    marginTop: "0.5em",
    color: "#f5a623",
  },
  ofThe: {
    display: "flex",
    fontSize: "4rem",
    color: "#f5a623",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${Anchor}) center no-repeat`,
    backgroundSize: "cover",
    fontFamily: "MedievalSharp",
    [theme.breakpoints.down("md")]: {
      height: "80px",
    },
  },
  of: {
    position: "relative",
    // right: "-0.5rem",
    fontSize: "1.5rem",
  },
  the: {
    position: "relative",
    left: "2rem",
    fontSize: "1.5rem",
    marginRight: "1em",
  },
  subtitle: {},
}));

const Header = ({ tagline }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.top}>
      <Typography className={classes.t1}>
        Catch
        <span className={classes.ofThe}>
          <span className={classes.of}>of</span>
          <span className={classes.the}>the</span>
        </span>
        Day
      </Typography>
      <Typography className={classes.t2} variant="h3">
        <span className={classes.subtitle}>{tagline}</span>
      </Typography>
    </Grid>
  );
};

export default Header;
