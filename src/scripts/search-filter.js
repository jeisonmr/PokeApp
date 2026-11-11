// ========================================
// 1. VARIABLES GLOBALES
// ========================================
let pokemonsData = [];       // Todos los Pokémon con detalles (viene de index.astro)
let initialized = false;      // Bandera para evitar inicializar 2 veces
let originalCards = [];       // Guardar las tarjetas originales

// ========================================
// 2. NORMALIZAR TIPOS (de inglés a español)
// ========================================
function normalizeType(type) {
  const typeMap = {
    'normal': 'normal',
    'grass': 'planta',
    'fire': 'fuego',
    'water': 'agua',
    'electric': 'eléctrico',
    'ice': 'hielo',
    'fighting': 'lucha',
    'poison': 'veneno',
    'ground': 'tierra',
    'flying': 'volador',
    'psychic': 'psíquico',
    'bug': 'bicho',
    'rock': 'roca',
    'ghost': 'fantasma',
    'dragon': 'dragón',
    'dark': 'siniestro',
    'steel': 'acero',
    'fairy': 'hada'
  };
  return type.map(t => typeMap[t] || t);
}

// ========================================
// 3. FUNCIÓN DE FILTRADO
// ========================================
function filterPokemons(searchTerm, typeFilter, generationFilter) {
  const term = searchTerm.toLowerCase().trim();
  
  return pokemonsData.filter((pokemon) => {
    // Filtrar por nombre
    const matchesName = pokemon.name.toLowerCase().includes(term);
    
    // Filtrar por número
    const matchesNumber = pokemon.number.toString().includes(term);
    
    // Filtrar por tipo
    const matchesType = typeFilter 
      ? pokemon.type.some(t => t.toLowerCase() === typeFilter.toLowerCase())
      : true;
    
    // Filtrar por generación
    const matchesGeneration = generationFilter
      ? pokemon.generation === generationFilter
      : true;
    
    // Si hay búsqueda de texto, coincide si nombre o número coinciden
    const matchesSearch = term === '' || matchesName || matchesNumber;
    
    return matchesSearch && matchesType && matchesGeneration;
  });
}

// ========================================
// 4. ACTUALIZAR VISUAL DE TAGS
// ========================================
function updateFilterTags(typeFilter, generationFilter) {
  const generationTag = document.getElementById('generationTag');
  const typeTag = document.getElementById('typeTag');
  const clearFilters = document.getElementById('clearFilters');
  
  if (generationTag) {
    if (generationFilter) {
      generationTag.classList.remove('hidden');
      generationTag.textContent = `Generación: ${generationFilter}`;
    } else {
      generationTag.classList.add('hidden');
    }
  }
  
  if (typeTag) {
    if (typeFilter) {
      typeTag.classList.remove('hidden');
      typeTag.textContent = `Tipo: ${typeFilter}`;
    } else {
      typeTag.classList.add('hidden');
    }
  }
  
  if (clearFilters) {
    if (typeFilter || generationFilter) {
      clearFilters.classList.remove('hidden');
    } else {
      clearFilters.classList.add('hidden');
    }
  }
}

// ========================================
// 5. LIMPIAR TODOS LOS FILTROS
// ========================================
function clearAllFilters() {
  const searchInput = document.getElementById('searchInput');
  const typeSelect = document.getElementById('typeSelect');
  const generationSelect = document.getElementById('generationSelect');
  
  if (searchInput) searchInput.value = '';
  if (typeSelect) typeSelect.value = '';
  if (generationSelect) generationSelect.value = '';
  
  // Disparar evento para actualizar el filtrado
  const event = new Event('input');
  searchInput.dispatchEvent(event);
  
  const changeEvent = new Event('change');
  if (typeSelect) typeSelect.dispatchEvent(changeEvent);
  if (generationSelect) generationSelect.dispatchEvent(changeEvent);
}

// ========================================
// 6. FUNCIÓN PRINCIPAL (INICIALIZACIÓN)
// ========================================
function initSearchFilter() {
  const searchInput = document.getElementById('searchInput');
  const typeSelect = document.getElementById('typeSelect');
  const generationSelect = document.getElementById('generationSelect');
  const pokemonList = document.querySelector('.grid');
  const clearFilters = document.getElementById('clearFilters');
  
  if (!searchInput || !pokemonList) {
    console.warn('Search input or pokemon list not found');
    return;
  }
  
  // Si ya está inicializado, no hacer nada
  if (initialized) {
    console.log('Search filter already initialized');
    return;
  }
  
  initialized = true;
  
  // Esperar a que los datos estén disponibles
  const checkData = setInterval(() => {
    if (window.pokemonsData && window.pokemonsData.length > 0) {
      pokemonsData = window.pokemonsData;
      clearInterval(checkData);
    }
  }, 100);
  
  // Timeout para evitar espera infinita
  setTimeout(() => clearInterval(checkData), 5000);
  
  function filterAndRender() {
    const searchTerm = searchInput.value;
    const typeFilter = typeSelect ? typeSelect.value : '';
    const generationFilter = generationSelect ? generationSelect.value : '';
    
    const filtered = filterPokemons(searchTerm, typeFilter, generationFilter);
    const filteredNames = new Set(filtered.map(p => p.name));
    
    console.log('Search term:', searchTerm);
    console.log('Type filter:', typeFilter);
    console.log('Generation filter:', generationFilter);
    console.log('Filtered count:', filtered.length);
    
    // Actualizar visibilidad de tags
    updateFilterTags(typeFilter, generationFilter);
    
    // Actualizar contador
    const countElement = document.querySelector('h3');
    if (countElement) {
      countElement.innerHTML = `${filtered.length} Pókemon <span class="tex-white">encontrados</span>`;
    }
    
    // Ocultar/mostrar tarjetas por nombre
    const cards = pokemonList.querySelectorAll('li');
    cards.forEach((card) => {
      const link = card.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        const name = href ? href.split('/').pop().split('?')[0] : '';
        
        if (filteredNames.has(name)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }
  
  searchInput.addEventListener('input', filterAndRender);
  
  if (typeSelect) {
    typeSelect.addEventListener('change', filterAndRender);
  }
  
  if (generationSelect) {
    generationSelect.addEventListener('change', filterAndRender);
  }
  
  if (clearFilters) {
    clearFilters.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllFilters();
    });
  }
}

// Ejecutar cuando el DOM esté listo y también en cada navegación de página
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchFilter);
  } else {
    initSearchFilter();
  }
  
  // Re-inicializar en cada navegación de Astro ClientRouter
  document.addEventListener('astro:page-load', () => {
    initialized = false; // Resetear flag para permitir re-inicialización
    initSearchFilter();
  });
}

export default { filterPokemons };
