import "./Home.css";
import { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [tablename, setTablename] = useState("");
  const [derivedcol, setDerivedcol] = useState("");
  const history = useHistory();

  const deleteLogic = () => {
    Axios.delete("http://localhost:3001/delete", {
      tablename: tablename,
      derivedcol: derivedcol,
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

        <button onClick={() => deleteLogic()}>Delete Row</button>
      </div>
    </div>
  );
}

export default Home;
