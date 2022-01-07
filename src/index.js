import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App name="our app" description="hello i am app" />
  </React.StrictMode>,
  document.getElementById("root")
);
