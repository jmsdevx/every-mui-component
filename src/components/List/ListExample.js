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
import NavBar from "./ListNav";

const styles = theme => ({
  root: {
    // margin: `0vw ${theme.spacing.unit * 2.5}vw`,
    padding: `${theme.spacing.unit / 3}vw`,
    maxWidth: "50vw"
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  },
  listItem: {
    display: "flex",
    flexDirection: "column"
  }
});

class ListExample extends Component {
  state = {
    title: "",
    groceries: [
      { id: 1, title: "Milk" },
      { id: 2, title: "Eggs" },
      { id: 3, title: "Cheese" }
    ]
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleCreate = e => {
    e.preventDefault();

    return this.state.title
      ? this.setState(({ groceries, title }) => ({
          groceries: [
            ...groceries,
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
    this.setState(({ groceries }) => ({
      groceries: groceries.filter(e => e.id !== id)
    }));

  render() {
    const { title, groceries } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <NavBar />
        <form className={classes.form} onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Add an item"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>

        <List className={classes.listItem}>
          {groceries.map(({ id, title }) => {
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
