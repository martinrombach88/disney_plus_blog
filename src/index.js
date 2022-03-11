import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import Error from "./components/Error";
import ViewMediaItem from "./components/ViewMediaItem";
import ViewReview from "./components/ViewReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="error" element={<Error />} />
          <Route path="media" element={<ViewMediaItem />} />
          <Route path="review" element={<ViewReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
