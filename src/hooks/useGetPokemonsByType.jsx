import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useGetPokemonsByType = () => {
    const [pokemons, setPokemons] = useState(null);
    const { type } = useParams();
  
    useEffect(() => {
      fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemons(data);
        });
    }, []);
    return {pokemons}
}
export default useGetPokemonsByType;