// Lista de pokemons incializada
let pokemonList = [];

// const selectTypeElement = containerElement.querySelector('#typeSelect');
// const selectGenerationElement = containerElement.querySelector('#generationSelect');

window.addEventListener('DOMContentLoaded', () => {
  // Variables para acceder a los elementos del DOM
  const containerElement = document.querySelector('.Pagination');
  pokemonList = JSON.parse(containerElement.dataset.pokemons);


  const initFilter = () => {
    const searchElement = containerElement.querySelector('#searchInput');
    

    filterPokemons(searchElement.value);

    const renderPokemons = () => {
      // Lógica para renderizar los pokemons filtrados
      
      // Limpiar el contenedor
      const cards = pokemonList.querySelectorAll('li');
      cards.forEach((card) => {
        const link = card.querySelector('a');
        if (link) {
          const href = link.getAttribute('href');
          const name = href ? href.split('/').pop().split('?')[0] : ''; // Extraer nombre del href

          // if (filteredNames.has(name)) {
            card.style.display = 'block';    // Mostrar tarjeta
          // } else {
            card.style.display = 'none';      // Ocultar tarjeta
          // }
        }
      });
    };

    searchElement.addEventListener('input', () => renderPokemons());
  }

  const filterPokemons = (searchValue) => {
    // Lógica de filtrado
    const term = searchValue.toLowerCase().trim();

    return pokemonList.filter((pokemon) => {
      const name = pokemon.name.toLowerCase().includes(term);
      const number = pokemon.number.toString().includes(term);

      const nameOrNumber = name || number || '';
      return nameOrNumber;
    });
  };



  // const counterPokemon = () => {}

  // const clearFilter = () => {}

  initFilter();

});  
