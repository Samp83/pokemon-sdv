import { useState, useEffect } from "react";

const useGetPokemonInputType = (inputType) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!inputType) return;

        const fetchPokemons = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://pokebuildapi.fr/api/v1/pokemon/type/${inputType}`
                );
                if (!response.ok) {
                    throw new Error(`Type "${inputType}" introuvable.`);
                }
                const data = await response.json();
                setPokemons(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, [inputType]);

    return { pokemons, isLoading, error };
};

export default useGetPokemonInputType;
