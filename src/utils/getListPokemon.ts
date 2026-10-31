import type { PokemonProps } from "@/models/types/pokemon";
import type { GenerationProps, PokemonAllProps } from "@/models/types/pokemonAll";


const ApiPokemon = import.meta.env.API_ALL_POKEMONS;
const ApiPokemonLimit = import.meta.env.API_LIMIT_POKEMON_NUMBER;

const generations = {
  1: { init: 1, end: 151 },
  2: { init: 152, end: 251 },
  3: { init: 252, end: 386 },
  4: { init: 387, end: 493 },
  5: { init: 494, end: 649 },
  6: { init: 650, end: 721 },
  7: { init: 722, end: 809 },
  8: { init: 810, end: 905 },
  9: { init: 906, end: 1025 },
} as GenerationProps;

/**
 * Retorna todos los Pokemons de la API.
 * Incluye el nombre y la URL de cada Pokemon.
 * @returns Promise con la lista de Pokemons.
 */
export const getAllPokemons = async():Promise<PokemonAllProps> =>{
  try {
    const data = await fetch(ApiPokemon);
    const res = await data.json();
    return res.results;
    
  } catch (error) {
    console.error("Error al obtener todos los pokemons:", error);
    return {} as PokemonAllProps;
  }
}


/**
 * Retorna la información de un Pokemon específico por su ID.
 * @param code ID del Pokemon.
 * @returns Promise con la información del Pokemon.
 */
export const getIdPokemon = async (id?:number): Promise<PokemonProps> =>{
  const api = `${ApiPokemon}${id}`;
  const data = await fetch(api);
  const res = await data.json();
  return res;
}


/**
 * Retorna la información de un Pokemon específico por su nombre.
 * @param name Nombre del Pokemon.
 * @returns Promise con la información del Pokemon.
 */
export const getNamePokemon = async (name?:string): Promise<PokemonProps> =>{
  const api = `${ApiPokemon}${name}`;
  const data = await fetch(api);
  const res = await data.json();
  return res;
}


/**
 * Esta función retorna una lista de Pokemons con el límite especificado.
 * @param amount Número de Pokemons a retornar.
 * @returns Promise con la lista de Pokemons.
 */
export const getPokemonLimit = async (amount:number):Promise<PokemonAllProps> => {
  const api = `${ApiPokemonLimit}${amount}`;
  const data = await fetch(api);
  const res = await data.json();
  return res;
}


/**
 * Esta función retorna una lista de Pokemons según la generación.
 * @param genreration. Número de la generación (1-9).
 * @returns Promise con la lista de Pokemons.
 */

export const getPokemonGeneration = async (generation:string):Promise<PokemonAllProps> => {
  let init, end:number;
  const gen = generations[generation as keyof GenerationProps];
  init = gen.init;
  end = gen.end;

  const api = `${ApiPokemonLimit}?limit=${init}&offset=${end}`;
  const data = await fetch(api);
  const res = await data.json();
  return res;
}
