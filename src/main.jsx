import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Week3 from "./3week/Week3";
import Week4 from "./4week/Week4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Week3 /> */}
      <Week4 />
    </BrowserRouter>
  </React.StrictMode>
);
