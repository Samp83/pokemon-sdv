import React, { useState, useEffect } from 'react';
import PokemonStats from '../components/PokemonStats';
import Header from '../components/Header';
import useGetAllPokemonsByGeneration from '../hooks/useGetAllPokemonsByGeneration';

const ListAllPokemons = () => {
    const [genNumber, setGenNumber] = useState(1);
    const { pokemons } = useGetAllPokemonsByGeneration(genNumber);
    const [allPokemons, setAllPokemons] = useState([]);
    

    useEffect(() => {
        if (pokemons.length > 0) {
            setAllPokemons(prevPokemons => [...prevPokemons, ...pokemons]);
            setGenNumber(prevGen => prevGen + 1);
        }
    }, [pokemons]);

    if (allPokemons.length > 0) {
        return (
            <main>
              <Header />
                {allPokemons.map((pokemon) => (
                    <>
                    <PokemonStats key={pokemon.id} pokemon={pokemon} />
                    </>
                ))} 
            </main>
        );
    }

    if (allPokemons.length === 0) {
        return <main>En attente</main>;
    }
};  

export default ListAllPokemons;