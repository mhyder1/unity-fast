export default function Stat({ title, number, percent }) {
  return (
    <div className="stat">
      <p class="stat-title">{title}</p>
      <section className="stat-numbers">
        <span className="stat-number">{number}</span>
        <span class="badge text-bg-light">{percent}%</span>
      </section>
    </div>
  );
}
