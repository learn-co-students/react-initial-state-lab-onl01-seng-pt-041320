import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    const counter = this.state.secondsLeft;

    if (counter == 0) {
      return <div>Boom!</div>;
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
    }
  }
}
