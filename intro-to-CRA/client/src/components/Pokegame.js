import React, { Component } from "react";
import Pokedex from "./Pokedex";
const randomNum = num => {
  return Math.floor(Math.random() * num);
};
class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while (hand2.length > hand1.length) {
      let index = randomNum(hand2.length);
      hand1.push(hand2[index]);
      hand2.splice(index, 1);
    }
    let hand1Exp = hand1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    let hand2Exp = hand2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    return (
      <>
        <h1 className="Pokegame-text">Poke Game!</h1>
        <Pokedex
          pokemons={hand1}
          totalExp={hand1Exp}
          isWinner={hand1Exp > hand2Exp}
        />
        <Pokedex
          pokemons={hand2}
          totalExp={hand2Exp}
          isWinner={hand2Exp > hand1Exp}
        />
      </>
    );
  }
}
export default Pokegame;
