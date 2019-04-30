import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./CheeZJokes.css";
import uuid from "uuid/v4";
class CheeZJokes extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(localStorage.getItem("jokes") || "[]")
    };
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }
  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ text: res.data.joke, votes: 0, id: uuid() });
    }
    this.setState({ jokes: jokes });
    localStorage.setItem("jokes", JSON.stringify(jokes));
  }
  handleVote(id, change) {
    this.setState(prevState => {
      return {
        jokes: prevState.jokes.map(j =>
          j.id === id ? { ...j, votes: j.votes + change } : j
        )
      };
    });
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span>Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt=""
          />
          <button className="JokeList-getmore">New Joke</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke
              key={j.id}
              text={j.text}
              votes={j.votes}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default CheeZJokes;
