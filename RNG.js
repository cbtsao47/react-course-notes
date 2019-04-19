import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.num !== 7) {
      const rng = Math.floor(Math.random() * 10) + 1;
      this.setState({ num: rng });
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.num === 7 && "You Win"}</h1>
        <h1>Number is {this.state.num}</h1>
        <button onClick={this.handleClick}>RNG number</button>
      </>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    );
  }
}
