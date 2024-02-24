import Card from "./Card";
import { data } from "../data";
export default function Cards() {
  return (
    <div className="row custom-grid">
      {data.map((user) => (
        <Card
          key={user.id}
          title={user.en_name}
          text="A short but complete sentence that takes up two lines"
          user={user}
        />
      ))}
    </div>
  );
}
