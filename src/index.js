import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import { DataProvider } from "./GlobalState";

// Render component App vào #root element
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
