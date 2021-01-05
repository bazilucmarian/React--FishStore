import React, { useContext } from "react";
import {
  TextField,
  Grid,
  FormControl,
  Button,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Context as FishStoreContext } from "../context/fishesContext";
const EditFishForm = ({ fish, index }) => {
  const { fishes, loading, updateFish, deleteFish } = useContext(
    FishStoreContext
  );

  const handleChange = (e) => {
    e.preventDefault();
    const updatedFish = { ...fish, [e.target.name]: e.target.value };

    updateFish(index, updatedFish);
  };
  if (!fish) {
    return null;
  }
  return (
    <Grid
      container
      style={{
        border: "1px solid #000",
        padding: "2em",
        marginBottom: "1em",
        background: "#fff",
      }}
    >
      <Grid item xs={12} md={12}>
        <TextField
          value={fish.name}
          onChange={handleChange}
          fullWidth={true}
          type="text"
          label="Name"
          name="name"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          value={fish.price}
          onChange={handleChange}
          fullWidth={true}
          type="text"
          label="Price"
          name="price"
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <Select
          value={fish.status}
          onChange={handleChange}
          fullWidth={true}
          type="text"
          name="status"
          label="Status"
        >
          <MenuItem value="available">Fresh</MenuItem>
          <MenuItem value="unavailable">Sold Out</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          placeholder="Your message"
          rows={3}
          value={fish.desc}
          multiline
          fullWidth
          onChange={handleChange}
          name="desc"
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          value={fish.image}
          fullWidth
          onChange={handleChange}
          name="image"
        />
      </Grid>
      <Button
        type="submit"
        onClick={() => deleteFish(index)}
        variant="outlined"
        color="primary"
        style={{ width: "200px", margin: "1em auto" }}
      >
        Delete
      </Button>
    </Grid>
  );
};

export default EditFishForm;
