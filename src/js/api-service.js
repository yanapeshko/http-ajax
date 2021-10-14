const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json(),
  );
}

export default { fetchPokemon };

// function fetchPokemon(pokemonId){
//   const url= `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   return fetch(url).then(response=>response.json());
// }