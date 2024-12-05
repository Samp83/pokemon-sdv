import { useEffect, useState } from 'react';
const useGetAllPokemons = () => {
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
    return { pokemons };
}
export default useGetAllPokemons;