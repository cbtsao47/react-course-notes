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
      jokes: JSON.parse(localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(j => j.text)); // map over the loaded jokes for the set
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      let newJoke = res.data.joke;
      if (!this.seenJokes.has(newJoke)) {
        jokes.push({ text: res.data.joke, votes: 0, id: uuid() });
      }
    }
    this.setState(
      prevState => ({ jokes: [...prevState.jokes, ...jokes], loading: false }),
      () => {
        localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
    localStorage.setItem("jokes", JSON.stringify(jokes));
  }
  handleVote(id, change) {
    this.setState(
      prevState => {
        return {
          jokes: prevState.jokes.map(j =>
            j.id === id ? { ...j, votes: j.votes + change } : j
          )
        };
      },
      () => localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
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
          <button className="JokeList-getmore" onClick={this.handleClick}>
            New Joke
          </button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map(j => (
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
