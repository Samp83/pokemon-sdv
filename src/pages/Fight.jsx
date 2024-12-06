import React, { useState, useEffect } from "react";
import useGetPokemonInputType from "../hooks/useGetPokemonInputType";
import useGetRandomTeam from "../hooks/useGetRandomTeam";
import TeamDisplay from "../components/TeamDisplay";
import WildPokemonDisplay from "../components/WildPokemonDisplay";
import Header from "../components/Header";

const Fight = () => {
    const [type, setType] = useState("");
    const [team, setTeam] = useState([]);
    const [wildPokemon, setWildPokemon] = useState(null);

    const { pokemons, isLoading, error } = useGetPokemonInputType(type);
    const { team: randomTeam } = useGetRandomTeam();

    const handleTypeSubmit = (input) => {
        input.preventDefault();
    };

    const addToTeam = (pokemon) => {
        setTeam((prev) => [...prev, pokemon]);
    };

    useEffect(() => {
        if (team.length > 0) {
            const delay = Math.random() * (7000 - 2000) + 2000; 
            const timeout = setTimeout(() => {
                if (randomTeam && randomTeam.length > 0) {
                    const randomWildPokemon =
                        randomTeam[Math.floor(Math.random() * randomTeam.length)];
                    setWildPokemon(randomWildPokemon);
                    alert(`Un ${randomWildPokemon.name} sauvage est apparu !`);
                }
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [team, randomTeam]);

    useEffect(() => {
        if (wildPokemon) {
            const timeout = setTimeout(() => {
                const result = determineWinner(team[team.length - 1], wildPokemon);
                alert(result === "team" ? "Vous avez gagné !" : "Le Pokémon sauvage a gagné !");
                setWildPokemon(null);
                setTeam([]);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [wildPokemon]);

    const determineWinner = (teamPokemon, wildPokemon) => {
        const teamScore = teamPokemon.stats.HP + teamPokemon.stats.attack;
        const wildScore = wildPokemon.stats.HP + wildPokemon.stats.attack;
        return teamScore >= wildScore ? "team" : "wild";
    };

    return (
        <div>
            <Header />
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

            {isLoading && <p>Chargement...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {team.length === 0 && ( 
            <div>
                <h2>Pokémon disponibles</h2>
                {pokemons &&
                    pokemons.slice(0, 10).map((pokemon) => (
                        <div key={pokemon.id} onClick={() => addToTeam(pokemon)}>
                            {pokemon.name}
                            <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
                        </div>
                    ))}
            </div>
            )}

            <TeamDisplay team={team} />
            <WildPokemonDisplay wildPokemon={wildPokemon} />
        </div>
    );  
};

export default Fight;
