import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Cards from "./components/Cards";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Stats />
      {/* <Cards /> */}
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
