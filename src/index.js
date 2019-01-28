import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#2a3449",
      default: "#000000"
    },
    primary: {
      light: "#8ef6f6",
      main: "#59c3c3",
      dark: "#189293",
      contrastText: "rgb(0,0,0)"
    },
    secondary: {
      light: "#ff8e97",
      main: "#f45b69",
      dark: "#bc243f"
    },
    text: {
      primary: "#EBEBEB",
      secondary: "#818ba4",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    divider: {
      divider: "#818ba4"
    },
    spacing: {
      unit: 3
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
