import { action } from "typesafe-actions";

import { PokemonTypes } from "./types";
import Pokemon from "types/pokemon";

export const getPokemon = () => action(PokemonTypes.GET);

export const setPokemonTotal = (data: number) =>
  action(PokemonTypes.SET_POKEMON_TOTAL, data);

export const getPokemonSuccess = (data: Array<Pokemon>) =>
  action(PokemonTypes.GET_SUCCESS, data);

export const getPokemonError = (error: Error) =>
  action(PokemonTypes.GET_ERROR, error);
