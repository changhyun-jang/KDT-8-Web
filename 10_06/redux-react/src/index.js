import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./store/toolstore";
import { Provider } from "react-redux";

//10_5 react화
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>
);
