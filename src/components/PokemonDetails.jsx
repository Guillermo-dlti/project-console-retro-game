import React from 'react';

const PokemonDetails = ({ actual = [], ba }) => {
    if (actual.length === 0) return null;

    const { name, sprites, moves, id } = actual[0];

    const imgFront = sprites.front_default;
    const imgBack = sprites.back_default;
    const topMoves = moves.slice(0, 4);

    return (
        ba && (

            <div className="bg-white border-[6px] border-zinc-900 rounded-3xl p-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] w-full">
                <div className="flex justify-between items-end mb-4 border-b-2 border-zinc-100 pb-2">
                    <h2 className="text-4xl font-black uppercase italic tracking-tighter text-zinc-800">
                        {name}
                    </h2>
                    <span className="text-xl font-bold text-zinc-300 font-mono">#0{id}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-around bg-zinc-900 rounded-2xl p-2 border-4 border-zinc-200 shadow-inner">
                        <img src={imgFront} alt="frontal" className="w-24 h-24 pixelated" />
                        <div className="h-12 w-[2px] bg-zinc-700"></div>
                        <img src={imgBack} alt="trasera" className="w-24 h-24 pixelated" />
                    </div>

                    <div className="space-y-3">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[3px]">
                            Data_Archive / Moves
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                            {topMoves.map((m, i) => (
                                <div
                                    key={i}
                                    className="group flex justify-between items-center bg-zinc-50 hover:bg-zinc-800 hover:text-white transition-colors duration-200 p-2 rounded-lg border border-zinc-200"
                                >
                                    <span className="text-xs font-black uppercase ml-2">{m.move.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] font-bold text-zinc-400 group-hover:text-zinc-500">PWR</span>
                                        <span className="bg-zinc-900 text-white group-hover:bg-yellow-400 group-hover:text-black px-2 py-1 rounded text-xs font-mono">
                                            {m.attack}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default PokemonDetails;