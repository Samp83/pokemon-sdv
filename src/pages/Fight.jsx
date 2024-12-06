import React, { useState, useEffect } from "react";
import  useGetPokemonsByType  from "../hooks/useGetPokemonsByType";
import  useGetRandomTeam  from "../hooks/useGetRandomTeam";
import TeamDisplay from "../components/TeamDisplay";
import WildPokemonDisplay from "../components/WildPokemonDisplay";

const Fight = () => {
    const [type, setType] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [team, setTeam] = useState([]);
    const [wildPokemon, setWildPokemon] = useState(null);

    const { getPokemonsByType } = useGetPokemonsByType();
    const { getRandomTeam } = useGetRandomTeam();

    const handleTypeSubmit = async (e) => {
        e.preventDefault();
        const fetchedPokemons = await getPokemonsByType(type);
        setPokemons(fetchedPokemons.slice(0, 10)); // Affiche 10 Pokémon au hasard
    };

    const addToTeam = (pokemon) => {
        setTeam((prev) => [...prev, pokemon]);
    };

    useEffect(() => {
        if (team.length > 0) {
            const delay = Math.random() * (10000 - 3000) + 3000; // Entre 3 et 10 secondes
            const timeout = setTimeout(async () => {
                const randomTeam = await getRandomTeam(); // Récupère une équipe de 6 Pokémon
                const randomPokemon = randomTeam[Math.floor(Math.random() * randomTeam.length)]; // Sélectionne un Pokémon au hasard
                setWildPokemon(randomPokemon);
                alert(`Un ${randomPokemon.name} sauvage est apparu !`);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [team]);

    useEffect(() => {
        if (wildPokemon) {
            const timeout = setTimeout(() => {
                const result = determineWinner(team[team.length - 1], wildPokemon);
                alert(result === "team" ? "Vous avez gagné !" : "Le Pokémon sauvage a gagné !");
                setWildPokemon(null); // Réinitialise le Pokémon sauvage
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [wildPokemon]);

    const determineWinner = (teamPokemon, wildPokemon) => {
        const teamScore = teamPokemon.stats.hp + teamPokemon.stats.attack;
        const wildScore = wildPokemon.stats.hp + wildPokemon.stats.attack;
        return teamScore >= wildScore ? "team" : "wild";
    };

    return (
        <div>
            <h1>Combat Pokémon</h1>
            <form onSubmit={handleTypeSubmit}>
                <input
                    type="text"
                    placeholder="Entrez un type de Pokémon"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <button type="submit">Valider</button>
            </form>

            <div>
                <h2>Pokémon disponibles</h2>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} onClick={() => addToTeam(pokemon)}>
                        {pokemon.name}
                    </div>
                ))}
            </div>

            <TeamDisplay team={team} />
            <WildPokemonDisplay wildPokemon={wildPokemon} />
        </div>
    );
};

export default Fight;
