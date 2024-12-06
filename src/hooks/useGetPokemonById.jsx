import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useGetPokemonById = () => {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();
    console.log(id)
  
    useEffect(() => {
      fetch("https://pokebuildapi.fr/api/v1/pokemon/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemon(data);
        });
    }, []);
    return {pokemon}
}
export default useGetPokemonById;