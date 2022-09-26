import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "tippy.js/dist/tippy.css"; // optional
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { initOpenAPI } from "./openapi/";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Init OpenAPI spec then render
initOpenAPI(store).then((api) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
