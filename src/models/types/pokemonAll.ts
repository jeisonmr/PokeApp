export interface PokemonAllProps {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

// Pokemon con detalles completos
export interface PokemonDetails {
    name: string;
    image: string | null | undefined;
    type: string[];
    typeEn: string[];
    number: number;
    generation?: string;
}

// GenerationProps
export interface GenerationProps {
    [key: string]: {
        init: number;
        end: number;
    };
}