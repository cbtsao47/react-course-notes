import React, { Component } from "react";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: []
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
      console.log("end of deck");
    }
    // set state using the new card info
  }
  render() {
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card!</button>
      </div>
    );
  }
}
export default Deck;
