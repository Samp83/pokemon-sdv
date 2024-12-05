import React, { useState, useEffect } from 'react';
import PokemonStats from '../components/PokemonStats';
const ListallPokemon = () => {
      const [pokemons, setPokemons] = useState([]);

      useEffect(() => {
        fetch('https://pokebuildapi.fr/api/v1/pokemon/')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setPokemons(data);
          });
      }, []);

      if (pokemons.length === 0) {
        return <main>En attente</main>;
      };
      
      return (
        <main>
          {pokemons.map((pokemon) => (
            <PokemonStats key={pokemon.id} pokemon={pokemon} />
          ))} 
        </main>
      );
};  

export default ListallPokemon;