import React, { useContext } from "react";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Context as FishStoreContext } from "./context/fishesContext";
import Header from "./components/Header";

import Fish from "./components/Fish";
import Inventory from "./components/Inventory";
import Order from "./components/Order";
const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const { state: fishes } = useContext(FishStoreContext);

  return (
    <ThemeProvider theme={theme}>
      <Header tagline="Fresh Seafood Market" />
      <Grid container style={{ height: "100vh", width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Typography gutterBottom variant="h3" align="center">
            Menu
          </Typography>

          {Object.keys(fishes).map((fish) => {
            console.log(fish);
            return <Fish key={fish} index={fish} details={fishes[fish]} />;
          })}
        </Grid>
        <Grid item xs={12} md={4}>
          <Order />
        </Grid>
        <Grid item xs={12} md={4}>
          <Inventory />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
