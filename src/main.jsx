import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Week4 from "./4week/Week4";
import Week5 from "./5week/Week5";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Week4 /> */}
      <Week5 />
    </BrowserRouter>
  </React.StrictMode>
);
