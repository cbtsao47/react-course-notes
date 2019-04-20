import React, { Component } from "react";
import Coin from "./Coin";
import Cointracker from "./Cointracker";
export default class Coinflipper extends Component {
  static defaultProps = {
    title: `Let's flip a coin!`
  };
  constructor(props) {
    super(props);
    this.state = {
      isHeads: null,
      totalFlip: 0,
      headCount: 0,
      tailsCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    this.setState(prevState => ({
      ...prevState,
      isHeads: !prevState.isHeads,
      totalFlip: prevState.totalFlip + 1,
      headCount: prevState.isHeads
        ? prevState.headCount + 1
        : prevState.headCount,
      tailsCount: prevState.isHeads
        ? prevState.tailsCount
        : prevState.tailsCount + 1
    }));
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    const { isHeads, totalFlip, headCount, tailsCount } = this.state;
    return (
      <>
        <h1>{this.props.title}</h1>
        <Coin isHeads={isHeads} handleClick={this.handleClick} />
        <Cointracker
          totalFlip={totalFlip}
          headCount={headCount}
          tailsCount={tailsCount}
        />
      </>
    );
  }
}
