import React from "react";
import ReactDOM from "react-dom/client";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "reducers/rootReducer";
import { Provider } from "react-redux";
// import { feturing } from "middlewares/indexMiddlewares";
import { App } from "app/App";
import "styles/normalize.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
