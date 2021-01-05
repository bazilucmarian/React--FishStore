import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { formatPrice } from "../utils/formatPrice";

// context
import { Context as ordersContext } from "../context/ordersContext";

const useStyles = makeStyles((theme) => ({
  soldout: {
    transform: "rotate(-20deg)",
    width: "150px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Raleway",
  },
  root: {
    marginBottom: "2em",
    padding: "0 0 2em 0",
  },
  media: {
    height: "80%",
    width: "100%",
    paddingLeft: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10em",
      marginBottom: "7em",
    },
  },
}));

const Fish = ({ index, details: { name, image, desc, price, status } }) => {
  const { addToOrder } = useContext(ordersContext);
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery((theme) => theme.breakpoints.up("xs"));

  const isAvailable = status === "available";

  return (
    <Card className={classes.root}>
      <Grid container direction="row">
        <Grid
          item
          md={4}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia className={classes.media} title={name} image={image} />
        </Grid>
        <Grid item md={8} xs={12} container direction="column">
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}{" "}
              <span style={{ fontSize: "1.4rem", fontFamily: "Raleway" }}>
                {formatPrice(price)}
              </span>
            </Typography>
            <Typography gutterBottom variant="h6">
              {desc}
            </Typography>
            <Typography gutterBottom variant="h6">
              Status:{" "}
              <span
                style={{
                  color: status === "available" ? "#4BB543" : "#ff0033",
                }}
              >
                {status}
              </span>
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              disabled={!isAvailable}
              className={!isAvailable ? classes.soldout : undefined}
              onClick={() => addToOrder(index)}
              style={{ margin: "0 auto" }}
            >
              {!isAvailable ? "Sold Out" : "Add to order"}
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Fish;
