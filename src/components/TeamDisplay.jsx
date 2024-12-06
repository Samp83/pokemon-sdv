import React from "react";

const TeamDisplay = ({ team }) => {
    return (
        <div style={{ position: "absolute", top: "700px", left: "10px" }}>
            <h2>Votre équipe</h2>
            <div>
                {team.map((pokemon) => (
                    <div key={pokemon.id}>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
                        <p>HP: {pokemon.stats.HP}</p>
                        <p>Attaque: {pokemon.stats.attack}</p>
                        <p>Défense: {pokemon.stats.defense}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamDisplay;
