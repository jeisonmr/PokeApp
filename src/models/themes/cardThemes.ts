import type { CardProps } from "@/@core/models/types/card";

export const cardThemes: Record<string, CardProps> = {
  "acero": {
    type: "acero",
    bgCard: 'bg-linear-steel',
    bgCardInternal: 'bg-[var(--color-type-steel-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-steel)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-steel)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-steel-20)]'
    },
    colorBar: 'bg-[var(--color-type-steel)]',
  },
  "agua": {
    type: "agua",
    bgCard: 'bg-linear-water',
    bgCardInternal: 'bg-[var(--color-type-water-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-water)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-water)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-water-20)]'
    },
    colorBar: 'bg-[var(--color-type-water)]',
  },
  "bicho": {
    type: "bicho",
    bgCard: 'bg-linear-bug',
    bgCardInternal: 'bg-[var(--color-type-bug-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-bug)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-bug)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-bug-20)]'
    },
    colorBar: 'bg-[var(--color-type-bug)]',
  },
  "dragon": {
    type: "dragon",
    bgCard: 'bg-linear-dragon',
    bgCardInternal: 'bg-[var(--color-type-dragon-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-dragon)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-dragon)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-dragon-20)]'
    },
    colorBar: 'bg-[var(--color-type-dragon)]',
  },
  "electrico": {
    type: "electrico",
    bgCard: 'bg-linear-electric',
    bgCardInternal: 'bg-[var(--color-type-electric-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-electric)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-electric)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-electric-20)]'
    },
    colorBar: 'bg-[var(--color-type-electric)]',
  },
  "fantasma": {
    type: "fantasma",
    bgCard: 'bg-linear-ghost',
    bgCardInternal: 'bg-[var(--color-type-ghost-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-ghost)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ghost)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ghost-20)]'
    },
    colorBar: 'bg-[var(--color-type-ghost)]',
  },
  "fuego": {
    type: "fuego",
    bgCard: 'bg-linear-fire',
    bgCardInternal: 'bg-[var(--color-type-fire-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-fire)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fire)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fire-20)]'
    },
    colorBar: 'bg-[var(--color-type-fire)]',
  },
  "hada": {
    type: "hada",
    bgCard: 'bg-linear-fairy',
    bgCardInternal: 'bg-[var(--color-type-fairy-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-fairy)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fairy)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fairy-20)]'
    },
    colorBar: 'bg-[var(--color-type-fairy)]',
  },
  "hielo": {
    type: "hielo",
    bgCard: 'bg-linear-ice',
    bgCardInternal: 'bg-[var(--color-type-ice-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-ice)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ice)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ice-20)]'
    },
    colorBar: 'bg-[var(--color-type-ice)]',
  },
  "lucha": {
    type: "lucha",
    bgCard: 'bg-linear-fighting',
    bgCardInternal: 'bg-[var(--color-type-fighting-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-fighting)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fighting)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fighting-20)]'
    },
    colorBar: 'bg-[var(--color-type-fighting)]',
  },
  "normal": {
    type: "normal",
    bgCard: 'bg-linear-normal',
    bgCardInternal: 'bg-[var(--color-type-normal-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-normal)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-normal)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-normal-20)]'
    },
    colorBar: 'bg-[var(--color-type-normal)]',
  },
  "planta": {
    type: "planta",
    bgCard: 'bg-linear-grass',
    bgCardInternal: 'bg-[var(--color-type-grass-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-grass)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-grass)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-grass-20)]'
    },
    colorBar: 'bg-[var(--color-type-grass)]',
  },
  "psiquico": {
    type: "psiquico",
    bgCard: 'bg-linear-psychic',
    bgCardInternal: 'bg-[var(--color-type-psychic-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-psychic)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-psychic)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-psychic-20)]'
    },
    colorBar: 'bg-[var(--color-type-psychic)]',
  },
  "roca": {
    type: "roca",
    bgCard: 'bg-linear-rock',
    bgCardInternal: 'bg-[var(--color-type-rock-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-rock)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-rock)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-rock-20)]'
    },
    colorBar: 'bg-[var(--color-type-rock)]',
  },
  "siniestro": {
    type: "siniestro",
    bgCard: 'bg-linear-dark',
    bgCardInternal: 'bg-[var(--color-type-dark-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-dark)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-dark)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-dark-20)]'
    },
    colorBar: 'bg-[var(--color-type-dark)]',
  },
  "tierra": {
    type: "tierra",
    bgCard: 'bg-linear-ground',
    bgCardInternal: 'bg-[var(--color-type-ground-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-ground)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ground)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ground-20)]'
    },
    colorBar: 'bg-[var(--color-type-ground)]',
  },
  "veneno": {
    type: "veneno",
    bgCard: 'bg-linear-poison',
    bgCardInternal: 'bg-[var(--color-type-poison-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-poison)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-poison)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-poison-20)]'
    },
    colorBar: 'bg-[var(--color-type-poison)]',
  },
  "volador": {
    type: "volador",
    bgCard: 'bg-linear-flying',
    bgCardInternal: 'bg-[var(--color-type-flying-20)]/50',
    border: {
      borderColor: 'border-[var(--color-type-flying)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-flying)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-flying-20)]'
    },
    colorBar: 'bg-[var(--color-type-flying)]',
  },
};
