import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
export default function Profile() {
  const [daysToFast, setDaysToFast] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(daysToFast === 0 || daysToFast === "How many days") return;
    alert(`You have pledged to fast ${daysToFast} days`)
  };

  const handleChange = (e) => {
    setDaysToFast(e.target.value)
  }

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
      <div className="card card-profile">
        {/* <Link to={`/user/${user?.id}`} state={{ user }}>git add */}
        <div className="card-header">{user?.name}</div>
        {/* </Link> */}
        <div className="card-body card-details-body">
          <h5 className="card-title">{user.en_name}</h5>
          <p className="card-text">dob: {user.dob}</p>
          <p className="card-text">gender: {user.sex}</p>
          <p className="card-text">age: {user.age}</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor="unityfast" className="form-label">
              Pledge to fast!
            </label>
            <div style={{ display: "flex" }}>
              <select
                className="form-select form-select-sm"
                aria-label="Small select example"
                id="unityfast"
                onChange={handleChange}
                value={daysToFast}
              >
                <option defaultValue={0}>How many days</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                type="submit"
                className="btn btn-sm btn-success"
                style={{ marginLeft: "10px" }}
              >
                Pledge
              </button>
            </div>

            {/* <input
              id="unityfast"
              class="form-control form-control-sm"
              type="text"
              placeholder=".form-control-sm"
              aria-label=".form-control-sm example"
            /> */}
          </form>
        </div>
        <div className="card-footer">➕📅📌🏳️</div>
      </div>
    </>
  );
}
