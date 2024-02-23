import { Link } from "react-router-dom";
export default function Card({ tagline, title, text, user }) {
  return (
    <div className="card card-details">
      <Link to={`/user/${user?.id}`} state={{ user }}>
        <div className="card-header">{user?.name}</div>
      </Link>
      <div className="card-body card-details-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">➕📅📌🏳️</div>
    </div>
  );
}

// color: transparent;
//   text-shadow: 0 0 0 red;
