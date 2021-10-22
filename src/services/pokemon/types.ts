export interface PokemonBasicReturn {
  name: string;
}

export interface PokemonGetReturn {
  count: number;
  results: [PokemonBasicReturn];
}
