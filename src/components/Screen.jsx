


export default function Screen({ pokemones }) {
    return (
        <div>
            <div className="w-[450px] h-[180px] border-t-4 border-b-4 border-solid">
                {pokemones?.map((pokemon) => (
                    <img src={pokemon?.sprites?.front_default} className="w-40 h-40" />
                ))}
            </div>

        </div>
    )
}