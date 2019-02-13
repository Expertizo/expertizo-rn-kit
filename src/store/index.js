import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
|--------------------------------------------------
| Main Store, Responsible for Redux, react-redux and redux-persist integrations
|--------------------------------------------------
*/

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
