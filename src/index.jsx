// React:
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// Router:
// Router:
import { BrowserRouter } from "react-router-dom";
// Comps:
import App from "./App";
import { GlobalStyle } from "./global.style";

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
