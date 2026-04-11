



import React, { useState } from 'react';

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  const myPokemon = myPokeSelection[0];
  const pcPokemon = pcPokeSelection[0];

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);

  const myMoves = myPokemon?.moves?.slice(0, 4) || [];

  return (
    <div className="w-[440px] h-[250px] border-y-4 border-solid bg-white flex flex-col overflow-hidden">
      <div className="flex flex-col items-center justify-center p-2">
        <h1 className='text-xl font-black uppercase tracking-tighter mb-2'>
          Pokemon Battle
        </h1>
        
        <div className='flex items-center justify-between w-full px-4'>
          <div className="flex flex-col items-center">
            <img src={myPokemon?.sprites?.front_default} alt={myPokemon?.name} className="w-20 h-20" />
            <p className='text-sm font-black uppercase'>{myPokemon?.name}</p>
            <p className='text-[10px] font-mono font-bold text-green-600'>HP: {myHP}/100</p>
          </div>

          <h2 className='font-black text-xl italic text-zinc-300'>VS</h2>

          <div className="flex flex-col items-center">
            <img src={pcPokemon?.sprites?.front_default} alt={pcPokemon?.name} className="w-20 h-20" />
            <p className='text-sm font-black uppercase'>{pcPokemon?.name}</p>
            <p className='text-[10px] font-mono font-bold text-red-600'>HP: {pcHP}/100</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 w-full mt-2 px-2">
          {myMoves.map((m, idx) => (
            <div 
              key={idx} 
              className="flex justify-between items-center bg-zinc-100 border border-zinc-300 px-2 py-1 rounded shadow-sm"
            >
              <span className="text-[9px] font-bold uppercase truncate mr-1">
                {m.move.name}
              </span>
              <span className="bg-zinc-800 text-white text-[9px] px-1 rounded font-mono">
                {m.attack}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
