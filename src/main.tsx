import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import rootReducers from "./store/state/rootReducers";
import { Provider } from "react-redux";
const store = createStore(rootReducers);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
