import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { PostListContextProvider } from "./Context/PostListContext";
ReactDOM.render(
  <PostListContextProvider>
    <App />
  </PostListContextProvider>,
  document.getElementById("root")
);
