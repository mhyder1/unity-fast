import Stat from "./Stat";
export default function Stats() {
  return (
    <div className="row stats">
      <div className="col-sm-6 col-lg-3">
        <Stat title="Total of People Fasting" number="8.236K" percent="1.2" />
      </div>
      <div className="col-sm-6 col-lg-3">
        <Stat title="Total Shared" number="2.352M" percent="11" />
      </div>
      <div className="col-sm-6 col-lg-3">
        <Stat title="Total Families Helped" number="8K" percent="5.2" />
      </div>
      <div className="col-sm-6 col-lg-3">
        <Stat title="Total Donated" number="11.8M" percent="2.5" />
      </div>
    </div>
  );
}
