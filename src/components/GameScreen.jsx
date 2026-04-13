import React, { useState } from 'react';

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  const myPokemon = myPokeSelection[0];
  const pcPokemon = pcPokeSelection[0];

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);
  const [winner, setWinner] = useState(null);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleAttack = (damage) => {
    if (winner) return;

    const newPcHP = Math.max(0, pcHP - damage);
    setPcHP(newPcHP);

    if (newPcHP <= 0) {
      setWinner(myPokemon.name);
      return;
    }

    const pcDamage = getRandomInt(10, 70);
    const newMyHP = Math.max(0, myHP - pcDamage);
    setMyHP(newMyHP);

    if (newMyHP <= 0) {
      setWinner(pcPokemon.name);
    }
  };

  const myMoves = myPokemon?.moves?.slice(0, 4) || [];

  return (
    <div className="w-[440px] h-[250px] border-y-4 border-solid bg-white flex flex-col overflow-hidden relative">
      {winner && (
        <div className="absolute inset-0 bg-black/80 z-10 flex flex-col items-center justify-center text-white">
          <h2 className="text-xl font-bold italic">¡FIN DE LA BATALLA!</h2>
          <h1 className="text-3xl font-black uppercase text-yellow-400">{winner} GANA</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-white text-black px-4 py-1 text-xs font-bold rounded"
          >
            REINTENTAR
          </button>
        </div>
      )}

      <div className="flex flex-col items-center justify-center p-2">
        <h1 className='text-xl font-black uppercase tracking-tighter mb-2 italic'>
          Pokemon Battle
        </h1>
        
        <div className='flex items-center justify-between w-full px-4 mb-2'>
          <div className="flex flex-col items-center">
            <img src={myPokemon?.sprites?.front_default} alt={myPokemon?.name} className="w-20 h-20" />
            <p className='text-sm font-black uppercase'>{myPokemon?.name}</p>
            <div className="w-24 bg-zinc-200 h-2 rounded-full overflow-hidden border border-zinc-400">
                <div className="bg-green-500 h-full transition-all" style={{ width: `${myHP}%` }}></div>
            </div>
            <p className='text-[10px] font-mono font-bold text-zinc-600'>HP: {myHP}/100</p>
          </div>

          <h2 className='font-black text-xl italic text-zinc-300'>VS</h2>

          <div className="flex flex-col items-center">
            <img src={pcPokemon?.sprites?.front_default} alt={pcPokemon?.name} className="w-20 h-20" />
            <p className='text-sm font-black uppercase'>{pcPokemon?.name}</p>
            <div className="w-24 bg-zinc-200 h-2 rounded-full overflow-hidden border border-zinc-400">
                <div className="bg-red-500 h-full transition-all" style={{ width: `${pcHP}%` }}></div>
            </div>
            <p className='text-[10px] font-mono font-bold text-zinc-600'>HP: {pcHP}/100</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 w-full mt-1 px-2">
          {myMoves.map((m, idx) => (
            <button 
              key={idx} 
              disabled={winner}
              onClick={() => handleAttack(m.attack)}
              className="flex justify-between items-center bg-zinc-100 hover:bg-zinc-800 hover:text-white border border-zinc-300 px-2 py-1 rounded shadow-sm transition-colors active:scale-95"
            >
              <span className="text-[9px] font-bold uppercase truncate mr-1">
                {m.move.name}
              </span>
              <span className="bg-zinc-800 text-white text-[9px] px-1 rounded font-mono group-hover:bg-white group-hover:text-black">
                {m.attack}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
