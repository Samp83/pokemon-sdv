import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PokemonStats from '../components/PokemonStats';
import useGetPokemonById from '../hooks/useGetPokemonById';

const ShowPokemon = () => {
  const { pokemon } = useGetPokemonById();

  if (!pokemon) {
      return <div>En attente</div>;
  }
    
  return (
      <section>
                <main key={pokemon.id}>
                  <Header />
                        <>
                        <PokemonStats key={pokemon.id} pokemon={pokemon} />
                        </>
                </main>
      </section>
  );
}

export default ShowPokemon;
