import React, { Component } from "react";

const Ball = props => {
  return <div className="Ball">{this.props.num}</div>;
};

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState(prevState => {
      return {
        nums: prevState.nums.map(
          n => Math.floor(Math.random() * this.props.maxNum) + 1
        )
      };
    });
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Lottery title="lotto one" maxBalls={4} maxNum={40} />
        <Lottery title="lotto two" maxBalls={6} maxNum={100} />
      </>
    );
  }
}
