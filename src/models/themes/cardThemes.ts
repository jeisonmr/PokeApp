import type { CardProps } from "@/@core/models/types/card";

export const cardThemes: Record<string, CardProps> = {
  "acero": {
    type: "acero",
    bgCard: 'bg-linear-steel',
    border: {
      borderColor: 'border-[var(--color-type-steel)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-steel)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-steel-20)]'
    },
  },
  "agua": {
    type: "agua",
    bgCard: 'bg-linear-water',
    border: {
      borderColor: 'border-[var(--color-type-water)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-water)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-water-20)]'
    },
  },
  "bicho": {
    type: "bicho",
    bgCard: 'bg-linear-bug',
    border: {
      borderColor: 'border-[var(--color-type-bug)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-bug)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-bug-20)]'
    },
  },
  "dragon": {
    type: "dragon",
    bgCard: 'bg-linear-dragon',
    border: {
      borderColor: 'border-[var(--color-type-dragon)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-dragon)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-dragon-20)]'
    },
  },
  "electrico": {
    type: "electrico",
    bgCard: 'bg-linear-electric',
    border: {
      borderColor: 'border-[var(--color-type-electric)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-electric)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-electric-20)]'
    },
  },
  "fantasma": {
    type: "fantasma",
    bgCard: 'bg-linear-ghost',
    border: {
      borderColor: 'border-[var(--color-type-ghost)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ghost)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ghost-20)]'
    },
  },
  "fuego": {
    type: "fuego",
    bgCard: 'bg-linear-fire',
    border: {
      borderColor: 'border-[var(--color-type-fire)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fire)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fire-20)]'
    },
  },
  "hada": {
    type: "hada",
    bgCard: 'bg-linear-fairy',
    border: {
      borderColor: 'border-[var(--color-type-fairy)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fairy)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fairy-20)]'
    },
  },
  "hielo": {
    type: "hielo",
    bgCard: 'bg-linear-ice',
    border: {
      borderColor: 'border-[var(--color-type-ice)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ice)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ice-20)]'
    },
  },
  "lucha": {
    type: "lucha",
    bgCard: 'bg-linear-fighting',
    border: {
      borderColor: 'border-[var(--color-type-fighting)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-fighting)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-fighting-20)]'
    },
  },
  "normal": {
    type: "normal",
    bgCard: 'bg-linear-normal',
    border: {
      borderColor: 'border-[var(--color-type-normal)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-normal)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-normal-20)]'
    },
  },
  "planta": {
    type: "planta",
    bgCard: 'bg-linear-grass',
    border: {
      borderColor: 'border-[var(--color-type-grass)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-grass)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-grass-20)]'
    },
  },
  "psiquico": {
    type: "psiquico",
    bgCard: 'bg-linear-psychic',
    border: {
      borderColor: 'border-[var(--color-type-psychic)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-psychic)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-psychic-20)]'
    },
  },
  "roca": {
    type: "roca",
    bgCard: 'bg-linear-rock',
    border: {
      borderColor: 'border-[var(--color-type-rock)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-rock)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-rock-20)]'
    },
  },
  "siniestro": {
    type: "siniestro",
    bgCard: 'bg-linear-dark',
    border: {
      borderColor: 'border-[var(--color-type-dark)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-dark)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-dark-20)]'
    },
  },
  "tierra": {
    type: "tierra",
    bgCard: 'bg-linear-ground',
    border: {
      borderColor: 'border-[var(--color-type-ground)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-ground)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-ground-20)]'
    },
  },
  "veneno": {
    type: "veneno",
    bgCard: 'bg-linear-poison',
    border: {
      borderColor: 'border-[var(--color-type-poison)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-poison)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-poison-20)]'
    },
  },
  "volador": {
    type: "volador",
    bgCard: 'bg-linear-flying',
    border: {
      borderColor: 'border-[var(--color-type-flying)]/10',
      hoverBorderColor: 'hover:border-[var(--color-type-flying)]/20',
    },
    tag: {
      bgTag: 'bg-[var(--color-type-flying-20)]'
    },
  },
};
