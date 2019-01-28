import React, { Component } from "react";
import "./App.css";
import ListExample from "./components/List/ListExample";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: "2vw",
    padding: "5vw",
    maxWidth: "100vw"
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography variant="h2" align="center" gutterBottom>
          Components
        </Typography>

        <Typography variant="h4" align="left">
          List:
        </Typography>
        <ListExample />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
