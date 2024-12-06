import { useEffect, useState } from "react";

const useGetPokemonByTypes = (query = null) => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    let url = "https://pokebuildapi.fr/api/v1/pokemon/type/";
    console.log(query)

    if (query) {
      url = "https://pokebuildapi.fr/api/v1/pokemon/type/" + query;
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(pokemons);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return { pokemons, isLoading };
};

export default useGetPokemonByTypes;