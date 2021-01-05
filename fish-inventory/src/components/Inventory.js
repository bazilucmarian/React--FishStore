import React, { useContext } from "react";
import { Context as FishStoreContext } from "../context/fishesContext";
import { Grid, Typography } from "@material-ui/core";
import EditFishForm from "./EditFishForm";
import AddFishForm from "./AddFishForm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Inventory = () => {
  const { state: fishes } = useContext(FishStoreContext);
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid item style={{ marginTop: matchesXS ? "2em" : 0 }}>
        <Typography gutterBottom variant="h3" align="center">
          Inventory
        </Typography>
      </Grid>
      <Grid item>
        {Object.keys(fishes).map((key) => {
          return <EditFishForm key={key} index={key} fish={fishes[key]} />;
        })}
        <AddFishForm />
      </Grid>
    </Grid>
  );
};

export default Inventory;
