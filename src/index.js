import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8e97",
      main: "#f45b69",
      dark: "#bc243f",
      contrastText: "rgb(0,0,0)"
    },
    secondary: {
      light: "#8ef6f6",
      main: "#59c3c3",
      dark: "#189293"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
