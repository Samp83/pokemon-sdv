import Header from "../components/Header";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import useGetPokemonByTypes from "../hooks/useGetSearchPokemonByTypes";
const TypeSearchResults = () =>{
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { pokemons, loading } = useGetPokemonByTypes(query);
    
  
    if (loading) {
        return <main>En attente</main>;
    };

    if (!loading && !pokemons) {
        return (
            <> 
            <Header />
            <main>Aucun résultat</main>;
            </>
            );
    }
    return (
        <>
        <Header />
            <h1>Pokemons de type {query}</h1>
            {pokemons.map((pokemon) => (
            <article key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <br></br> 
            {/* <Link to={"/Recipe/"+recipe.idMeal}>Voir la recette</Link> */}
        </article>
          ))}
        </>
    )
}

export default TypeSearchResults;