// React:
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// Comps:
import App from "./App";
import { GlobalStyle } from "./global.style";

const Root = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
