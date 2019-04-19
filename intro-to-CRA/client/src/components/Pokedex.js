import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";
class Pokedex extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 }
    ]
  };
  render() {
    const { isWinner } = this.props;
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">{isWinner ? "Winner" : "Loser"}</h1>
        <div className="Pokedex-card">
          {this.props.pokemons.map(pokemon => (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
