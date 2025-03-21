import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import Game from "./game/Game";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
);
