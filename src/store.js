import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
