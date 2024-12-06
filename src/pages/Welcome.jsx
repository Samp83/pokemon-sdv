import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useGetRandomTeam from '../hooks/useGetRandomTeam';
import useGetAllTypes from '../hooks/useGetAllTypes';

const Welcome = () => {
  const {types} = useGetAllTypes();

  const {team} = useGetRandomTeam();



  return (
      <main>
        <Header />
          <h2><Link to='/all-pokemons'>Pokémons</Link></h2>
          {team.length > 0 ? (
              team.map((pokemon) => (
                  <div key={pokemon.id}>
                      <Link to={`/pokemon/${pokemon.id}`}>
                          {pokemon.name} <img src={pokemon.image} alt={pokemon.name} />
                      </Link>
                  </div>
              ))
          ) : (
              <div>En attente</div>
          )}
          <h2><Link to='/all-types'>Types de Pokémons</Link></h2>
          {types.length > 0 ? (
              types.sort(() => 0.5 - Math.random()).slice(0, 3).map((type) => (
                  <div key={type.id}>
                      <Link to={`/type/${type.name}`}>
                          {type.name} <img src={type.image} alt={type.name} />
                      </Link>
                  </div>
              ))
          ) : (
              <div>En attente</div>
          )}
      </main>
  );
};

export default Welcome;