import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import Error from "./components/Error";
import ArticleView from "./components/ArticleView";
import CreateReview from "./components/CreateReview";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="error" element={<Error />} />
          <Route path="article" element={<ArticleView />} />
          <Route path="createReview" element={<CreateReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
