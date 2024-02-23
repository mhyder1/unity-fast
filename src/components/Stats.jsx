import Stat from "./Stat";
export default function Stats() {
  return (
    <div className="stats">
      <Stat title="Total of People Fasting" number="8.236K" percent="1.2" />
      <Stat title="Total Shared" number="2.352M" percent="11" />
      <Stat title="Total Families Helped" number="8K" percent="5.2" />
      <Stat title="Total Donated" number="11.8M" percent="2.5" />
    </div>
  );
}
