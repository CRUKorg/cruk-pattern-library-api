import React from "react";
import { hydrate } from "react-dom";
import Data from "./data";
import App from "./app";

import "./app.css";

Data().then(menuData => {
  hydrate(<App data={menuData} />, document.getElementById("root"));
});
