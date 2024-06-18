import ReactDOM from "react-dom/client";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import App from "./App.tsx";
import "./index.css";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducers from "./store/state/rootReducers";
import { Provider } from "react-redux";
import "./i18n.ts";
import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "@redux-devtools/extension";

const persistConfig = {
  key: "route",
  storage,
  blacklist: ["auth", "sideBar", "search"],
};

// eslint-disable-next-line
const persistedReducer = persistReducer(persistConfig, rootReducers as any);

// Add your middleware here

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

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
