import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Cards from "./components/Cards";
import Profile from "./components/Profile";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Header />
      <Stats />
      {/* <Cards /> */}
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
