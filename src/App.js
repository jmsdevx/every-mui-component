import React, { Component } from "react";
import "./App.css";
import ListExample from "./components/List/ListExample";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    margin: 0,
    padding: `0vw ${theme.spacing.unit}vw`,
    maxWidth: "100vw"
  },
  subTitle: {
    marginTop: `${theme.spacing.unit * 2}vh`
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Typography variant="h2" align="center" gutterBottom>
          Components
        </Typography>

        <Typography variant="h4" align="center" className={classes.subTitle}>
          List
        </Typography>
        <ListExample />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
