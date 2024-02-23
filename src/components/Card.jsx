export default function Card({ tagline, title, text }) {
  return (
    <div className="card card-details">
      <div className="card-header">{tagline}</div>
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
