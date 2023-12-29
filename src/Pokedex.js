import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex"> {}
      {pokemon.map(pokeData => (
        <Pokecard key={pokeData.id} pokemon={pokeData} />
      ))}
    </div>
  );
};

Pokedex.defaultProps = {
  pokemon: [
  ]
};

export default Pokedex;
