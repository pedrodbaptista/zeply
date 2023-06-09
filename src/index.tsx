import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Index from "./Init";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();
