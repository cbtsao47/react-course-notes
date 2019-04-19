import React, { Component } from "react";
import "./PokeCard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let numGen = number => (number <= 999 ? `00${number}`.slice(-3) : number);
class PokeCard extends Component {
  static defaultProps = {
    name: "pikachu",
    type: "electric",
    id: 1
  };
  render() {
    const { name, type, id, exp } = this.props;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={`${POKE_API}${numGen(id)}.png`} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}
export default PokeCard;
