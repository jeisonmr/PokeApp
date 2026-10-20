/**
 * Esta función retorna un promesa con una lista de Pokemons.
 */
export const getListPokemons = async():Promise<string[]> =>{
  const api = import.meta.env.API_POKEMON;
  const data = await fetch(api);
  const res = await data.json();

  return res;
}

/**
 * Esta función retorna La información sobre el pokemon solicitado por el ID.
 */
export const getIdPokemons = async (code?:number): Promise<string> =>{
  const api = `${import.meta.env.API_POKEMON}${code}`;
  const data = await fetch(api);
  const res = await data.json();
  return res;
}

/**
 * Esta función retorna una lista de Pokemons con el límite especificado.
 * @param limitPokemon Número de Pokemons a retornar.
 * @returns Promise con la lista de Pokemons.
 */
export const getListPokemonLimit = async (limitPokemon:number):Promise<string[]> => {
  const api = `${import.meta.env.API_POKEMON_PAGINATE}${limitPokemon}`;
  console.log(api);
  const data = await fetch(api);
  const res = await data.json();
  return res;
}