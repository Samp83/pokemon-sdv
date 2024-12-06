import React from "react";

const WildPokemonDisplay = ({ wildPokemon }) => {
    if (!wildPokemon) return null;

    return (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <h2>Pokémon Sauvage</h2>
            <div>
                <p>{wildPokemon.name}</p>
                <img src={wildPokemon.sprite} alt={`${wildPokemon.name} sprite`} />
                <p>HP: {wildPokemon.stats.HP}</p>
                <p>Attaque: {wildPokemon.stats.attack}</p>
            </div>
        </div>
    );
};

export default WildPokemonDisplay;
