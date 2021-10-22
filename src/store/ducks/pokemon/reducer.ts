import { Reducer } from "redux";
import { PokemonPageState, PokemonTypes } from "./types";

export const INITIAL_STATE: PokemonPageState = {
  pokemon: [],
  totalPokemon: 0,
  loading: false,
  error: false,
};

const reducer: Reducer<PokemonPageState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonTypes.GET:
      return { ...state, loading: true };
    case PokemonTypes.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pokemon: action.payload,
      };
    case PokemonTypes.GET_ERROR:
      return { ...state, loading: false, pokemon: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
