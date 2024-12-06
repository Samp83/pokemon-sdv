import React, { useState, useEffect } from 'react';
import PokemonStats from '../components/PokemonStats';
import Header from '../components/Header';
import useGetAllPokemonsByGeneration from '../hooks/useGetAllPokemonsByGeneration';

const ListAllPokemons = () => {
    const [genNumber, setGenNumber] = useState(1);
    const { pokemons } = useGetAllPokemonsByGeneration(genNumber);
    const [allPokemons, setAllPokemons] = useState([]);
    const [genHistory, setGenHistory] = useState([]); 

    useEffect(() => {
        if (pokemons.length > 0) {
            if (genNumber > 1) { 
                setAllPokemons(prevPokemons => [...prevPokemons, { generation: genNumber, pokemons }]);
                setGenHistory(prevGenHistory => [...prevGenHistory, genNumber]); 
            }
            const timer = setTimeout(() => {
                setGenNumber(genNumber => genNumber + 1);
            }, 100); 
            return () => clearTimeout(timer); 
        }
    }, [pokemons]);  

    if (allPokemons.length > 0) {
        return (
            <main>
              <Header />
                {allPokemons.map((genGroup) => (
                    <div key={genGroup.generation-1}>
                        <h2>Generation {genGroup.generation-1}</h2>
                        {genGroup.pokemons.map((pokemon) => (
                            <PokemonStats key={pokemon.id} pokemon={pokemon} />
                        ))}
                    </div>
                ))} 
            </main>
        );
    }

    if (allPokemons.length === 0) {
        return <main>En attente</main>;
    }
};  

export default ListAllPokemons;