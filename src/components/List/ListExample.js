import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
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

class ListExample extends Component {
  state = {
    title: "",
    exercises: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" }
    ]
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleCreate = e => {
    e.preventDefault();

    return this.state.title
      ? this.setState(({ exercises, title }) => ({
          exercises: [
            ...exercises,
            {
              title,
              id: Date.now()
            }
          ],
          title: ""
        }))
      : null;
  };

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(e => e.id !== id)
    }));

  render() {
    const { title, exercises } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <form className={classes.form} onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>

        <List>
          {exercises.map(({ id, title }) => {
            return (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    color="primary"
                    onClick={() => this.handleDelete(id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(ListExample);
