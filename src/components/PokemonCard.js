
export default function PokemonCard({name, sprites, types}) {

    return (
        <div className={`card ${types[0].type.name}`}>
            <h3>{name}</h3>
            <img src={sprites["front_default"]} alt={name} />
        </div>
    )

}