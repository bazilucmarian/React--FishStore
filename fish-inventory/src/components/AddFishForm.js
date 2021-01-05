import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Button,
} from "@material-ui/core";
import { Context as FishStoreContext } from "../context/fishesContext";

const initialState = {
  name: "",
  price: "",
  status: "",
  desc: "",
  image: "/assets/mussels.jpg",
};

const AddFishForm = () => {
  const { addNewFish } = useContext(FishStoreContext);
  const [newFish, setNewFish] = useState(initialState);
  console.log(newFish);
  return (
    <Grid
      container
      style={{ border: "1px solid #000", padding: "2em", marginBottom: "1em" }}
    >
      <Typography variant="h5" style={{ margin: "0 auto" }}>
        Add Fish
      </Typography>
      <FormControl style={{ width: "100%" }}>
        <Grid item xs={12} md={12}>
          <TextField
            value={newFish.name}
            onChange={(e) => setNewFish({ ...newFish, name: e.target.value })}
            fullWidth={true}
            type="text"
            label="Name"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            value={newFish.price}
            onChange={(e) =>
              setNewFish({ ...newFish, price: Number(e.target.value) })
            }
            fullWidth={true}
            type="text"
            label="Price"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Select
            value={newFish.status}
            onChange={(e) => setNewFish({ ...newFish, status: e.target.value })}
            fullWidth={true}
            type="text"
            label="Status"
          >
            <MenuItem value="available">Fresh</MenuItem>
            <MenuItem value="unavailable">Sold Out</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            rows={3}
            value={newFish.desc}
            multiline
            fullWidth
            onChange={(e) => setNewFish({ ...newFish, desc: e.target.value })}
            name="desc"
            label="Description"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            value={newFish.image}
            fullWidth
            onChange={(e) => setNewFish({ ...newFish, image: e.target.value })}
            name="image"
            label="image"
          />
        </Grid>
        <Button
          type="submit"
          onClick={() => addNewFish(newFish)}
          variant="outlined"
          color="primary"
          style={{ width: "200px", margin: "1em auto" }}
        >
          Create
        </Button>
      </FormControl>
    </Grid>
  );
};

export default AddFishForm;
