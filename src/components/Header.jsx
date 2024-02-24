import header from "../assets/header.webp";
// import logo from "../assets/logo_small.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${header})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/">
          <button className="btn btn-light">Home</button>
          {/* <img src={logo} alt="Unity Fast logo" /> */}
        </Link>
        <Link to="/about">
          <button className="btn btn-light">About</button>
        </Link>
      </div>

      <h1>
        Unity Fast: <br />A 30-Day Vigil Honoring Lives Lost in Gaza
      </h1>
      <p>Join UnityFast - a 30 day Ramadan vigil</p>
      <p>starting March 11th</p>
    </div>
  );
}
