import { getAllPokemons, getIdPokemon, getNamePokemon } from '@/services/api.services';
import IdBanners from '../data/data.json';



document.addEventListener('DOMContentLoaded', () => { 
    
    // Componentes
    const banner_block = document.querySelector('.Banner');
    const mobileImageBanner = banner_block?.querySelector('.images_mobile');
    const desktopImageBanner = banner_block?.querySelector('.images_desktop');
    const titleBanner = banner_block?.querySelector('.titleBanner');
    
    const pokemonImage = document.querySelector('.Banner');
    const pokemonImageSrc = pokemonImage?.querySelector('.pokemon_image')?.getAttribute('src');

    let dataPokemonList = JSON.parse(pokemonImage?.getAttribute('data-pokemon'));

    // titleBanner.textContent = dataPokemonList[1].name;

    
    console.log(dataPokemonList);
  });