import Card from "./Card";
import { data } from "../data";
export default function Cards() {
  return (
    <div className="card-display">
      {data.map((user) => (
        <Card
          tagline={user.en_name}
          title="Long Headline with Two Lines"
          text="A short but complete sentence that takes up two lines"
        />
      ))}
    </div>
  );
}
