/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest, call } from "redux-saga/effects";

import getPokemon from "services/pokemon/get";

import { PokemonTypes } from "./types";
import { getPokemonSuccess, getPokemonError, setPokemonTotal } from "./actions";

//TODO: implement second request looping, implement search function
function* getPokemons(): any {
  try {
    const { data } = yield call(getPokemon);
    const { count } = data;
    yield put(setPokemonTotal(count));

    yield put(getPokemonSuccess(data));
  } catch (err) {
    yield put(getPokemonError(err as Error));
  }
}

export function* watchPokemon() {
  yield takeLatest(PokemonTypes.GET, getPokemons);
}
