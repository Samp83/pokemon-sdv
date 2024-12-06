import { Link } from "react-router-dom";
const PokemonStats = ({pokemon}) =>{
    return (
        <article>
          <Link to={`/pokemon/${pokemon.id}`}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
          </Link>
          {/*<p>Slug: {pokemon.slug}</p>*/}
          <div>
            <h3>Stats:</h3>
            {Object.entries(pokemon.stats).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))}
          </div>
          <div>
            <h3>Types:</h3>
            {pokemon.apiTypes.map((type, index) => (
              <div key={index}>{type.name}</div>
            ))}
          </div>
          <p>Generation: {pokemon.apiGeneration}</p>
          <div>
            <h3>Resistances:</h3>
            {pokemon.apiResistances.map((resistance, index) => (
              <div key={index}>
                {resistance.name}: {resistance.damage_multiplier}
              </div>
            ))}
          </div>
          <div>
            <h3>Evolutions:</h3>
            {pokemon.apiEvolutions.map((evolution, index) => (
              <div key={index}>{evolution.name}</div>
            ))}
          </div>
          {pokemon.apiPreEvolution && (
            <div>
              <h3>Pre-Evolution:</h3>
              <div>{pokemon.apiPreEvolution.name}</div>
            </div>
          )}
          <div>
            <h3>Resistances with Abilities:</h3>
            {pokemon.apiResistancesWithAbilities.map((resistance, index) => (
              <div key={index}>{resistance.name}</div>
            ))}
          </div>
        </article>
      );
}
export default PokemonStats;