import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import ReducerTypes from "./ducks/types";

const sagaMiddleware = createSagaMiddleware();

const store: Store<ReducerTypes> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
