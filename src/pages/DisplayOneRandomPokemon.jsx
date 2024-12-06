import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
//import useGetPokemonsByType from '../hooks/useGetSearchPokemonsByType';
import PokemonStats from '../components/PokemonStats';
import useGetRandomTeam from '../hooks/useGetRandomTeam';

const RandomPokemon = () => {
  const { team } = useGetRandomTeam();
  console.log(team);

  if (!team) {
      return <div>En attente</div>;
  }
    
          return (
            <main >
              <Header />
              <br></br>
                {team.slice(0, 1).map((pokemon) => (
                    <>
                    <PokemonStats key={pokemon.id} pokemon={pokemon} />
                    </>
                ))} 
            </main>
        );
}

export default RandomPokemon;