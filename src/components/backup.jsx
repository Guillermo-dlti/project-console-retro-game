// import { useEffect, useState } from 'react';
// import './App.css';
// import LeftControl from './components/LeftControl';
// import RightControl from './components/RightControl';
// import Screen from './components/Screen';
// import GameScreen from './components/GameScreen';
// import useFetch from './hooks/useFetch';
// import PokemonDetails from './components/PokemonDetails';

// function App() {
//   const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
//   const { data, loading, error } = useFetch(url);

//   // sanitizer data 
//   const [pokemones, setPokemones] = useState([]);
  
//   const getListPokemones = () => {
//     const list = data?.results?.filter((p) => p.url);
//     const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

//     Promise.all(plist).then((values) => {
//       const saniData = values?.map((e) => {
//         return {
//           name: e.name,
//           id: e.id,
//           types: e.types,
//           moves: e.moves.map((e) => {
//             return {
//               ...e,
//               attack: getRandomInt(20, 98),
//             };
//           }),
//           sprites: e.sprites,
//         };
//       });

//       setPokemones(saniData);
//     });
//   };

//   useEffect(() => {
//     getListPokemones();
//   }, [data]);

//   const [position, setPosition] = useState(1);

//   useEffect(() => {
//     if (pokemones.length > 0) {
//       const encontrado = pokemones.filter((p) => p.id === position);
//       setPokemonActual(encontrado);
//     }
//   }, [position, pokemones]);

//   // Handle Direction

//   const [myPokeSelection, setMyPokeSelection] = useState([]);
//   const [pcPokeSelection, setPcPokeSelection] = useState([]);

//   const [pokemonActual, setPokemonActual] = useState([]);

//   const handleDirection = (direction) => {

//     if (direction === 'right' && position + 1 < 101) {
//       setPosition((prev) => prev + 1);
//     } else if (direction === 'left' && position - 1 > 0) {
//       setPosition((prev) => prev - 1);
//     } else if (direction === 'down' && position + 4 < 101) {
//       setPosition((prev) => prev + 4);
//     } else if (direction === 'up' && position - 4 > 0) {
//       setPosition((prev) => prev - 4);
//     } else {
//       setPosition(1);
//     }
//   };

//   function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
//   }

//   const computerSelection = () => {
//     const rnd = getRandomInt(1, 100);
//     const pc = pokemones.filter((p) => p.id === rnd);
//     // console.log(pc);
//     setPcPokeSelection(pc);
//   }

//   const handleSelection = () => {
//     const selectPokemon = pokemones.filter((p) => p.id === position)
//     // console.log(selectPokemon);
//     setMyPokeSelection(selectPokemon);
//     computerSelection();
//   }

//   console.log("my", myPokeSelection.length, myPokeSelection)
//   console.log("pc", pcPokeSelection.length, pcPokeSelection)
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 p-4">
//       <div className="flex items-center justify-center">
//         <LeftControl handleDirection={handleDirection} />
//         {myPokeSelection.length && pcPokeSelection.length ? (
//           <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection} />
//         ) : (
//           <Screen pokemones={pokemones} position={position} />
//         )}


//         <RightControl handleSelection={handleSelection} />
//       </div>
//       <div className="mt-8 w-full max-w-[640px]">
//         <PokemonDetails actual={myPokeSelection}/>
//       </div>

//     </div>
//   );
// }

// export default App;


// // back_default y front_default
