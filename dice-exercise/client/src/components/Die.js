import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    const { face, isRolling } = this.props;
    return (
      <i className={`fas fa-dice-${face} Die ${isRolling ? "wobble" : null}`} />
    );
  }
}

export default Die;
