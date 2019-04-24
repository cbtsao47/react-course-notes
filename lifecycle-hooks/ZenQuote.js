import React, { Component } from "react";
import axios from "axios";

class ZenQuote extends Component {
  constructor() {
    super();
    this.state = {
      quote: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/zen")
      .then(response => {
        this.setState({ quote: response.data });
      })
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}
