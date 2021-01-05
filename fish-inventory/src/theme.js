import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    // common: {
    //   //   blue: arcBlue,
    //   //   orange: arcOrange,
    // },
    // primary: {
    //   //   main: arcBlue,
    // },
    // secondary: {
    //   //   main: arcOrange,
    // },
  },
  typography: {
    h1: {
      //   fontFamily: "Raleway",
      //   fontWeight: 700,
      //   fontSize: "2.5rem",
      //   color: arcBlue,
      //   lineHeight: 1.5,
    },
    h3: {
      fontFamily: "MedievalSharp",
      fontSize: "2.5rem",
      //   color: arcBlue,
    },
    h4: {
      //   fontFamily: "Raleway",
      //   fontSize: "1.75rem",
      //   color: arcBlue,
      //   fontWeight: 700,
    },
    h5: {
      fontFamily: "MedievalSharp",
      fontSize: "2rem",
      //   color: arcBlue,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      //   color: arcBlue,
    },
    subtitle1: {
      //   fontSize: "1.25rem",
      //   fontWeight: 300,
      //   color: arcGrey,
    },
    subtitle2: {
      //   color: "white",
      //   fontWeight: 300,
      //   fontSize: "1.25rem",
    },
    body1: {
      //   fontSize: "1.25rem",
      //   color: arcGrey,
      //   fontWeight: 300,
    },
  },
  overrides: {
    MuiListItem: {
      gutters: {
        paddingLeft: "none",
      },
    },
  },
});
