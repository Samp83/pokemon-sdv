import { useEffect, useState } from 'react';
const useGetAllPokemonsByGeneration = (genNumber) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      fetch('https://pokebuildapi.fr/api/v1/pokemon/generation/' + genNumber)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemons(data);
        });
    }, [genNumber]);
    return { pokemons};
}
export default useGetAllPokemonsByGeneration;