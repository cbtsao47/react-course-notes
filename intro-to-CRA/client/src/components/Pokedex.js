import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";
class Pokedex extends Component {
  render() {
    const { isWinner, exp } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total EXP : {exp}</h4>
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
