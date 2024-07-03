import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import DetailsBook from "./components/DetailsBook";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<DetailsBook />} />
      </Routes>
    </div>
  );
}

export default App;
