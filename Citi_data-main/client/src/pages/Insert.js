import "./Home.css";
import { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [tablename, setTablename] = useState("");
  const [derivedcol, setDerivedcol] = useState("");
  const [logic, setLogic] = useState("");
  const history = useHistory();

  const insertLogic = () => {
    Axios.post("http://localhost:3001/insert", {
      tablename: tablename,
      derivedcol: derivedcol,
      logic: logic,
    }).then(() => {});
  };

  return (
    <div className="App">
      <div className="information">
        <label>Table name:</label>
        <input
          type="text"
          onChange={(event) => {
            setTablename(event.target.value);
          }}
        />
        <label>Derived column name:</label>
        <input
          type="text"
          onChange={(event) => {
            setDerivedcol(event.target.value);
          }}
        />
        <label>Logic:</label>
        <input
          type="text"
          onChange={(event) => {
            setLogic(event.target.value);
          }}
        />

        <button onClick={() => insertLogic()}>Insert logic</button>
      </div>
    </div>
  );
}

export default Home;
