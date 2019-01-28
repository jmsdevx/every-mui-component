import React, { Component } from "react";
import NavBar from "./CardNav";
import CardList from "./CardList";

class Card extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CardList />
      </div>
    );
  }
}
export default Card;
