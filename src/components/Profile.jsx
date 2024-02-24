import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
export default function Profile() {
  const {
    state: { user },
  } = useLocation();
  return (
    <>
      <Link to="/">Back</Link>
      {/* <Card
        title="Long Headline with Two Lines"
        text="A short but complete sentence that takes up two lines"
        user={user}
      /> */}
      <div className="card card-details">
        {/* <Link to={`/user/${user?.id}`} state={{ user }}>git add */}
        <div className="card-header">{user?.name}</div>
        {/* </Link> */}
        <div className="card-body card-details-body">
          <h5 className="card-title">{"title"}</h5>
          <p className="card-text">dob: {user.dob}</p>
          <p className="card-text">gender: {user.sex}</p>
          <p className="card-text">age: {user.age}</p>
          {/* <form>
            <label for="unityfast" class="form-label">
              How many days do you pledge to fast?
            </label>
            <input
              id="unityfast"
              class="form-control form-control-sm"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            />
          </form> */}
        </div>
        <div className="card-footer">➕📅📌🏳️</div>
      </div>
    </>
  );
}
