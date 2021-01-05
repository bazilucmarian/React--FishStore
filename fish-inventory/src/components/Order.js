import React, { useContext } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { formatPrice } from "../utils/formatPrice";
import Fishing from "../img/fishing.svg";
import { useTheme } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IoFish } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { Context as fishesContext } from "../context/fishesContext";
import { Context as ordersContext } from "../context/ordersContext";

const Order = () => {
  const theme = useTheme();
  // const matchesXS = useMediaQuery(theme.breakpoints.up("xs"));

  const { state: fishes } = useContext(fishesContext);
  const { state: orderObj, deleteOrderItem } = useContext(ordersContext);

  const orderIds = Object.keys(orderObj);

  const total = orderIds.reduce((acc, key) => {
    const fish = fishes[key];
    const count = orderObj[key];
    const isAvailable = fish && fish.status === "available";
    if (isAvailable) {
      return acc + count * fish.price;
    }
    return acc;
  }, 0);

  const sendDataToServer = () => {
    const listFishes = orderIds.map((key) => {
      if (!fishes[key]) return null;
      const isAvailable = fishes[key].status === "available";
      if (isAvailable) {
        return {
          quantity: orderObj[key],
          name: fishes[key].name,
          price: fishes[key].price,
          status: fishes[key].status,
          total,
        };
      } else {
        return {
          name: fishes[key].name,
          status: fishes[key].status,
          quantity: orderObj[key],
          price: fishes[key].price,
          total,
        };
      }
    });

    let formData = new FormData();
    formData.append("data", JSON.stringify(listFishes));

    axios({
      method: "post",
      url: "/create-pdf",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "Invoice.pdf");
      });
  };

  return (
    <Grid container direction="column" style={{ background: "#fff" }}>
      <Grid item>
        <Typography gutterBottom variant="h3" align="center">
          Order
        </Typography>
      </Grid>
      <Grid
        item
        style={{
          border: orderIds.length > 0 ? "1px solid #000" : undefined,
          margin: "0 1em 0 1em",
        }}
      >
        {orderIds.length === 0 && (
          <Grid container direction="column" alignItems="center">
            <Typography variant="h" align="center">
              Please add an item to order!
            </Typography>
            <img src={Fishing} alt="fish" width="300" height="200" />
          </Grid>
        )}

        {orderIds.map((key) => {
          if (!fishes[key]) return null;
          const isAvailable = fishes[key].status === "available";
          if (isAvailable) {
            return (
              <List key={key}>
                <ListItem
                  style={{
                    borderBottom: "1px solid black",
                    width: "95%",
                    margin: "0 auto",
                  }}
                >
                  <ListItemIcon>
                    <IoFish size="25" color="#89C3CA" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">
                      {orderObj[key]} x {fishes[key].name} ---{" "}
                      {formatPrice(orderObj[key] * fishes[key].price)}
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteOrderItem(key)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            );
          } else {
            return (
              <ListItemText style={{ textAlign: "center" }}>
                Sorry {fishes[key] ? fishes[key].name : "fish"} is no longer
                available.
              </ListItemText>
            );
          }
        })}
        <Grid item style={{ textAlign: "center", marginTop: "1em" }}>
          <Typography variant="h6">
            {orderIds.length > 0 ? "TOTAL:" : undefined}{" "}
            {orderIds.length > 0 ? formatPrice(total) : undefined}
          </Typography>
        </Grid>
        {orderIds.length > 0 && (
          <Grid item container justify="center" style={{ margin: "1.5em 0" }}>
            <Button
              variant="outlined"
              onClick={() => sendDataToServer()}
              style={{
                borderColor: "ff0000",
              }}
            >
              Generate an invoice{" "}
              <FaFilePdf
                style={{
                  fontSize: "30px",
                  marginLeft: "0.5em",
                  color: "ff0000",
                }}
              />
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Order;
