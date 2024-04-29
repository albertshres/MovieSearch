import React from "react";
import Home from "./component/Home";
import SingleMovie from "./component/SingleMovie";
import Error from "./component/Error";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
