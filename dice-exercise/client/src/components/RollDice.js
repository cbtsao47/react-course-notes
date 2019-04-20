import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "two",
      isRolling: false
    };
  }
  static defaultProps = {
    num: ["one", "two", "three", "four", "five", "six"]
  };
  handleClick = () => {
    const index = Math.floor(Math.random() * 6);
    const index2 = Math.floor(Math.random() * 6);

    this.setState({
      ...this.state,
      die1: this.props.num[index],
      die2: this.props.num[index2],
      isRolling: !this.state.isRolling
    });
    setTimeout(() => {
      this.setState({
        isRolling: false
      });
    }, 800);
  };
  render() {
    const { die1, die2, isRolling } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} isRolling={isRolling} />
          <Die face={die2} isRolling={isRolling} />
        </div>
        <button onClick={this.handleClick} disabled={this.state.isRolling}>
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}
export default RollDice;
