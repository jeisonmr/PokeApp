# PokeWeb

Aplicación web estática (SSG) de una Pokédex interactiva construida con Astro. Muestra la información de los primeros 1025 Pokémon (generaciones 1 a 9) consumiendo la [PokeAPI](https://pokeapi.co), con búsqueda, filtrado, paginación y páginas de detalle con estadísticas, habilidades, afinidades de tipo y línea evolutiva.

## Características principales

- **Catálogo completo de Pokémon**: 1025 Pokémon de las generaciones 1–9 con imagen, número, tipo y generación.
- **Búsqueda y filtrado en cliente**: búsqueda por nombre, filtro por tipo y por generación, sin recargar la página.
- **Paginación**: la lista principal se divide en páginas de 12 Pokémon.
- **Página de detalle por Pokémon**: ruta dinámica `/pokemon/[name]` con:
  - Descripción (texto de flavor de la especie).
  - Estadísticas base.
  - Habilidades.
  - Afinidades de tipo (eficaz contra, debilidades, resistencias, inmunidades).
  - Línea evolutiva navegable.
- **Diseño responsivo**: estilos mobile-first con breakpoints `movil:` y `desktop:`.
- **Temas por tipo**: cada Pokémon adapta su paleta de colores según su tipo.
- **SEO**: metadatos Open Graph, canonical, keywords y transiciones de página con `ClientRouter` de Astro.
- **Recursos locales**: fuentes propias (Inter, Pokémon) e íconos/banner por tipo alojados en `public/`.

## Vista previa

Demo en producción: **https://pokemoncolombia.netlify.app/**

> Capturas de pantalla: pendiente — agrega imágenes en `docs/screenshots/` y referéncialas aquí.

## Tecnologías utilizadas

| Tecnología | Propósito |
|---|---|
| [Astro](https://astro.build) | Framework de sitios estáticos; genera HTML en tiempo de compilación |
| TypeScript | Tipado en servicios, modelos y componentes (`.ts` / `.astro`) |
| Tailwind CSS v4 | Estilos utility-first vía `@tailwindcss/vite` |
| Swiper | Carrusel de banners por tipo de Pokémon |
| PokeAPI | Fuente de datos de Pokémon (consumida durante el build) |

## Requisitos previos

- **Node.js** `>= 22.12.0` (definido en `package.json` → `engines`)
- **npm** (incluido con Node.js)
- Acceso a internet durante el build, ya que la aplicación consulta la PokeAPI en tiempo de compilación

## Instalación y configuración

```bash
git clone https://github.com/jeisonmr/Pokemon-SSG_WP.git
cd Pokemon-SSG_WP
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz con las siguientes variables (valores de ejemplo, sin secretos):

```env
PUBLIC_API_ALL_POKEMONS=https://pokeapi.co/api/v2/pokemon
PUBLIC_API_LIMIT_POKEMON_NUMBER=https://pokeapi.co/api/v2/pokemon?limit=
PUBLIC_API_SPECIES_POKEMON=https://pokeapi.co/api/v2/pokemon-species/
PUBLIC_API_TYPES_POKEMON=https://pokeapi.co/api/v2/type/
PUBLIC_API_EVOLUTION_POKEMON=https://pokeapi.co/api/v2/evolution-chain/
```

| Variable | Finalidad |
|---|---|
| `PUBLIC_API_ALL_POKEMONS` | Endpoint base para listar todos los Pokémon |
| `PUBLIC_API_LIMIT_POKEMON_NUMBER` | Endpoint para listar Pokémon con límite/offset |
| `PUBLIC_API_SPECIES_POKEMON` | Endpoint de especies (generación, descripción) |
| `PUBLIC_API_TYPES_POKEMON` | Endpoint de tipos (afinities de daño) |
| `PUBLIC_API_EVOLUTION_POKEMON` | Endpoint de cadenas evolutivas |

> **Seguridad:** todas las variables usan el prefijo `PUBLIC_`/`VITE_`-style de Astro, por lo que quedan **expuestas al navegador**. Nunca coloques secretos, tokens ni claves API privadas en estas variables. Los archivos `.env` ya están excluidos del control de versiones mediante `.gitignore`.

## Ejecución del proyecto

```bash
npm run dev
```

El servidor de desarrollo inicia en `http://localhost:4321`. La home muestra el catálogo con búsqueda y filtros, y cada Pokémon enlaza a su página de detalle en `/pokemon/<nombre>`.

También es posible ejecutar el CLI de Astro directamente:

```bash
npm run astro -- --help
```

## Compilación y despliegue

```bash
npm run build    # genera el sitio estático en ./dist/
npm run preview  # sirve localmente la compilación de producción
```

El resultado en `dist/` es HTML/CSS/JS estático, apto para cualquier hosting estático. El proyecto está desplegado en **Netlify** (`pokemoncolombia.netlify.app`) con build command `npm run build` y publish directory `dist` (configuración estándar de Netlify, no versionada en el repo).

## Estructura del proyecto

```text
├── public/                  # Activos estáticos (imágenes, íconos, banners por tipo)
├── src/
│   ├── @core/               # Librería de componentes genéricos
│   │   └── components/      # Button, Icon, Pagination, SearchFilter, Swiper, Typographi
│   ├── components/
│   │   ├── blocks/          # Banner y Footer (bloques de página completos)
│   │   └── ui/              # Cards de Pokémon, Nav, tarjetas de estadísticas/habilidades
│   ├── data/                # data.json (IDs de banners y lista de tipos)
│   ├── fonts/               # Fuentes locales (Inter, Pokémon)
│   ├── layout/              # Layout.astro (head, SEO, Nav, Footer)
│   ├── models/              # Tipos TypeScript y temas de color por tipo
│   ├── pages/               # Rutas: index.astro y pokemon/[name].astro
│   ├── scripts/             # JS de cliente (main.js, search-filter.js)
│   ├── services/            # api.services.ts — llamadas a la PokeAPI
│   ├── styles/              # CSS global, tema, fuentes y utilidades
│   └── utils/               # Constantes de API, generaciones y helpers
├── astro.config.mjs         # Configuración de Astro + plugin de Tailwind
├── tailwind.config.js       # Configuración de Tailwind CSS v4
├── tsconfig.json            # Paths alias (@/, @core/, @components/, etc.)
└── package.json
```

## Arquitectura y funcionamiento

- **SSG puro**: al ejecutar `npm run build` (o durante `astro dev`), Astro consulta la PokeAPI desde el servidor y genera una página estática por cada Pokémon vía `getStaticPaths()` en `src/pages/pokemon/[name].astro`.
- **Capa de servicios**: `src/services/api.services.ts` encapsula todas las llamadas a la PokeAPI (`getPokemonLimit`, `getNamePokemon`, `getSpecies`, `getTypesPokemon`, `getEvolutionPokemon`, etc.). Las URLs base provienen de las variables de entorno en `src/utils/constants/api.constants.ts`.
- **Modelos y temas**: los tipos de datos de la API están definidos en `src/models/types/` y los temas visuales por tipo de Pokémon en `src/models/themes/cardThemes.ts`.
- **Componentes**:
  - `src/@core/` contiene componentes reutilizables e independientes del dominio (paginación, buscador, carrusel, tipografía).
  - `src/components/` contiene componentes específicos del proyecto (cards de Pokémon, banner, footer, navegación).
- **Interactividad en cliente**: la búsqueda, los filtros y la paginación funcionan con JavaScript vanilla (`src/scripts/`) sobre los datos serializados en `window.pokemonsData` desde `index.astro`.
- **Estilos**: Tailwind CSS v4 integrado como plugin de Vite (`astro.config.mjs`), con CSS personalizado en `src/styles/` y aliases de rutas configurados en `tsconfig.json`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio estático en `./dist/` |
| `npm run preview` | Previsualiza localmente la compilación de producción |
| `npm run astro` | Ejecuta el CLI de Astro (`astro add`, `astro check`, etc.) |

## Contribuciones

Las contribuciones son bienvenidas:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y verifica que `npm run build` compile sin errores.
4. Haz commit de tus cambios y abre un Pull Request describiendo el cambio.

## Licencia

Este proyecto no incluye un archivo de licencia. Todos los derechos reservados salvo indicación contraria.

## Autor

**Jeison Muñoz Rada** — [@jeisonmr](https://github.com/jeisonmr)
