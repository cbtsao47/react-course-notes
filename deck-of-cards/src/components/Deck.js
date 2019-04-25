import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
      remaining: 52
    };
    this.getCard = this.getCard.bind(this);
  }
  componentDidMount() {
    axios
      .get(`${API_BASE_URL}/new/shuffle/`)
      .then(res => this.setState({ deck: res.data }))
      .catch(err => console.log({ err }));
  }

  async getCard() {
    // make request using deck id
    let deck_id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("There are no cards remaining!");
      }
      let card = cardRes.data.cards[0];
      this.setState(prevState => ({
        remaining: cardRes.data.remaining,
        drawn: [
          ...prevState.drawn,

          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      return { err };
    }
    // set state using the new card info
  }
  render() {
    const cards = this.state.drawn.map(c => (
      <Card name={c.name} image={c.image} key={c.id} />
    ));
    const remainingCards = !this.state.remaining
      ? "There are no more cards!"
      : `There are ${this.state.remaining} cards remaining`;
    return (
      <div className="Deck">
        <h1 className="Deck-title">♠ Card Dealer ♠</h1>
        <h2 className="Deck-title subtitle">
          A little card game made with React
        </h2>
        <button
          className="Deck-btn"
          onClick={this.getCard}
          disabled={!this.state.remaining}
        >
          Get Card!
        </button>
        <h2 className="Deck-title subtitle ">{remainingCards}</h2>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}
export default Deck;
