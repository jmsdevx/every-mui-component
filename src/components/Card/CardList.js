import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Person from "./Person";
import { data } from "./data";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      input: ""
    };
  }

  search = value => {
    this.setState({ input: value });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        {this.state.data ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search By Name..."
              margin="normal"
              value={this.state.input}
              onChange={e => this.search(e.target.value)}
            />
            <Grid container spacing={12} style={{ padding: 12 }}>
              {this.state.data
                .filter(
                  e =>
                    e.name.toLowerCase().includes(input) ||
                    e.name.toUpperCase().includes(input)
                )
                .map(e => (
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Person
                      name={e.name}
                      age={e.age}
                      job={e.job}
                      bio={e.bio}
                      url={e.url}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}
export default CardList;
