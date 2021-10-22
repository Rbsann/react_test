/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, fork } from "redux-saga/effects";

import { watchPokemon } from "./pokemon/saga";

export default function* IndexSagas(): any {
  return yield all([fork(watchPokemon)]);
}
