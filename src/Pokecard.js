import React from 'react';
import './Pokecard.css';

const Pokecard = ({ pokemon }) => {
  const { id, name, type, base_experience } = pokemon;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  );
};

export default Pokecard;





