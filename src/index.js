import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <App />

);