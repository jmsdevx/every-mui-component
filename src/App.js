import React, { Component } from "react";
import "./App.css";
import ListExample from "./components/List/ListExample";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    margin: 0,
    // padding: `0vw ${theme.spacing.unit}vw`,
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
        <Grid
          container
          direction="row"
          wrap="wrap"
          // justify="center"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <Grid
            container
            direction="column"
            // justify="space-around"
            alignItems="stretch"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <Typography
              variant="h4"
              align="center"
              className={classes.subTitle}
            >
              List
            </Typography>
            <ListExample />
          </Grid>
          <Grid
            container
            direction="column"
            // justify="space-around"
            alignItems="stretch"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <Typography
              variant="h4"
              align="center"
              className={classes.subTitle}
            >
              List
            </Typography>
            <ListExample />
          </Grid>
          <Grid
            container
            direction="column"
            // justify="space-around"
            alignItems="stretch"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <Typography
              variant="h4"
              align="center"
              className={classes.subTitle}
            >
              List
            </Typography>
            <ListExample />
          </Grid>
          <Grid
            container
            direction="column"
            // justify="space-around"
            alignItems="stretch"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <Typography
              variant="h4"
              align="center"
              className={classes.subTitle}
            >
              List
            </Typography>
            <ListExample />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
