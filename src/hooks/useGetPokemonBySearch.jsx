import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const useGetPokemonBySearch = (query = null) => {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setPokemon(null); // Vider state pokemon (il ne se vidait pas et restait affiché avant)

        let url = "https://pokebuildapi.fr/api/v1/pokemon/";
        if (query) {
            url += query;
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No Pokémon found");
                }
                return response.json();
            })
            .then((data) => {
                setPokemon(data);
            })
            .catch(() => {
                setPokemon(null); // Vider state pokemon après échec de fetch
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [query]);

    return { pokemon, isLoading };
};

export default useGetPokemonBySearch;
