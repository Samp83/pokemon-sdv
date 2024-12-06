import React from "react";

const TeamDisplay = ({ team }) => {
    return (
        <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
            <h2>Votre équipe</h2>
            <div>
                {team.map((pokemon) => (
                    <div key={pokemon.id}>
                        <p>{pokemon.name}</p>
                        <p>HP: {pokemon.stats.hp}</p>
                        <p>Attaque: {pokemon.stats.attack}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamDisplay;
