import React from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class PokemonList extends React.Component {
  render() {
    return (
      data.map((pokemonObj) => <Pokemon pokemon={pokemonObj}/>)
    )
  }
}

export default PokemonList;