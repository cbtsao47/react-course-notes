import React, { Component } from "react";
import "./PokeCard.css";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
class PokeCard extends Component {
  static defaultProps = {
    name: "pikachu",
    type: "electric",
    id: 1
  };
  render() {
    const { name, type, id } = this.props;
    return (
      <div className="Pokecard">
        <img src={`${POKE_API}${id}.png`} alt={name} />
        <h2>{name}</h2>
        <h2>{type}</h2>
      </div>
    );
  }
}
export default PokeCard;
