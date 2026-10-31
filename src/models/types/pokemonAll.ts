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


// GenerationProps
export interface GenerationProps {
    [key: string]: {
        init: number;
        end: number;
    };
}