import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
//import useGetPokemonsByType from '../hooks/useGetSearchPokemonsByType';
import PokemonStats from '../components/PokemonStats';
import useGetPokemonsByType from '../hooks/useGetPokemonsByType';

const PokemonsByType = () => {
  const { pokemons } = useGetPokemonsByType();

  if (!pokemons) {
      return <div>En attente</div>;
  }
    
          return (
            <main key={pokemons.id}>
              <Header />
                {pokemons.map((pokemon) => (
                    <>
                    <PokemonStats key={pokemon.id} pokemon={pokemon} />
                    </>
                ))} 
            </main>
        );
}

export default PokemonsByType;
