import Pokemon from "types/pokemon";

export enum PokemonTypes {
  GET = "@pokemon/GET",
  GET_SUCCESS = "@pokemon/LIST_SUCCESS",
  GET_ERROR = "@pokemon/LIST_ERROR",
  SET_POKEMON_TOTAL = "@pokemon/SET_TOTAL",
}

export interface PokemonPageState {
  readonly pokemon: Array<Pokemon>;
  readonly totalPokemon: number;
  readonly loading: boolean;
  readonly error: boolean | Error;
}
