import header from "../assets/header.webp";
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
      <h1>Unity Fast: A 30-Day Vigil Honoring Lives Lost in Gaza</h1>
      <p>Join UnityFast - a 30 day Ramadan vigil</p>
      <p>starting March 11th</p>
    </div>
  );
}
