
import '../style/TallGrass.css'
import PokemonCard from "./PokemonCard"

export default function TallGrass({wildPokemon}) {

    const renderMons = wildPokemon.length === 3 ? wildPokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>) : null
    
    return (
        <div>
            {renderMons}
        </div>
    )
}