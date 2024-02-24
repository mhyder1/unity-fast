export default function Stat({ title, number, percent }) {
  return (
    <div className="stat">
      <p className="stat-title">{title}</p>
      <section className="stat-numbers">
        <span className="stat-number">{number}</span>
        <span className="badge text-bg-light">{percent}%</span>
        {/* <i className="bi bi-cash-coin"></i> */}
        {/* <i className="bi-alarm"></i>
        <i className="bi-alarm" style={{fontSize: "2rem", color: "cornflowerblue"}}></i> */}
      </section>
    </div>
  );
}
