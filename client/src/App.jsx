import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Cancle, Success } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cancel" element={<Cancle />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
