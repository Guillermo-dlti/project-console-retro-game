import React from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  return (
    <>
      <div className="w-[440px] h-[250px] border-y-4 border-solid">
        <div className="flex flex-col items-center justify-center">
          <h1 className='mt-2 mb-4 text-2xl font-extrabold'>Pokemon Battle</h1>
          <div className='flex  items-center gap-8'>
            {myPokeSelection?.map((pokemon, index) => (
              <div key={index} className="flex flex-col items-center" >
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon.name}
                  className="w-35 h-35"
                />
                <p className='text-lg'>{pokemon.name}</p>
              </div>
            ))}
            <h2 className='font-bold text-3xl'>VS.</h2>
            {pcPokeSelection?.map((pokemon, index) => (
              <div key={index} className="flex flex-col items-center" >
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon.name}
                  className="w-35 h-35"
                />
                <p className='text-lg'>{pokemon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GameScreen
