import "./Home.css";
import { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="App">
      <div className="information">
        <button
          onClick={() => {
            history.push("/insert");
          }}
        >
          Insert logics
        </button>
        <button
          onClick={() => {
            history.push("/update");
          }}
        >
          Update logic details
        </button>
        <button
          onClick={() => {
            history.push("/delete");
          }}
        >
          Delete logics
        </button>
        {/* <Link to="/insert">
          <button>Insert</button>
        </Link>  */}
      </div>
    </div>
  );
}

export default Home;
