import { ApiEvolution, ApiPokemon, ApiPokemonLimit, ApiPokemonSpecies, ApiType } from "@/utils/constants/api.constants";
import { generations } from "@/utils/constants/services.constans";
import type { PokemonProps } from "@/models/types/pokemon";
import type { GenerationProps, PokemonAllProps } from "@/models/types/pokemonAll";
import type { TypeApiResponse } from "@/models/types/pokemonType";

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
export const getIdPokemon = async (id?:any): Promise<PokemonProps> =>{
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

/**
 * Esta función retorna la información de un Pokemon específico por su nombre o ID.
 * @param pokemon Nombre o ID del Pokemon.
 * @returns Promise con la información del Pokemon.
 */
export const getSpecies = async (pokemon:number|string):Promise<PokemonAllProps> => {
  const api = `${ApiPokemonSpecies}${pokemon}`;
  const data = await fetch(api);
  const res = await data.json() as PokemonAllProps;
  return res;
}


/**
 * Esta función retorna los tipos del pokemon.
 * @param name.
 * @returns Promesa con los tipos del pokemon.
 */
export const getTypesPokemon = async (name:string):Promise<TypeApiResponse> => {
  const api = `${ApiType}${name}`;
  const data = await fetch(api);
  const res = await data.json() as TypeApiResponse;

  return res;
}


/**
 * Esta función retorna la linea evolutiva de un pokemon.
 * @param name ID del pokemon.
 * @returns Promise con la información evolutiva del pokemon.
 */
export const getEvolutionPokemon = async (id: number): Promise<any[]> => {
  const species = await getSpecies(id);
  const evolutionResponse = await fetch(species.evolution_chain.url);
  const evolutionData = await evolutionResponse.json();

  const getEvolutions = async (chain: any): Promise<any[]> => {
    const pokemon = await getNamePokemon(chain.species.name);
    
    const currentPokemon = {
      name: pokemon.name,
      sprites: pokemon.sprites?.versions?.['generation-viii']?.['brilliant-diamond-shining-pearl']?.front_default
          || pokemon.sprites?.versions?.['generation-viii']?.['sword-shield']?.front_default
          || pokemon.sprites?.versions?.['generation-viii']?.['legends-arceus']?.front_default,
      types: pokemon.types,
    };

    const nextEvolutions = await Promise.all(
      chain.evolves_to.map(getEvolutions)
    );

    return [
      currentPokemon,
      ...nextEvolutions.flat(),
    ];
  };

  return getEvolutions(evolutionData.chain);
};