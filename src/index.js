// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { APIProvider } from "./utils/api";
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <APIProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </APIProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
