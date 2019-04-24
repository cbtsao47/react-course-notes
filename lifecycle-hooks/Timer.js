import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState(prevState => {
        return { time: new Date() };
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.time.getSeconds()}</div>;
  }
}
