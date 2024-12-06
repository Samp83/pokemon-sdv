import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import useGetPokemonBySearch from "../hooks/useGetPokemonBySearch";
import { Link } from "react-router-dom";


const PokemonSearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { pokemon, loading } = useGetPokemonBySearch(query);

    if (loading) {
        return <main>En attente</main>;
    }

    if (!pokemon &&  !loading) {
        return (
            <>
                <Header />
                <main>Aucun résultat</main>
            </>
        );
    }

    return (
        <>
            <Header />
            <h1>{query}</h1>
            <article key={pokemon.id}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} />
                <br />
                <Link to={`/pokemon/${pokemon.id}`}>Voir le Pokémon</Link>
            </article>
        </>
    );
};

export default PokemonSearchResults;
