import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import artistReducer from "../reducers/artist";
import authReducer from "../reducers/auth";
import transactionsReducer from "../reducers/transaction";
import addTransactionReducer from "../reducers/upgrade";
import musicReducer from "../reducers/music";

// Global state
const reducers = combineReducers({
  auth: authReducer,
  artist: artistReducer,
  addTransaction: addTransactionReducer,
  transactions: transactionsReducer,
  music: musicReducer,
});

const saveSubsetFilter = createFilter("auth", ["isAuthenticated", "data"]);

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"],
  transforms: [saveSubsetFilter],
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistReducer(persistConfig, reducers),
  storeEnhancers(applyMiddleware(promise))
);
export const persistor = persistStore(store);
