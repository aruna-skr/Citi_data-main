const express = require("express");
const app = express();
const oracledb = require("oracledb");
const cors = require("cors");
//const cx_Oracle = require("cx_Oracle");

app.use(cors());
app.use(express.json());
let db;

(async function () {
  try {
    // my_dsn = cx_Oracle.makedsn("localhost", 1521, (sid = "xe"));
    // connection = cx_Oracle.connect(
    //   (user = "system"),
    //   (password = "1234"),
    //   (dsn = my_dsn)
    // );
    // db = connection.cursor();
    db = await oracledb.getConnection({
      user: "system",
      password: "jigaba01",
      connectString: "localhost/xe",
    });
    console.log("Successfully connected to Oracle!");
  } catch (err) {
    console.log("Error: ", err);
  }
})();

app.post("/insert", (req, res) => {
  const tablename = req.body.tablename;
  const derivedcol = req.body.derivedcol;
  const logic = req.body.logic;

  db.execute(
    `INSERT INTO LOGIC_DATA (DERIVEDCOL,LOGIC,TABLENAME) VALUES (:1,:2,:3)`,
    [derivedcol, logic, tablename],

    // "INSERT INTO LOGIC_DATA (DERIVEDCOL,LOGIC,TABLENAME) VALUES (" +
    //   derivedcol +
    //   "," +
    //   logic +
    //   "," +
    //   tablename +
    //   ")",
    //"INSERT INTO LOGIC_DATA (DERIVEDCOL,LOGIC,TABLENAME) VALUES ('dc1','a+b','table1')",
    { autoCommit: true },

    (err, result) => {
      if (err) {
        //console.log("heyy");
        console.log(err);
      } else {
        console.log("Values Inserted");
        console.log(result);
      }
    }
  );
});


app.put("/update", (req, res) => {
  const tablename = req.body.tablename;
  const derivedcol = req.body.derivedcol;
  const logic = req.body.logic;

  db.execute(
    `UPDATE logic_data SET logic = :1 WHERE (tablename = :2 AND derivedcol = :3)`,
    [logic, tablename, derivedcol],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  const derivedcol = req.body.derivedcol;
  const logic = req.body.logic;
  db.execute(`DELETE FROM logic_data WHERE (tablename = :1 AND derivedcol = :2)`, 
  [tablename, derivedcol], 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
