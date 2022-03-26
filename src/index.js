import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import {StateProvider} from './Context/StateProvider'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
