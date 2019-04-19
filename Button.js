import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={function() {
          alert("clicked!");
        }}
      >
        Click Me!
      </button>
    );
  }
}

class BrokenButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <>
        <h1>{this.state.clicked ? "Clicked" : "Not clicked"}</h1>
        <button onClick={this.handleClick} />
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <BrokenButton />
      </div>
    );
  }
}
