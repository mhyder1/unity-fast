import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Stats />
      <Cards />
    </div>
  );
}

export default App;
