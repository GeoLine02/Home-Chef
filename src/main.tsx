import ReactDOM from "react-dom/client";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import App from "./App.tsx";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import rootReducers from "./store/state/rootReducers";
import { Provider } from "react-redux";
import "./i18n.ts";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "route",
  storage,
};

// eslint-disable-next-line
const persistedReducer = persistReducer(persistConfig, rootReducers as any);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

store.subscribe(() => {
  console.log("current state", store.getState());
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
