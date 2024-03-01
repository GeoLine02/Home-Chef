import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import rootReducers from "./store/state/rootReducers";
import { Provider } from "react-redux";

const store = createStore(rootReducers);

store.subscribe(() => {
  console.log("current state", store.getState());
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
